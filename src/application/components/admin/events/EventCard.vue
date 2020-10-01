<template>
	<div class="card rounded-xl shadow-sm">
		<div class="card-body">
			<h4 :to="`/events/${event.id}`" class="card-title mb-1">{{ event.title }}</h4>
			<span class="card-subtitle small text-muted">{{ formatRange(event.start, event.end) }}</span>
			<p class="card-text mt-3">{{ event.trimmedDescription }}</p>
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
import { formatRange } from '@app/usecases/events/useEvents'
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
			loading, deleteEvent, formatRange
		}
	},
})
</script>
