import { IRequestRepository } from '../../domain/irepositories/irequest'
import { FormBaseDataSource } from '../datasources/form-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { RequestTransformer } from '../transformers/request'
import { RequestFromModel, RequestToModel } from '../models/request'

export class RequestRepository implements IRequestRepository{
	private dataSource: FormBaseDataSource<RequestFromModel, RequestToModel>
	private transformer: RequestTransformer

	constructor(dataSource: FormBaseDataSource<RequestFromModel, RequestToModel>, transformer: RequestTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: RequestToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: RequestFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: RequestToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
