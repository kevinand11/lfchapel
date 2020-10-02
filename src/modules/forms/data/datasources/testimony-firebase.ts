import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { FormBaseDataSource } from './form-base'
import { TestimonyFromModel, TestimonyToModel } from '../models/testimony'

export class TestimonyFirebaseDataSource implements FormBaseDataSource<TestimonyFromModel, TestimonyToModel>{

	public async create(testimony: TestimonyToModel): Promise<string> {
		return await FirestoreService.create('testimonies', testimony)
	}

	public async find(id: string): Promise<TestimonyFromModel | undefined> {
		return await FirestoreService.find('testimonies', id) as TestimonyFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<TestimonyFromModel[]> {
		return await FirestoreService.get('testimonies', conditions) as TestimonyFromModel[]
	}

	public async update(id: string, data: TestimonyToModel): Promise<string> {
		return await FirestoreService.update('testimonies', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('testimonies', id)
	}

}
