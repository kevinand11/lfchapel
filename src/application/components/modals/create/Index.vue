<template>
	<div>
		<CreatePicture v-if="isCreateModalPicture" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@/application/usecases/modals'
import CreatePicture from '@/application/components/modals/create/CreatePicture.vue'
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
