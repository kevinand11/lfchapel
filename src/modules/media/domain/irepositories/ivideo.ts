import { VideoEntity } from '../entities/video'
import { GetClauses } from '@modules/core/data/datasources/base'
import { VideoToModel } from '../../data/models/video'

export interface IVideoRepository {
	add: (data: VideoToModel) => Promise<string>,
	find: (id: string) => Promise<VideoEntity | undefined>
	get: (conditions?: GetClauses) => Promise<VideoEntity[]>
	update: (id: string, data: VideoToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
