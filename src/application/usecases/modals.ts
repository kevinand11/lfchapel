import { computed, ref } from '@vue/composition-api'

const createModal = ref(null as string | null)
const editModal = ref(null as string | null)
const mediaModal = ref(null as string | null)

export const useCreateModal = () => {
	return {
		isCreateModalPicture: computed(() => createModal.value === 'picture'),

		setCreateModalPicture: () => createModal.value = 'picture',
		closeCreateModal: () => createModal.value = null
	}
}

export const useEditModal = () => {
	return {
		isEditModalPicture: computed(() => editModal.value === 'picture'),

		setEditModalPicture: () => editModal.value = 'picture',
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
