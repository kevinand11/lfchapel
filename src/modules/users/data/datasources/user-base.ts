import { UserFromModel } from '../models/user'
import { GetClauses } from '@modules/core/data/datasources/base'

export abstract class UserBaseDataSource {
	public abstract find: (id: string) => Promise<UserFromModel | undefined>
	public abstract get: (condition?: GetClauses) => Promise<UserFromModel[]>
	public abstract subscribeToMailingList: (data: { email: string }) => Promise<void>
	public abstract makeAdmin: (data: { id: string }) => Promise<void>
	public abstract removeAdmin: (data: { id: string }) => Promise<void>
}
