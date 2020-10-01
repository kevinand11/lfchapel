import { IEventRepository } from '../../domain/irepositories/ievent'
import { EventBaseDataSource } from '../datasources/event-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { EventTransformer } from '../transformers/event'
import { EventFromModel, EventToModel } from '../models/event'

export class EventRepository implements IEventRepository{
	private dataSource: EventBaseDataSource
	private transformer: EventTransformer

	constructor(dataSource: EventBaseDataSource, transformer: EventTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: EventToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: EventFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: EventToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
