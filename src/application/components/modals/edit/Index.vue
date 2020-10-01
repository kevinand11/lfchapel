<template>
	<div>
		<EditPicture v-if="isEditModalPicture" />
		<EditAudio v-if="isEditModalAudio" />
		<EditVideo v-if="isEditModalVideo" />
		<EditArticle v-if="isEditModalArticle" />
		<EditEvent v-if="isEditModalEvent" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import EditPicture from '@app/components/modals/edit/EditPicture.vue'
import EditAudio from '@app/components/modals/edit/EditAudio.vue'
import EditVideo from '@app/components/modals/edit/EditVideo.vue'
import EditArticle from '@app/components/modals/edit/EditArticle.vue'
import EditEvent from '@app/components/modals/edit/EditEvent.vue'
export default defineComponent({
	components: {
		EditPicture,
		EditAudio,
		EditVideo,
		EditArticle,
		EditEvent
	},
	setup(){
		const {
			isEditModalPicture, isEditModalAudio, isEditModalVideo, isEditModalArticle,
			isEditModalEvent
		} = useEditModal()
		return {
			isEditModalPicture, isEditModalAudio, isEditModalVideo, isEditModalArticle,
			isEditModalEvent
		}
	}
})
</script>
