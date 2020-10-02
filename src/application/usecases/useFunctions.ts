import { FunctionsService } from '@modules/core/services/firebase'

export const createContactMessage = async (message: {name: string, email: string, message: string, subject: string}) => {
	return await FunctionsService.call('createContactMessage', { message })
}

export const createFeedback = async (feedback: {name: string, email: string, message: string}) => {
	return await FunctionsService.call('createFeedback', { feedback })
}

export const subscribeToMailingList = async (email: string) => {
	return await FunctionsService.call('subscribeToMailingList', { email })
}



