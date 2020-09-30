<template>
	<div>
		<EditPicture v-if="isEditModalPicture" />
		<EditAudio v-if="isEditModalAudio" />
		<EditVideo v-if="isEditModalVideo" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import EditPicture from '@app/components/modals/edit/EditPicture.vue'
import EditAudio from '@app/components/modals/edit/EditAudio.vue'
import EditVideo from '@app/components/modals/edit/EditVideo.vue'
export default defineComponent({
	components: {
		EditPicture,
		EditAudio,
		EditVideo
	},
	setup(){
		const { isEditModalPicture, isEditModalAudio, isEditModalVideo } = useEditModal()
		return {
			isEditModalPicture, isEditModalAudio, isEditModalVideo
		}
	}
})
</script>
