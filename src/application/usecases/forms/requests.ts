import { computed, reactive } from '@vue/composition-api'
import { RequestEntity } from '@modules/forms/domain/entities/request'
import {
	DeleteRequest, GetRequests, FindRequest,
	GetRequestFactory, AddRequest, UpdateRequest
} from '@modules/forms'
import { Alert, Notify } from '@app/config/notifications'
import router from '@app/router'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	requests: reactive([]) as RequestEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderRequestsLoading: false
})

const setRequest = (request: RequestEntity) => {
	const index = globalState.requests.findIndex((p) => p.id === request.id)
	if(index !== -1) globalState.requests.splice(index, 1, request)
	else globalState.requests.push(request)
	globalState.error = ''
}
const unshiftRequest = (request: RequestEntity) => {
	const index = globalState.requests.findIndex((p) => p.id === request.id)
	if(index !== -1) globalState.requests.splice(index, 1, request)
	else globalState.requests.unshift(request)
	globalState.error = ''
}
const fetchRequests = async () => {
	const date = globalState.requests[globalState.requests.length - 1]?.createdAt ?? undefined
	const entities = await GetRequests.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setRequest)
}
const fetchRequestsOnInit = async () => {
	globalState.loading = true
	await fetchRequests().catch(() => globalState.error = 'Failed to fetch requests')
	if(globalState.requests.length === 0) globalState.error = 'No requests available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderRequests = async () => {
	globalState.olderRequestsLoading = true
	await fetchRequests()
	globalState.olderRequestsLoading = true
}

export const useRequestsList = () => {
	if(!globalState.fetched) fetchRequestsOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderRequestsLoading: computed(() => globalState.olderRequestsLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		requests: computed(() => globalState.requests),

		fetchOlderRequests
	}
}

export const useDeleteRequest = (request: RequestEntity) => {
	const state = reactive({ loading: false })
	const deleteRequest = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete request',
				text: 'Are you sure you want to delete this prayer request? This cannot be undone',
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeleteRequest.call(request.id)
				globalState.requests = globalState.requests.filter((a) => a.id !== request.id)
				state.loading = false
				await Notify({ icon: 'success', title: 'Prayer request deleted successfully' })
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
		deleteRequest
	}
}

const fetchRequest = async (id: string) => {
	let request = globalState.requests.find((request) => request.id === id)
	if(request) return request
	request = await FindRequest.call(id)
	if(request) unshiftRequest(request)
	return request
}

export const useSingleRequest = (id: string) => {
	const state = reactive({
		loading: false,
		request: undefined as RequestEntity | undefined,
		error: ''
	})
	const findRequest = async () => {
		state.loading = true
		const request = await fetchRequest(id)
		if(request) state.request = request
		state.loading = false
	}
	findRequest().catch(() => state.error = 'Failed to fetch request')
	return {
		loading: computed(() => state.loading),
		request: computed(() => state.request),
		error: computed(() => state.error)
	}
}

export const useCreateRequest = () => {
	const state = reactive({
		loading: false,
		factory: GetRequestFactory.call()
	})

	const createRequest = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				await AddRequest.call(state.factory)
				state.factory.reset()
				await router.push('/')
				await Notify({ icon: 'success', title: 'Request created successfully' })
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: computed(() => state.factory),
		loading: computed(() => state.loading),
		createRequest,
	}
}

let currentEdit = undefined as RequestEntity | undefined

export const setCurrentEditingRequest = (request: RequestEntity) => currentEdit = request

export const useEditRequest = () => {
	const state = reactive({
		loading: false,
		factory: GetRequestFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editRequest = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				const newId = await UpdateRequest.call(currentEdit!.id, state.factory)
				const request = await FindRequest.call(newId)
				if(request) unshiftRequest(request)
				state.factory.reset()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editRequest,
	}
}
