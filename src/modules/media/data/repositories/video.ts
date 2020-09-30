import { IVideoRepository } from '../../domain/irepositories/ivideo'
import { MediaBaseDataSource } from '../datasources/media-base'
import { GetClauses } from '@modules/core/data/datasources/base'
import { VideoTransformer } from '../transformers/video'
import { VideoFromModel, VideoToModel } from '../models/video'

export class VideoRepository implements IVideoRepository{
	private dataSource: MediaBaseDataSource<VideoFromModel, VideoToModel>
	private transformer: VideoTransformer

	constructor(dataSource: MediaBaseDataSource<VideoFromModel, VideoToModel>, transformer: VideoTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async add(data: VideoToModel) {
		return await this.dataSource.create(data)
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: VideoFromModel) => this.transformer.fromJSON(model))
	}

	public async update(id: string, data: VideoToModel) {
		return await this.dataSource.update(id, data)
	}

	public async delete(id: string) {
		return await this.dataSource.delete(id)
	}

}
