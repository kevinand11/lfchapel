import { UserEntity } from '../../domain/entities/user'
import { GetClauses } from '@modules/core/data/datasources/base'

export interface IUserRepository {
	find: (id: string) => Promise<UserEntity | undefined>
	get: (conditions?: GetClauses) => Promise<UserEntity[]>
	subscribeToMailingList: (email: string) => Promise<void>
	makeAdmin: (id: string) => Promise<void>
	removeAdmin: (id: string) => Promise<void>
}
