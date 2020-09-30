import PhotoRepository from '@/data/repositories/photos'
import { computed, reactive, ref } from '@vue/composition-api'
import { PictureEntity } from '@modules/media/domain/entities/picture'

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

export const usePhotoGalleryModal = (pictures: PictureEntity[], current: string) => {
	const length = pictures.length
	let currentIndex = pictures.findIndex((pictures) => pictures.id === current)
	currentIndex = currentIndex < 0 ? 0 : currentIndex
	const index = ref(currentIndex)

	const next = () => index.value < pictures.length - 1 ? index.value++ : index.value = 0
	const previous = () => index.value > 0 ? index.value-- : index.value = length - 1

	return { index, next, previous, length }
}
