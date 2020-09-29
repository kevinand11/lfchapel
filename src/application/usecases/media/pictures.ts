import { computed, reactive } from '@vue/composition-api'
import { PictureEntity } from '@modules/media/domain/entities/picture'
import {
	DeletePicture, GetPictures, FindPicture,
	GetPictureFactory, AddPicture, UpdatePicture
} from '@modules/media'
import { Alert, Notify } from '@app/config/notifications'
import router from '@app/router'
import { useStore } from '@app/usecases/store'
import { useCreateModal } from '@app/usecases/modals'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	pictures: reactive([]) as PictureEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderPicturesLoading: false
})

const setPicture = (picture: PictureEntity) => {
	const index = globalState.pictures.findIndex((p) => p.id === picture.id)
	if(index !== -1) globalState.pictures[index] = picture
	else globalState.pictures.push(picture)
}
const unshiftPicture = (picture: PictureEntity) => {
	const index = globalState.pictures.findIndex((p) => p.id === picture.id)
	if(index !== -1) globalState.pictures[index] = picture
	else globalState.pictures.unshift(picture)
}
const fetchPictures = async () => {
	const date = globalState.pictures[globalState.pictures.length - 1]?.createdAt ?? undefined
	const entities = await GetPictures.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setPicture)
}
const fetchPicturesOnInit = async () => {
	globalState.loading = true
	await fetchPictures().catch(() => globalState.error = 'Failed to fetch pictures')
	if(globalState.pictures.length === 0) globalState.error = 'No pictures available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderPictures = async () => {
	globalState.olderPicturesLoading = true
	await fetchPictures()
	globalState.olderPicturesLoading = true
}

export const usePicturesList = () => {
	if(!globalState.fetched) fetchPicturesOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderPicturesLoading: computed(() => globalState.olderPicturesLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		pictures: computed(() => globalState.pictures),

		fetchOlderPictures
	}
}

export const useDeletePicture = (picture: PictureEntity) => {
	const state = reactive({ loading: false })
	const deletePicture = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete picture',
				text: `Are you sure you want to delete ${picture.title}? This cannot be undone`,
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeletePicture.call(picture.id)
				globalState.pictures = globalState.pictures.filter((a) => a.id !== picture.id)
				const { id } = router.currentRoute.params
				if(id) await router.replace('/blog')
				state.loading = false
				await Notify({ icon: 'success', title: 'Picture deleted successfully' })
			}
			return result.value
		} catch(error) {
			await Notify({ icon: 'error', title: error.message })
			return false
		}
	}
	return {
		loading: computed(() => state.loading),
		deletePicture
	}
}

const fetchPicture = async (id: string) => {
	let picture = globalState.pictures.find((picture) => picture.id === id)
	if(picture) return picture
	picture = await FindPicture.call(id)
	if(picture) unshiftPicture(picture)
	return picture
}

export const useSinglePicture = (id: string) => {
	const state = reactive({
		loading: false,
		picture: undefined as PictureEntity | undefined,
		error: ''
	})
	const findPicture = async () => {
		state.loading = true
		const picture = await fetchPicture(id)
		if(picture){
			state.picture = picture
		}
		else{
			await router.replace('/blog')
			await Notify({ title: 'No such picture found', icon: 'error' })
		}
		state.loading = false
	}
	findPicture().catch(() => state.error = 'Failed to fetch picture')
	return {
		loading: computed(() => state.loading),
		picture: computed(() => state.picture),
		error: computed(() => state.error)
	}
}

export const useCreatePicture = () => {
	const state = reactive({
		loading: false,
		factory: GetPictureFactory.call()
	})

	state.factory.userId = useStore().auth.getId.value

	const createPicture = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const id = await AddPicture.call(state.factory)
				await fetchPicture(id)
				state.factory.reset()
				await useCreateModal().closeCreateModal()
				await Notify({ icon: 'success', title: 'Picture created successfully' })
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		createPicture,
	}
}

let currentEdit = undefined as PictureEntity | undefined

export const setCurrentEditingPicture = (picture: PictureEntity) => currentEdit = picture

export const useEditPicture = () => {
	const state = reactive({
		loading: false,
		factory: GetPictureFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editPicture = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const newId = await UpdatePicture.call(currentEdit!.id, state.factory)
				const picture = await FindPicture.call(newId)
				if(picture) unshiftPicture(picture)
				state.factory.reset()
				if(router.currentRoute.params.id) await router.replace('/blog')
				await router.replace(`/blog/${newId}`)
				//await useStore().modals.closeEditModal()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editPicture,
	}
}
