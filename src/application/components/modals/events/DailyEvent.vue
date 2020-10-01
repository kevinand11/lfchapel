<template>
	<div class="p-3">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<i></i>
			<h5 class="mb-0">{{ formatDate(date) }}</h5>
			<a class="cursor-pointer" @click="closeModal"><i class="text-danger fas fa-times"></i></a>
		</div>
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

<script lang="ts">
import { useEventsForDate } from '@app/usecases/events/calendar'
import { defineComponent } from '@vue/composition-api'
import { formatDate, formatRange } from '@app/usecases/events/useEvents'
export default defineComponent({
	props: {
		date: {
			type: Date,
			required: true
		}
	},
	setup(props, { root }){
		const { loading, events } = useEventsForDate(props.date)
		return { loading, events, formatDate, formatRange, closeModal: root.$modal.hideAll }
	}
})
</script>
