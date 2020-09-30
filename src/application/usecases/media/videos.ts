import { computed, reactive } from '@vue/composition-api'
import { VideoEntity } from '@modules/media/domain/entities/video'
import {
	DeleteVideo, GetVideos, FindVideo,
	GetVideoFactory, AddVideo, UpdateVideo
} from '@modules/media'
import { Alert, Notify } from '@app/config/notifications'
import router from '@app/router'
import { useStore } from '@app/usecases/store'
import { useCreateModal, useEditModal } from '@app/usecases/modals'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	videos: reactive([]) as VideoEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderVideosLoading: false
})

const setVideo = (video: VideoEntity) => {
	const index = globalState.videos.findIndex((p) => p.id === video.id)
	if(index !== -1) globalState.videos[index] = video
	else globalState.videos.push(video)
	globalState.error = ''
}
const unshiftVideo = (video: VideoEntity) => {
	const index = globalState.videos.findIndex((p) => p.id === video.id)
	if(index !== -1) globalState.videos[index] = video
	else globalState.videos.unshift(video)
	globalState.error = ''
}
const fetchVideos = async () => {
	const date = globalState.videos[globalState.videos.length - 1]?.createdAt ?? undefined
	const entities = await GetVideos.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setVideo)
}
const fetchVideosOnInit = async () => {
	globalState.loading = true
	await fetchVideos().catch(() => globalState.error = 'Failed to fetch videos')
	if(globalState.videos.length === 0) globalState.error = 'No videos available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderVideos = async () => {
	globalState.olderVideosLoading = true
	await fetchVideos()
	globalState.olderVideosLoading = true
}

export const useVideosList = () => {
	if(!globalState.fetched) fetchVideosOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderVideosLoading: computed(() => globalState.olderVideosLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		videos: computed(() => globalState.videos),

		fetchOlderVideos
	}
}

export const useDeleteVideo = (video: VideoEntity) => {
	const state = reactive({ loading: false })
	const deleteVideo = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete video',
				text: `Are you sure you want to delete ${video.title}? This cannot be undone`,
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeleteVideo.call(video.id)
				globalState.videos = globalState.videos.filter((a) => a.id !== video.id)
				const { id } = router.currentRoute.params
				if(id) await router.replace('/blog')
				state.loading = false
				await Notify({ icon: 'success', title: 'Video deleted successfully' })
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
		deleteVideo
	}
}

const fetchVideo = async (id: string) => {
	let video = globalState.videos.find((video) => video.id === id)
	if(video) return video
	video = await FindVideo.call(id)
	if(video) unshiftVideo(video)
	return video
}

export const useSingleVideo = (id: string) => {
	const state = reactive({
		loading: false,
		video: undefined as VideoEntity | undefined,
		error: ''
	})
	const findVideo = async () => {
		state.loading = true
		const video = await fetchVideo(id)
		if(video){
			state.video = video
		}
		else{
			await router.replace('/blog')
			await Notify({ title: 'No such video found', icon: 'error' })
		}
		state.loading = false
	}
	findVideo().catch(() => state.error = 'Failed to fetch video')
	return {
		loading: computed(() => state.loading),
		video: computed(() => state.video),
		error: computed(() => state.error)
	}
}

export const useCreateVideo = () => {
	const state = reactive({
		loading: false,
		factory: GetVideoFactory.call()
	})

	state.factory.userId = useStore().auth.getId.value

	const createVideo = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const id = await AddVideo.call(state.factory)
				await fetchVideo(id)
				state.factory.reset()
				useCreateModal().closeCreateModal()
				await Notify({ icon: 'success', title: 'Video created successfully' })
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		createVideo,
	}
}

let currentEdit = undefined as VideoEntity | undefined

export const setCurrentEditingVideo = (video: VideoEntity) => currentEdit = video

export const useEditVideo = () => {
	const state = reactive({
		loading: false,
		factory: GetVideoFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editVideo = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const newId = await UpdateVideo.call(currentEdit!.id, state.factory)
				const video = await FindVideo.call(newId)
				if(video) unshiftVideo(video)
				state.factory.reset()
				useEditModal().closeEditModal()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editVideo,
	}
}
