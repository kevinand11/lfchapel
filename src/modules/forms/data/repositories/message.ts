import { IMessageRepository } from '../../domain/irepositories/imessage'
import { FormBaseDataSource } from '../datasources/form-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { MessageTransformer } from '../transformers/message'
import { MessageFromModel, MessageToModel } from '../models/message'

export class MessageRepository implements IMessageRepository{
	private dataSource: FormBaseDataSource<MessageFromModel, MessageToModel>
	private transformer: MessageTransformer

	constructor(dataSource: FormBaseDataSource<MessageFromModel, MessageToModel>, transformer: MessageTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: MessageToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: MessageFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: MessageToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
