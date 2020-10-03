import { FunctionsService } from '@modules/core/services/firebase'

export const subscribeToMailingList = async (email: string) => {
	return await FunctionsService.call('subscribeToMailingList', { email })
}
