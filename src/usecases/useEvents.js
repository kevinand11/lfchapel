import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { ref } from '@vue/composition-api'
import EventRepository from '@/data/repositories/events'

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

export const useEventList = () => {
	const isLoading = ref(true)
	options.loading = (loading) => isLoading.value = loading
	options.dateClick  = (arg) => {
		alert('date click! ' + arg.dateStr)
	}
	options.events = async (info, success, failure) => {
		try{
			const { start, end } = info
			const eventsFiltered = await EventRepository.findBetween(start, end)
			success(eventsFiltered)
		}catch(err){ failure(err) }
	}
	return {
		options,
		loading: isLoading
	}
}