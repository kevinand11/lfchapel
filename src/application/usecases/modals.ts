import { computed, ref } from '@vue/composition-api'

const createModal = ref(null as string | null)
const editModal = ref(null as string | null)
const mediaModal = ref(null as string | null)

export const useCreateModal = () => {
	return {
		isCreateModalPicture: computed(() => createModal.value === 'picture'),
		isCreateModalAudio: computed(() => createModal.value === 'audio'),

		setCreateModalPicture: () => createModal.value = 'picture',
		setCreateModalAudio: () => createModal.value = 'audio',
		closeCreateModal: () => createModal.value = null
	}
}

export const useEditModal = () => {
	return {
		isEditModalPicture: computed(() => editModal.value === 'picture'),
		isEditModalAudio: computed(() => editModal.value === 'audio'),

		setEditModalPicture: () => editModal.value = 'picture',
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
