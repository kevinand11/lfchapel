<template>
	<div>
		<CreatePicture v-if="isCreateModalPicture" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import CreatePicture from '@app/components/modals/create/CreatePicture.vue'
export default defineComponent({
	components: {
		CreatePicture
	},
	setup(){
		const { isCreateModalPicture } = useCreateModal()
		return {
			isCreateModalPicture
		}
	}
})
</script>
