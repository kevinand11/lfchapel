import { EventEntity } from '../entities/event'
import { GetClauses } from '@/modules/core/data/datasources/base'
import { EventToModel } from '../../data/models/event'

export interface IEventRepository {
	add: (data: EventToModel) => Promise<string>,
	find: (id: string) => Promise<EventEntity | undefined>
	get: (conditions?: GetClauses) => Promise<EventEntity[]>
	update: (id: string, data: EventToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
