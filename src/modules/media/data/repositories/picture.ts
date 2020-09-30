import { IPictureRepository } from '../../domain/irepositories/ipicture'
import { MediaBaseDataSource } from '../datasources/media-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { PictureTransformer } from '../transformers/picture'
import { PictureFromModel, PictureToModel } from '../models/picture'

export class PictureRepository implements IPictureRepository{
	private dataSource: MediaBaseDataSource<PictureFromModel, PictureToModel>
	private transformer: PictureTransformer

	constructor(dataSource: MediaBaseDataSource<PictureFromModel, PictureToModel>, transformer: PictureTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: PictureToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: PictureFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: PictureToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
