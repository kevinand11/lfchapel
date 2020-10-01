<template>
	<ModalBase :close="closeEventModal">
		<div slot="header" class="d-flex justify-content-between align-items-center mb-3">
			<i></i>
			<h5 class="mb-0">{{ formatDate(date) }}</h5>
			<a class="cursor-pointer" @click="closeEventModal"><i class="text-danger fas fa-times"></i></a>
		</div>
		<template>
			<Loading v-if="loading" />
			<template v-else>
				<p class="lead" v-if="events.length === 0">No events registered for this day</p>
				<p v-for="event in events" :key="event.id">
					<span class="lead d-block">{{ event.title }}</span>
					<span class="small">{{ formatRange(event.start, event.end) }}</span>
					<span class="d-block">{{ event.description }}</span>
				</p>
			</template>
		</template>
	</ModalBase>
</template>

<script lang="ts">
import { useEventsForDate } from '@app/usecases/events/calendar'
import { defineComponent } from '@vue/composition-api'
import { formatDate, formatRange } from '@app/usecases/events/calendar'
import { useEventModal } from '@app/usecases/modals'
export default defineComponent({
	setup(){
		const { loading, events, date } = useEventsForDate()
		return {
			loading, events, formatDate, formatRange, date,
			closeEventModal: useEventModal().closeEventModal }
	}
})
</script>
