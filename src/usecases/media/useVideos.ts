import VideoRepository from '@/data/repositories/videos'
import { computed, reactive, ref } from '@vue/composition-api'

export const useVideosList = () => {
	const loading = ref(false)
	const state = reactive({ videos: <VideoI[]> [] })
	const fetchVideos = async () => {
		loading.value = true
		state.videos = await VideoRepository.getVideos()
		loading.value = false
	}
	fetchVideos()

	return { videos: computed(() => state.videos), loading }
}
