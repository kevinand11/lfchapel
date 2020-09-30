import { computed, ref } from '@vue/composition-api'

const createModal = ref(null as string | null)
const editModal = ref(null as string | null)
const mediaModal = ref(null as string | null)

export const useCreateModal = () => {
	return {
		isCreateModalPicture: computed(() => createModal.value === 'picture'),
		isCreateModalAudio: computed(() => createModal.value === 'audio'),
		isCreateModalVideo: computed(() => createModal.value === 'video'),

		setCreateModalPicture: () => createModal.value = 'picture',
		setCreateModalAudio: () => createModal.value = 'audio',
		setCreateModalVideo: () => createModal.value = 'video',
		closeCreateModal: () => createModal.value = null
	}
}

export const useEditModal = () => {
	return {
		isEditModalPicture: computed(() => editModal.value === 'picture'),
		isEditModalAudio: computed(() => editModal.value === 'audio'),
		isEditModalVideo: computed(() => editModal.value === 'video'),

		setEditModalPicture: () => editModal.value = 'picture',
		setEditModalVideo: () => editModal.value = 'video',
		setEditModalAudio: () => editModal.value = 'audio',
		closeEditModal: () => editModal.value = null
	}
}

export const useMediaModal = () => {
	return {
		isMediaModalGallery: computed(() => mediaModal.value === 'gallery'),

		setMediaModalGallery: () => mediaModal.value = 'gallery',
		closeMediaModal: () => mediaModal.value = null
	}
}
