import { computed, ref } from '@vue/composition-api'

const createModal = ref(null as string | null)
const editModal = ref('picture' as string | null)

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
