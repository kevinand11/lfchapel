import { functions } from '@/application/config/firebase'

export const createContactMessage = async (message: {name: string, email: string, message: string, subject: string}) => {
	const callable = functions.httpsCallable('createContactMessage')
	const res = await callable({ message })
	return res.data
}

export const createTestimony = async (testimony: {name: string, email: string, message: string, public: boolean}) => {
	const callable = functions.httpsCallable('createTestimony')
	const res = await callable({ testimony })
	return res.data
}

export const createPrayerRequest = async (request: {name: string, email: string, message: string, public: boolean}) => {
	const callable = functions.httpsCallable('createPrayerRequest')
	const res = await callable({ request })
	return res.data
}

export const createFeedback = async (feedback: {name: string, email: string, message: string}) => {
	const callable = functions.httpsCallable('createFeedback')
	const res = await callable({ feedback })
	return res.data
}

export const subscribeToMailingList = async (email: string) => {
	const callable = functions.httpsCallable('subscribeToMailingList')
	const res = await callable({ email })
	return res.data
}



