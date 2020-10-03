import { UserEntity } from '../../domain/entities/user'

export interface IUserRepository {
	find: (id: string) => Promise<UserEntity | undefined>
	subscribeToMailingList: (email: string) => Promise<void>
	makeAdmin: (id: string) => Promise<void>
	removeAdmin: (id: string) => Promise<void>
}
