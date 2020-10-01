import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { EventBaseDataSource } from './event-base'
import { EventFromModel, EventToModel } from '../models/event'

export class EventFirebaseDataSource implements EventBaseDataSource{

	public async create(event: EventToModel): Promise<string> {
		return await FirestoreService.create('events', event)
	}

	public async find(id: string): Promise<EventFromModel | undefined> {
		return await FirestoreService.find('events', id) as EventFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<EventFromModel[]> {
		return await FirestoreService.get('events', conditions) as EventFromModel[]
	}

	public async update(id: string, data: EventToModel): Promise<string> {
		return await FirestoreService.update('events', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('events', id)
	}

}
