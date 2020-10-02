import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { FormBaseDataSource } from './form-base'
import { RequestFromModel, RequestToModel } from '../models/request'

export class RequestFirebaseDataSource implements FormBaseDataSource<RequestFromModel, RequestToModel>{

	public async create(request: RequestToModel): Promise<string> {
		return await FirestoreService.create('requests', request)
	}

	public async find(id: string): Promise<RequestFromModel | undefined> {
		return await FirestoreService.find('requests', id) as RequestFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<RequestFromModel[]> {
		return await FirestoreService.get('requests', conditions) as RequestFromModel[]
	}

	public async update(id: string, data: RequestToModel): Promise<string> {
		return await FirestoreService.update('requests', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('requests', id)
	}

}
