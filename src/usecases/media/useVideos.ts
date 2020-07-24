import VideoRepository from '@/data/repositories/videos'
import { computed, reactive, ref } from '@vue/composition-api'
import Video from '@/data/entities/videos'

export const useVideosList = () => {
	const loading = ref(false)
	const state = reactive({ videos: <Video[]> [] })
	const fetchVideos = async () => {
		loading.value = true
		state.videos = await VideoRepository.getVideos()
		loading.value = false
	}
	fetchVideos()

	return { videos: computed(() => state.videos), loading }
}
