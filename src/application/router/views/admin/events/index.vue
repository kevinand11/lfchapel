<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<div class="d-flex justify-content-end mb-4">
				<button class="btn btn-lg btn-success" @click="setCreateModalEvent">Add New Event</button>
			</div>
			<hr>
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<EventCard v-for="event in events" :key="event.id" :event="event" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderEvents" :disabled="olderEventsLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderEventsLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEventsList } from '@app/usecases/events/events'
import { useCreateModal } from '@app/usecases/modals'
import EventCard from '@app/components/admin/events/EventCard.vue'
export default defineComponent({
	name: 'Events',
	components: {
		EventCard
	},
	setup(){
		const { loading, olderEventsLoading, hasMore, error, events, fetchOlderEvents } = useEventsList()
		return {
			loading, olderEventsLoading, hasMore, error, events, fetchOlderEvents,
			setCreateModalEvent: useCreateModal().setCreateModalEvent
		}
	},
	meta(){
		return {
			title: 'Events',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
			]
		}
	}
})
</script>


<style lang="scss" scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
