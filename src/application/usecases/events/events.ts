import { computed, reactive } from '@vue/composition-api'
import { EventEntity } from '@modules/events/domain/entities/event'
import {
	DeleteEvent, GetEvents, FindEvent,
	GetEventFactory, AddEvent, UpdateEvent
} from '@modules/events'
import { Alert, Notify } from '@app/config/notifications'
import { useStore } from '@app/usecases/store'
import { useCreateModal, useEditModal } from '@app/usecases/modals'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	events: reactive([]) as EventEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderEventsLoading: false
})

const setEvent = (event: EventEntity) => {
	const index = globalState.events.findIndex((p) => p.id === event.id)
	if(index !== -1) globalState.events.splice(index, 1, event)
	else globalState.events.push(event)
	globalState.error = ''
}
const unshiftEvent = (event: EventEntity) => {
	const index = globalState.events.findIndex((p) => p.id === event.id)
	if(index !== -1) globalState.events.splice(index, 1, event)
	else globalState.events.unshift(event)
	globalState.error = ''
}
const fetchEvents = async () => {
	const date = globalState.events[globalState.events.length - 1]?.createdAt ?? undefined
	const entities = await GetEvents.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setEvent)
}
const fetchEventsOnInit = async () => {
	globalState.loading = true
	await fetchEvents().catch(() => globalState.error = 'Failed to fetch events')
	if(globalState.events.length === 0) globalState.error = 'No events available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderEvents = async () => {
	globalState.olderEventsLoading = true
	await fetchEvents()
	globalState.olderEventsLoading = true
}

export const useEventsList = () => {
	if(!globalState.fetched) fetchEventsOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderEventsLoading: computed(() => globalState.olderEventsLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		events: computed(() => globalState.events),

		fetchOlderEvents
	}
}

export const useDeleteEvent = (event: EventEntity) => {
	const state = reactive({ loading: false })
	const deleteEvent = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete event',
				text: `Are you sure you want to delete ${event.title}? This cannot be undone`,
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeleteEvent.call(event.id)
				globalState.events = globalState.events.filter((a) => a.id !== event.id)
				state.loading = false
				await Notify({ icon: 'success', title: 'Event deleted successfully' })
			}
			return result.value
		} catch(error) {
			await Notify({ icon: 'error', title: error.message })
			return false
		}
	}
	return {
		loading: computed(() => state.loading),
		deleteEvent
	}
}

const fetchEvent = async (id: string) => {
	let event = globalState.events.find((event) => event.id === id)
	if(event) return event
	event = await FindEvent.call(id)
	if(event) unshiftEvent(event)
	return event
}

export const useSingleEvent = (id: string) => {
	const state = reactive({
		loading: false,
		event: undefined as EventEntity | undefined,
		error: ''
	})
	const findEvent = async () => {
		state.loading = true
		const event = await fetchEvent(id)
		if(event) state.event = event
		state.loading = false
	}
	findEvent().catch(() => state.error = 'Failed to fetch event')
	return {
		loading: computed(() => state.loading),
		event: computed(() => state.event),
		error: computed(() => state.error)
	}
}

export const useCreateEvent = () => {
	const state = reactive({
		loading: false,
		factory: GetEventFactory.call()
	})

	state.factory.userId = useStore().auth.getId.value

	const createEvent = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const id = await AddEvent.call(state.factory)
				await fetchEvent(id)
				state.factory.reset()
				useCreateModal().closeCreateModal()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		createEvent,
	}
}

let currentEdit = undefined as EventEntity | undefined

export const setCurrentEditingEvent = (event: EventEntity) => currentEdit = event

export const useEditEvent = () => {
	const state = reactive({
		loading: false,
		factory: GetEventFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editEvent = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const newId = await UpdateEvent.call(currentEdit!.id, state.factory)
				const event = await FindEvent.call(newId)
				if(event) unshiftEvent(event)
				state.factory.reset()
				useEditModal().closeEditModal()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editEvent,
	}
}
