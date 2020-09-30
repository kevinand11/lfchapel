<template>
	<div>
		<EditPicture v-if="isEditModalPicture" />
		<EditAudio v-if="isEditModalAudio" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import EditPicture from '@app/components/modals/edit/EditPicture.vue'
import EditAudio from '@app/components/modals/edit/EditAudio.vue'
export default defineComponent({
	components: {
		EditPicture,
		EditAudio
	},
	setup(){
		const { isEditModalPicture, isEditModalAudio } = useEditModal()
		return {
			isEditModalPicture, isEditModalAudio
		}
	}
})
</script>
