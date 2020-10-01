<template>
	<div class="card rounded-xl shadow-sm">
		<div class="card-body">
			<h5 :to="`/events/${event.id}`" class="card-title">{{ event.title }}</h5>
			<p class="card-text">{{ event.trimmedDescription }}</p>
			<div>
				<a class="card-link text-warning" @click.prevent="openEditModal">Edit</a>
				<a class="card-link text-danger" @click.prevent="deleteEvent">Delete</a>
			</div>
			<Loading v-if="loading" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { EventEntity } from '@modules/events/domain/entities/event'
import { setCurrentEditingEvent, useDeleteEvent } from '@app/usecases/events/events'
import { useEditModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		event: {
			required: true,
			type: EventEntity
		}
	},
	setup(props){
		const { loading, deleteEvent } = useDeleteEvent(props.event)
		return {
			openEditModal: () => {
				setCurrentEditingEvent(props.event)
				useEditModal().setEditModalEvent()
			},
			loading, deleteEvent
		}
	},
})
</script>
