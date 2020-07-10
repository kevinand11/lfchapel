import PhotoRepository from '@/data/repositories/photos'
import { computed, reactive, ref } from '@vue/composition-api'

export const usePhotosList = () => {
	const loading = ref(false)
	const state = reactive({ photos: [] })
	const fetchPhotos = async () => {
		loading.value = true
		state.photos = await PhotoRepository.getPhotos()
		loading.value = false
	}
	fetchPhotos()

	return { photos: computed(() => state.photos), fetchPhotos, loading }
}
