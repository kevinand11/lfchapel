import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { MediaBaseDataSource } from './media-base'
import { VideoFromModel, VideoToModel } from '../models/video'

export class VideoFirebaseDataSource implements MediaBaseDataSource<VideoFromModel, VideoToModel>{

	public async create(video: VideoToModel): Promise<string> {
		return await FirestoreService.create('videos', video)
	}

	public async find(id: string): Promise<VideoFromModel | undefined> {
		return await FirestoreService.find('videos', id) as VideoFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<VideoFromModel[]> {
		return await FirestoreService.get('videos', conditions) as VideoFromModel[]
	}

	public async update(id: string, data: VideoToModel): Promise<string> {
		return await FirestoreService.update('videos', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('videos', id)
	}

}
