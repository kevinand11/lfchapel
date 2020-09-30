<template>
	<div>
		<CreatePicture v-if="isCreateModalPicture" />
		<CreateAudio v-if="isCreateModalAudio" />
		<CreateVideo v-if="isCreateModalVideo" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import CreatePicture from '@app/components/modals/create/CreatePicture.vue'
import CreateAudio from '@app/components/modals/create/CreateAudio.vue'
import CreateVideo from '@app/components/modals/create/CreateVideo.vue'
export default defineComponent({
	components: {
		CreatePicture,
		CreateAudio,
		CreateVideo,
	},
	setup(){
		const { isCreateModalPicture, isCreateModalAudio, isCreateModalVideo } = useCreateModal()
		return {
			isCreateModalPicture, isCreateModalAudio, isCreateModalVideo
		}
	}
})
</script>
