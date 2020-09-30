<template>
	<div>
		<CreatePicture v-if="isCreateModalPicture" />
		<CreateAudio v-if="isCreateModalAudio" />
		<CreateVideo v-if="isCreateModalVideo" />
		<CreateArticle v-if="isCreateModalArticle" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import CreatePicture from '@app/components/modals/create/CreatePicture.vue'
import CreateAudio from '@app/components/modals/create/CreateAudio.vue'
import CreateVideo from '@app/components/modals/create/CreateVideo.vue'
import CreateArticle from '@app/components/modals/create/CreateArticle.vue'
export default defineComponent({
	components: {
		CreatePicture,
		CreateAudio,
		CreateVideo,
		CreateArticle,
	},
	setup(){
		const { isCreateModalPicture, isCreateModalAudio, isCreateModalVideo, isCreateModalArticle } = useCreateModal()
		return {
			isCreateModalPicture, isCreateModalAudio, isCreateModalVideo, isCreateModalArticle
		}
	}
})
</script>
