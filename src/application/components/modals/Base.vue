<template>
	<div>
		<CreateModal />
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CreateModal from '@/application/components/modals/create/Index.vue'
export default defineComponent({
	components: {
		CreateModal
	}
})
</script>
