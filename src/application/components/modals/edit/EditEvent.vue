<template>
	<event-form :submit="editEvent" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Edit Event</h4>
				<a @click.prevent="closeEditModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Save Event</template>
	</event-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import { useEditEvent } from '@app/usecases/events/events'
import EventForm from '@app/components/admin/events/EventForm.vue'
export default defineComponent({
	name: 'EditEvent',
	components: {
		'event-form': EventForm
	},
	setup(){
		const { closeEditModal } = useEditModal()
		const { loading, editEvent, factory } = useEditEvent()
		return {
			loading, editEvent, factory,
			closeEditModal
		}
	}
})
</script>
