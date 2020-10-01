<template>
	<div>
		<CreateModal />
		<EditModal />
		<MediaModal />
		<EventModal />
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import CreateModal from '@app/components/modals/create/Index.vue'
import EditModal from '@app/components/modals/edit/Index.vue'
import MediaModal from '@app/components/modals/media/Index.vue'
import EventModal from '@app/components/modals/events/Index.vue'
export default defineComponent({
	components: {
		CreateModal,
		EditModal,
		MediaModal,
		EventModal,
	}
})
</script>
