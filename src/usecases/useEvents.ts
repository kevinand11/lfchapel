import { formatDate, formatRange } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { reactive, ref, computed } from '@vue/composition-api'
import Event from '@/data/entities/events'
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
	eventDisplay: 'block',
	loading: <((loading: boolean) => any) | undefined> undefined,
	dateClick: <((info: { date:Date }) => any) | undefined> undefined,
	eventClick: <((info: { event: any }) => any) | undefined> undefined,
	events: <((info:object, success:Function, failure:Function) => Promise<void>) | undefined> undefined
}

const dateFormat = (date: Date) => formatDate(date, formatD)
const dateTimeFormat = (date: Date) => formatDate(date, formatT)
const rangeFormat = (start: Date, end: Date) => formatRange(start, end, formatT)

export const useEventList = (modal) => {
	const { showDailyEventModal } = useModal(modal)
	const loading = ref(true)
	options.loading = (isLoading) => loading.value = isLoading
	options.dateClick  = ({ date }) => showDailyEventModal({ date })
	options.eventClick = ({ event }) => showDailyEventModal({ date: event.start })

	options.events = async (info: object, success: Function, failure: Function) => {
		try{
			const { start, end } = info
			const eventsFiltered = await EventRepository.findEventsBetween(start, end)
			success(eventsFiltered)
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
