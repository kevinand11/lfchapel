import { computed, reactive } from '@vue/composition-api'
import { MessageEntity } from '@modules/forms/domain/entities/message'
import {
	DeleteMessage, GetMessages, FindMessage,
	GetMessageFactory, AddMessage, UpdateMessage
} from '@modules/forms'
import { Alert, Notify } from '@app/config/notifications'
import router from '@app/router'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	messages: reactive([]) as MessageEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderMessagesLoading: false
})

const setMessage = (message: MessageEntity) => {
	const index = globalState.messages.findIndex((p) => p.id === message.id)
	if(index !== -1) globalState.messages.splice(index, 1, message)
	else globalState.messages.push(message)
	globalState.error = ''
}
const unshiftMessage = (message: MessageEntity) => {
	const index = globalState.messages.findIndex((p) => p.id === message.id)
	if(index !== -1) globalState.messages.splice(index, 1, message)
	else globalState.messages.unshift(message)
	globalState.error = ''
}
const fetchMessages = async () => {
	const date = globalState.messages[globalState.messages.length - 1]?.createdAt ?? undefined
	const entities = await GetMessages.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setMessage)
}
const fetchMessagesOnInit = async () => {
	globalState.loading = true
	await fetchMessages().catch(() => globalState.error = 'Failed to fetch messages')
	if(globalState.messages.length === 0) globalState.error = 'No messages available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderMessages = async () => {
	globalState.olderMessagesLoading = true
	await fetchMessages()
	globalState.olderMessagesLoading = true
}

export const useMessagesList = () => {
	if(!globalState.fetched) fetchMessagesOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderMessagesLoading: computed(() => globalState.olderMessagesLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		messages: computed(() => globalState.messages),

		fetchOlderMessages
	}
}

export const useDeleteMessage = (message: MessageEntity) => {
	const state = reactive({ loading: false })
	const deleteMessage = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete message',
				text: 'Are you sure you want to delete this message? This cannot be undone',
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeleteMessage.call(message.id)
				globalState.messages = globalState.messages.filter((a) => a.id !== message.id)
				state.loading = false
				await Notify({ icon: 'success', title: 'Message deleted successfully' })
			}
			return result.value as boolean
		} catch(error) {
			state.loading = false
			await Notify({ icon: 'error', title: error.message })
			return false
		}
	}
	return {
		loading: computed(() => state.loading),
		deleteMessage
	}
}

const fetchMessage = async (id: string) => {
	let message = globalState.messages.find((message) => message.id === id)
	if(message) return message
	message = await FindMessage.call(id)
	if(message) unshiftMessage(message)
	return message
}

export const useSingleMessage = (id: string) => {
	const state = reactive({
		loading: false,
		message: undefined as MessageEntity | undefined,
		error: ''
	})
	const findMessage = async () => {
		state.loading = true
		const message = await fetchMessage(id)
		if(message) state.message = message
		state.loading = false
	}
	findMessage().catch(() => state.error = 'Failed to fetch message')
	return {
		loading: computed(() => state.loading),
		message: computed(() => state.message),
		error: computed(() => state.error)
	}
}

export const useCreateMessage = () => {
	const state = reactive({
		loading: false,
		factory: GetMessageFactory.call()
	})

	const createMessage = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				await AddMessage.call(state.factory)
				state.factory.reset()
				await router.push('/')
				await Notify({ icon: 'success', title: 'Message sent successfully' })
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: computed(() => state.factory),
		loading: computed(() => state.loading),
		createMessage,
	}
}

let currentEdit = undefined as MessageEntity | undefined

export const setCurrentEditingMessage = (message: MessageEntity) => currentEdit = message

export const useEditMessage = () => {
	const state = reactive({
		loading: false,
		factory: GetMessageFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editMessage = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				const newId = await UpdateMessage.call(currentEdit!.id, state.factory)
				const message = await FindMessage.call(newId)
				if(message) unshiftMessage(message)
				state.factory.reset()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editMessage,
	}
}
