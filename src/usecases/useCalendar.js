import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { ref } from '@vue/composition-api'

const options = {
	plugins: [ dayGridPlugin, interactionPlugin, bootstrapPlugin ],
	initialView: 'dayGridMonth',
	themeSystem: 'bootstrap',
	showNonCurrentDates: false,
	fixedWeekCount: false,
	height: 'auto',
	headerToolbar: { center: 'title', start: 'prev', end: 'next' },
	titleFormat: { year: 'numeric', month: 'short' },
	buttonText: { today: 'Today' },
	eventDisplay: 'list-item'
}

const events = [
	{ title: 'Event 4 for every day', date: new Date('2020-04-08') },
	{ title: 'Event 5 for every day', date: new Date('2020-05-08') },
	{ title: 'Event 6 for every day', date: new Date('2020-06-08') },
	{ title: 'Event 1 for every day', date: new Date('2020-07-08') },
	{ title: 'Event 2', date: new Date('2020-07-09') },
	{ title: 'Event 3', date: new Date('2020-07-09') }
]

export default () => {
	const isLoading = ref(true)
	options.loading = (loading) => isLoading.value = loading
	options.dateClick  = (arg) => {
		alert('date click! ' + arg.dateStr)
	}
	options.events = async (info, success, failure) => {
		try{
			const { start, end } = info
			/* call algorithm that fetches event from server or firebase */
			await new Promise((resolve) => setTimeout(resolve, 3000))
			const eventsFiltered = events.filter((event) => event.date >= start && event.date <= end)
			/* end algorithm  */
			success(eventsFiltered)
		}catch(err){ failure(err) }
	}
	return {
		options,
		isLoading
	}
}
