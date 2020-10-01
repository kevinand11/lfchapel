<template>
	<div class="">
		<event-form :submit="createEvent" :loading="loading" :factory="factory">
			<template slot="title">
				<div class="d-flex align-items-baseline justify-content-between my-3">
					<i></i>
					<h4>Create Event</h4>
					<a @click.prevent="closeCreateModal"><i class="fas fa-times text-danger"></i></a>
				</div>
			</template>
			<template slot="buttonText">Create Event</template>
		</event-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import { useCreateEvent } from '@app/usecases/events/events'
import EventForm from '@app/components/admin/events/EventForm.vue'
export default defineComponent({
	name: 'CreateEvent',
	components: {
		'event-form': EventForm
	},
	setup(){
		const { closeCreateModal } = useCreateModal()
		const { loading, createEvent, factory } = useCreateEvent()
		return {
			loading, createEvent, factory,
			closeCreateModal
		}
	}
})
</script>
