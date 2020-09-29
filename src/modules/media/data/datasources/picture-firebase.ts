import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { PictureBaseDataSource } from '../datasources/picture-base'
import { PictureFromModel, PictureToModel } from '../models/picture'

export class PictureFirebaseDataSource implements PictureBaseDataSource{

	public async create(picture: PictureToModel): Promise<string> {
		return await FirestoreService.create('blog', picture)
	}

	public async find(id: string): Promise<PictureFromModel | undefined> {
		return await FirestoreService.find('blog', id) as PictureFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<PictureFromModel[]> {
		return await FirestoreService.get('blog', conditions) as PictureFromModel[]
	}

	public async update(id: string, data: PictureToModel): Promise<string> {
		return await FirestoreService.update('blog', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('blog', id)
	}

}
