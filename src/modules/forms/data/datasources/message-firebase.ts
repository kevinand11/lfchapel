import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { FormBaseDataSource } from './form-base'
import { MessageFromModel, MessageToModel } from '../models/message'

export class MessageFirebaseDataSource implements FormBaseDataSource<MessageFromModel, MessageToModel>{

	public async create(message: MessageToModel): Promise<string> {
		return await FirestoreService.create('messages', message)
	}

	public async find(id: string): Promise<MessageFromModel | undefined> {
		return await FirestoreService.find('messages', id) as MessageFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<MessageFromModel[]> {
		return await FirestoreService.get('messages', conditions) as MessageFromModel[]
	}

	public async update(id: string, data: MessageToModel): Promise<string> {
		return await FirestoreService.update('messages', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('messages', id)
	}

}
