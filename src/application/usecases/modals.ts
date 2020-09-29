import { computed, ref } from '@vue/composition-api'

const createModal = ref('picture' as string | null)

export const useCreateModal = () => {
	return {
		isCreateModalPicture: computed(() => createModal.value === 'picture'),

		setCreateModalPicture: () => createModal.value = 'picture',
		closeCreateModal: () => createModal.value = null
	}
}
