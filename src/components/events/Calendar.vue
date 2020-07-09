<template>
	<FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
export default {
	components: {
		FullCalendar
	},
	data(){
		return {
			calendarOptions: {
				plugins: [dayGridPlugin,interactionPlugin,bootstrapPlugin],
				initialView: 'dayGridMonth',
				dateClick: this.handleDateClick,
				events: this.fetchEvents,
				themeSystem: 'bootstrap',
				showNonCurrentDates: false,
				fixedWeekCount: false,
				height: 'auto',
				headerToolbar: {
					end: 'prev today next',
					center: '',
					start: 'title'
				},
				titleFormat: { year: 'numeric', month: 'short' },
				buttonText: {
					today: 'Today'
				},
				eventDisplay: 'list-item'
			},
		}
	},
	methods: {
		handleDateClick: function(arg) {
			alert('date click! ' + arg.dateStr)
		},
		async fetchEvents(info, success, failure){
			console.log('Fetching')
			try{
				// const { start, end } = info
				/* call algorithm that fetches event from server or firebase */
				const events = [
					{ title: 'Event 1 for every day', date: '2020-07-08' },
					{ title: 'Event 2', date: '2020-07-09' },
					{ title: 'Event 3', date: '2020-07-09' }
				]
				await setTimeout(()=>{console.log('Done fetching')},10000)
				return success(events)
			}catch(err){
				failure(err)
			}
		}
	}
}
</script>
