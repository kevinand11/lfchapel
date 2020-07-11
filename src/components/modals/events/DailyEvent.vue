<template>
	<div class="p-3">
		<h5 class="text-center">{{ formatDate(date) }}</h5>
		<Loading v-if="loading" />
		<div v-else>
			<p class="lead" v-if="events.length === 0">No events registered for this day</p>
			<p v-for="event in events" :key="event.id">
				<span class="lead d-block">{{ event.title }}</span>
				<span class="d-block">{{ event.description }}</span>
				<span class="small">{{ formatRange(event.start, event.end) }}</span>
			</p>
		</div>
	</div>
</template>

<script>
import { useEventsForDate } from '@/usecases/useEvents'
export default {
	props: {
		date: {
			type: Date,
			required: true
		}
	},
	setup(props){
		const { loading, events, formatDate, formatRange } = useEventsForDate(props.date)
		return { loading, events, formatDate, formatRange }
	}
}
</script>
