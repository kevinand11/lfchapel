<template>
	<div>
		<CreatePicture v-if="isCreateModalPicture" />
		<CreateAudio v-if="isCreateModalAudio" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import CreatePicture from '@app/components/modals/create/CreatePicture.vue'
import CreateAudio from '@app/components/modals/create/CreateAudio.vue'
export default defineComponent({
	components: {
		CreatePicture,
		CreateAudio
	},
	setup(){
		const { isCreateModalPicture, isCreateModalAudio } = useCreateModal()
		return {
			isCreateModalPicture, isCreateModalAudio
		}
	}
})
</script>
