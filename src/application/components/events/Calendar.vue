<template>
	<div>
		<FullCalendar :options="options" />
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import FullCalendar from '@fullcalendar/vue'
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { useModal } from '@app/usecases/useModal'
import { useEventsBetween } from '@app/usecases/events/calendar'

const options: CalendarOptions = {
	plugins: [ dayGridPlugin, interactionPlugin, bootstrapPlugin ],
	initialView: 'dayGridMonth', themeSystem: 'bootstrap', eventDisplay: 'block',
	showNonCurrentDates: false, fixedWeekCount: false, height: 'auto',
	headerToolbar: { center: 'title', start: 'prev', end: 'next' },
	titleFormat: { year: 'numeric', month: 'short' }
}
export default defineComponent({
	components: {
		FullCalendar
	},
	setup(){
		const { showDailyEventModal } = useModal()
		const loading = ref(true)

		options.loading = (isLoading) => loading.value = isLoading
		options.dateClick  = ({ date }) => showDailyEventModal({ date })
		options.eventClick = ({ event }) => showDailyEventModal({ date: event.start })

		// @ts-ignore
		options.events = async (info, success, failure) => {
			const { start, end } = info
			try{
				const events = await useEventsBetween(start, end)
				success(events)
			}catch(err){ failure(err) }
		}
		return { options, loading }
	}
})
</script>

<style scoped lang="scss">
	td.fc-daygrid-day{ cursor: pointer !important; }
	button.btn-primary{ color: $white !important; }
	button.btn-primary{ color: $white !important; }
</style>
