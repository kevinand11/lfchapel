import { FunctionsService, FirestoreService } from '@/modules/core/services/firebase'
import { UserBaseDataSource } from './user-base'
import { UserFromModel } from '../models/user'

export class UserFirebaseDataSource implements UserBaseDataSource{

	public async find(id: string): Promise<UserFromModel | undefined> {
		return await FirestoreService.find('users', id) as UserFromModel | undefined
	}

	public async subscribeToMailingList(data: { email: string }): Promise<void> {
		return await FunctionsService.call('subscribeToMailingList', data)
	}

	public async makeAdmin(data: { id: string }) {
		return await FunctionsService.call('makeAdmin', data)
	}

	public async removeAdmin(data: { id: string }) {
		return await FunctionsService.call('removeAdmin', data)
	}

}
