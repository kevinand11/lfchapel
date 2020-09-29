<template>
	<div>
		<CreateModal />
		<EditModal />
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CreateModal from '@app/components/modals/create/Index.vue'
import EditModal from '@app/components/modals/edit/Index.vue'
export default defineComponent({
	components: {
		CreateModal,
		EditModal
	}
})
</script>
