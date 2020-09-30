import { IAudioRepository } from '../../domain/irepositories/iaudio'
import { MediaBaseDataSource } from '../datasources/media-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { AudioTransformer } from '../transformers/audio'
import { AudioFromModel, AudioToModel } from '../models/audio'

export class AudioRepository implements IAudioRepository{
	private dataSource: MediaBaseDataSource<AudioFromModel, AudioToModel>
	private transformer: AudioTransformer

	constructor(dataSource: MediaBaseDataSource<AudioFromModel, AudioToModel>, transformer: AudioTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: AudioToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: AudioFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: AudioToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
