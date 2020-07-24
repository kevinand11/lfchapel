import { formatDate, formatRange, CalendarOptions, EventInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { reactive, ref, computed } from '@vue/composition-api'
import EventRepository from '@/data/repositories/events'
import { useModal } from '@/usecases/useModal'
import { VModal } from '@/@types/config'

const formatD = { day: '2-digit', month: 'short', year: 'numeric', separator: ' to ' }
const formatT = { minute: '2-digit', hour: '2-digit', day: '2-digit', month: 'short', year: 'numeric', separator: ' to ' }

const options: CalendarOptions = {
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

const dateFormat = (date: Date) => formatDate(date, formatD)
const dateTimeFormat = (date: Date) => formatDate(date, formatT)
const rangeFormat = (start: Date, end: Date) => formatRange(start, end, formatT)

export const useEventList = (modal: VModal) => {
	const { showDailyEventModal } = useModal(modal)
	const loading = ref(true)
	options.loading = (isLoading) => loading.value = isLoading
	options.dateClick  = ({ date }) => showDailyEventModal({ date })
	options.eventClick = ({ event }) => showDailyEventModal({ date: event.start })

	options.events = (info, success, failure) => {
		try{
			const { start, end } = info
			EventRepository.findEventsBetween(start, end).then(events => success(events as EventInput[]))
		}catch(err){ failure(err) }
	}
	return { options, loading }
}

export const useEventsForDate = (date: Date) => {
	const loading = ref(true)
	const state = reactive({ events: <EventI[]> [] })
	const fetchEvents = async () => {
		loading.value = true
		state.events = await EventRepository.findEventsByDate(date)
		loading.value = false
	}
	fetchEvents()
	return {
		loading, formatDate: dateFormat, formatRange: rangeFormat, formatDateTime: dateTimeFormat,
		events: computed(() => state.events)
	}
}
