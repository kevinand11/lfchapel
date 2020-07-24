import Photo from '@/data/entities/photos'
import PhotoRepository from '@/data/repositories/photos'
import { computed, reactive, ref } from '@vue/composition-api'

export const usePhotosList = () => {
	const loading = ref(false)
	const state = reactive({ photos: <PhotoI[]> [] } )
	const fetchPhotos = async () => {
		state.photos = await PhotoRepository.getPhotos()
		loading.value = false
	}
	fetchPhotos()

	return { photos: computed(() => state.photos), loading }
}

export const usePhotoGalleryModal = (photos: Photo[], current: Id) => {
	const length = photos.length
	let currentIndex = photos.findIndex((photo) => photo.id.toString() === current.toString())
	currentIndex = currentIndex < 0 ? 0 : currentIndex
	const index = ref(currentIndex)

	const next = () => index.value < photos.length - 1 ? index.value++ : index.value = 0
	const previous = () => index.value > 0 ? index.value-- : index.value = length - 1

	return { index, next, previous, length }
}
