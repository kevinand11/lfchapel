import { computed, ref } from '@vue/composition-api'

const createModal = ref(null as string | null)
const editModal = ref(null as string | null)
const mediaModal = ref(null as string | null)

export const useCreateModal = () => {
	return {
		isCreateModalPicture: computed(() => createModal.value === 'picture'),
		isCreateModalAudio: computed(() => createModal.value === 'audio'),
		isCreateModalVideo: computed(() => createModal.value === 'video'),
		isCreateModalArticle: computed(() => createModal.value === 'article'),

		setCreateModalPicture: () => createModal.value = 'picture',
		setCreateModalAudio: () => createModal.value = 'audio',
		setCreateModalVideo: () => createModal.value = 'video',
		setCreateModalArticle: () => createModal.value = 'article',
		closeCreateModal: () => createModal.value = null
	}
}

export const useEditModal = () => {
	return {
		isEditModalPicture: computed(() => editModal.value === 'picture'),
		isEditModalAudio: computed(() => editModal.value === 'audio'),
		isEditModalVideo: computed(() => editModal.value === 'video'),
		isEditModalArticle: computed(() => editModal.value === 'article'),

		setEditModalPicture: () => editModal.value = 'picture',
		setEditModalVideo: () => editModal.value = 'video',
		setEditModalAudio: () => editModal.value = 'audio',
		setEditModalArticle: () => editModal.value = 'article',
		closeEditModal: () => editModal.value = null
	}
}

export const useMediaModal = () => {
	return {
		isMediaModalGallery: computed(() => mediaModal.value === 'gallery'),
		isMediaModalVideo: computed(() => mediaModal.value === 'video'),

		setMediaModalGallery: () => mediaModal.value = 'gallery',
		setMediaModalVideo: () => mediaModal.value = 'video',
		closeMediaModal: () => mediaModal.value = null
	}
}
