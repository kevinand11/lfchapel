import { ITestimonyRepository } from '../../domain/irepositories/itestimony'
import { FormBaseDataSource } from '../datasources/form-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { TestimonyTransformer } from '../transformers/testimony'
import { TestimonyFromModel, TestimonyToModel } from '../models/testimony'

export class TestimonyRepository implements ITestimonyRepository{
	private dataSource: FormBaseDataSource<TestimonyFromModel, TestimonyToModel>
	private transformer: TestimonyTransformer

	constructor(dataSource: FormBaseDataSource<TestimonyFromModel, TestimonyToModel>, transformer: TestimonyTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: TestimonyToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: TestimonyFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: TestimonyToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
