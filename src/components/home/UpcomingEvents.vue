<template>
	<div class="container py-5" v-if="events.length > 0">
		<div class="section-header">
			<h2>Upcoming Events</h2>
		</div>
		<div class="grid">
			<EventCard :event="event" v-for="event in events" :key="event.id" />
		</div>
		<div class="d-flex justify-content-center mt-3">
			<router-link class="btn btn-primary" to="/events">More Events</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.grid{
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 0.5rem;
		grid-row-gap: 1rem;
	}
	@media (min-width: $md) {
		.grid{
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: $lg) {
		.grid{
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useRecentEvents } from '@/usecases/events/useEvents'
import EventCard from '@/components/events/EventCard.vue'
export default defineComponent({
	components: {
	    EventCard
	},
	setup(){
		const { loading, events } = useRecentEvents()
		return {
		    loading, events
		}
	}
})
</script>
