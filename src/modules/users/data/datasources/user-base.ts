import { UserFromModel } from '../models/user'

export abstract class UserBaseDataSource {
	public abstract find: (id: string) => Promise<UserFromModel | undefined>
	public abstract subscribeToMailingList: (data: { email: string }) => Promise<void>
	public abstract makeAdmin: (data: { id: string }) => Promise<void>
	public abstract removeAdmin: (data: { id: string }) => Promise<void>
}
