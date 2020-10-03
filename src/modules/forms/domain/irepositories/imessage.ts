import { MessageEntity } from '../entities/message'
import { GetClauses } from '@modules/core/data/datasources/base'
import { MessageToModel } from '../../data/models/message'

export interface IMessageRepository {
	add: (data: MessageToModel) => Promise<string>,
	find: (id: string) => Promise<MessageEntity | undefined>
	get: (conditions?: GetClauses) => Promise<MessageEntity[]>
	update: (id: string, data: MessageToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
