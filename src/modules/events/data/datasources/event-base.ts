import { GetClauses } from '@modules/core/data/datasources/base'
import { EventFromModel, EventToModel } from '../models/event'

export abstract class EventBaseDataSource {
	public abstract create: (data: EventToModel) => Promise<string>
	public abstract get: (condition?: GetClauses) => Promise<EventFromModel[]>
	public abstract find: (id: string) => Promise<EventFromModel | undefined>
	public abstract update: (id: string, data: EventToModel) => Promise<string>
	public abstract delete: (id: string) => Promise<void>
}
