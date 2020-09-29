<template>
	<div>
		<EditPicture v-if="isEditModalPicture" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import EditPicture from '@app/components/modals/edit/EditPicture.vue'
export default defineComponent({
	components: {
		EditPicture
	},
	setup(){
		const { isEditModalPicture } = useEditModal()
		return {
			isEditModalPicture
		}
	}
})
</script>
