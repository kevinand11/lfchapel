import { computed, reactive } from '@vue/composition-api'
import { TestimonyEntity } from '@modules/form/domain/entities/testimony'
import {
	DeleteTestimony, GetTestimonies, FindTestimony,
	GetTestimonyFactory, AddTestimony, UpdateTestimony
} from '@modules/form'
import { Alert, Notify } from '@app/config/notifications'
import router from '@app/router'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	testimonies: reactive([]) as TestimonyEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderTestimoniesLoading: false
})

const setTestimony = (testimony: TestimonyEntity) => {
	const index = globalState.testimonies.findIndex((p) => p.id === testimony.id)
	if(index !== -1) globalState.testimonies[index] = testimony
	else globalState.testimonies.push(testimony)
	globalState.error = ''
}
const unshiftTestimony = (testimony: TestimonyEntity) => {
	const index = globalState.testimonies.findIndex((p) => p.id === testimony.id)
	if(index !== -1) globalState.testimonies[index] = testimony
	else globalState.testimonies.unshift(testimony)
	globalState.error = ''
}
const fetchTestimonies = async () => {
	const date = globalState.testimonies[globalState.testimonies.length - 1]?.createdAt ?? undefined
	const entities = await GetTestimonies.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setTestimony)
}
const fetchTestimoniesOnInit = async () => {
	globalState.loading = true
	await fetchTestimonies().catch(() => globalState.error = 'Failed to fetch testimonies')
	if(globalState.testimonies.length === 0) globalState.error = 'No testimonies available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderTestimonies = async () => {
	globalState.olderTestimoniesLoading = true
	await fetchTestimonies()
	globalState.olderTestimoniesLoading = true
}

export const useTestimoniesList = () => {
	if(!globalState.fetched) fetchTestimoniesOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderTestimoniesLoading: computed(() => globalState.olderTestimoniesLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		testimonies: computed(() => globalState.testimonies),

		fetchOlderTestimonies
	}
}

export const useDeleteTestimony = (testimony: TestimonyEntity) => {
	const state = reactive({ loading: false })
	const deleteTestimony = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete testimony',
				text: 'Are you sure you want to delete thia testimony? This cannot be undone',
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeleteTestimony.call(testimony.id)
				globalState.testimonies = globalState.testimonies.filter((a) => a.id !== testimony.id)
				state.loading = false
				await Notify({ icon: 'success', title: 'Testimony deleted successfully' })
			}
			return result.value as boolean
		} catch(error) {
			state.loading = false
			await Notify({ icon: 'error', title: error.message })
			return false
		}
	}
	return {
		loading: computed(() => state.loading),
		deleteTestimony
	}
}

const fetchTestimony = async (id: string) => {
	let testimony = globalState.testimonies.find((testimony) => testimony.id === id)
	if(testimony) return testimony
	testimony = await FindTestimony.call(id)
	if(testimony) unshiftTestimony(testimony)
	return testimony
}

export const useSingleTestimony = (id: string) => {
	const state = reactive({
		loading: false,
		testimony: undefined as TestimonyEntity | undefined,
		error: ''
	})
	const findTestimony = async () => {
		state.loading = true
		const testimony = await fetchTestimony(id)
		if(testimony) state.testimony = testimony
		state.loading = false
	}
	findTestimony().catch(() => state.error = 'Failed to fetch testimony')
	return {
		loading: computed(() => state.loading),
		testimony: computed(() => state.testimony),
		error: computed(() => state.error)
	}
}

export const useCreateTestimony = () => {
	const state = reactive({
		loading: false,
		factory: GetTestimonyFactory.call()
	})

	const createTestimony = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				await AddTestimony.call(state.factory)
				state.factory.reset()
				await router.push('/')
				await Notify({ icon: 'success', title: 'Testimony created successfully' })
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: computed(() => state.factory),
		loading: computed(() => state.loading),
		createTestimony,
	}
}

let currentEdit = undefined as TestimonyEntity | undefined

export const setCurrentEditingTestimony = (testimony: TestimonyEntity) => currentEdit = testimony

export const useEditTestimony = () => {
	const state = reactive({
		loading: false,
		factory: GetTestimonyFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editTestimony = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				const newId = await UpdateTestimony.call(currentEdit!.id, state.factory)
				const testimony = await FindTestimony.call(newId)
				if(testimony) unshiftTestimony(testimony)
				state.factory.reset()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editTestimony,
	}
}
