import { EventEntity } from '@modules/events/domain/entities/event'
import { GetEventsBetween } from '@modules/events'
import { computed, reactive } from '@vue/composition-api'
import { formatDate as dateFormat, formatRange as rangeFormat } from '@fullcalendar/core'

const globalEvents= reactive([]) as EventEntity[]

export const useEventsBetween = async (start: Date, end: Date) => {
	if(globalEvents.length === 0){
		const events = await GetEventsBetween.call(start, end)
		globalEvents.push(...events)
	}
	return globalEvents
}

export const useEventsForDate = (date: Date) => {
	const state = reactive({ loading: false, events: [] as EventEntity[] })
	const fetchEvents = async () => {
		state.loading = true
		state.events = globalEvents.filter((event) => event.isWithinDate(date))
		state.loading = false
	}
	fetchEvents()
	return {
		loading: computed(() => state.loading),
		events: computed(() => state.events)
	}
}

const formatD = { day: '2-digit', month: 'short', year: 'numeric', separator: ' to ' }
const formatT = { minute: '2-digit', hour: '2-digit', day: '2-digit', month: 'short', year: 'numeric', separator: ' to ' }

const formatDate = (date: Date) => dateFormat(date, formatD)
const formatDateTime = (date: Date) => dateFormat(date, formatT)
const formatRange = (start: Date, end: Date) => rangeFormat(start, end, formatT)

export { formatDate, formatRange, formatDateTime }
