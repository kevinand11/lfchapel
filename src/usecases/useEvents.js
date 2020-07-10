import { formatDate, formatRange } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { reactive, ref, computed } from '@vue/composition-api'
import EventRepository from '@/data/repositories/events'
import { useModal } from '@/usecases/useModal'

const formatD = { day: '2-digit', month: 'short', year: 'numeric', separator: ' to ' }
const formatT = { minute: '2-digit', hour: '2-digit', day: '2-digit', month: 'short', year: 'numeric', separator: ' to ' }

const options = {
	plugins: [ dayGridPlugin, interactionPlugin, bootstrapPlugin ],
	initialView: 'dayGridMonth',
	themeSystem: 'bootstrap',
	showNonCurrentDates: false,
	fixedWeekCount: false,
	height: 'auto',
	headerToolbar: { center: 'title', start: 'prev', end: 'next' },
	titleFormat: { year: 'numeric', month: 'short' },
	eventDisplay: 'block'
}

const dateFormat = (date) => formatDate(date, formatD)
const dateTimeFormat = (date) => formatDate(date, formatT)
const rangeFormat = (start, end) => formatRange(start, end, formatT)

export const useEventList = (modal) => {
	const { showDailyEventModal } = useModal(modal)
	const loading = ref(true)
	options.loading = (isLoading) => loading.value = isLoading
	options.dateClick  = ({ date }) => showDailyEventModal({ date })
	options.eventClick = ({ event }) => showDailyEventModal({ date: event.start })

	options.events = async (info, success, failure) => {
		try{
			const { start, end } = info
			const eventsFiltered = await EventRepository.findEventsBetween(start, end)
			success(eventsFiltered)
		}catch(err){ failure(err) }
	}
	return { options, loading }
}

export const useEventsForDate = (date) => {
	const loading = ref(true)
	const state = reactive({ events: []})
	const fetchEvents = async () => {
		loading.value = true
		state.events = await EventRepository.findEventsByDate(date)
		loading.value = false
	}
	return {
		loading, fetchEvents, formatDate: dateFormat, formatRange: rangeFormat, formatDateTime: dateTimeFormat,
		events: computed(() => state.events)
	}
}
