import { VideoFromModel, VideoToModel } from '../models/video'
import { VideoEntity } from '../../domain/entities/video'
import { timestampToDate } from '@modules/core/data/transformers/converters/getFirestoreDate'

export class VideoTransformer {
	public fromJSON(model: VideoFromModel) {
		const { id, title, description, preview: previewData, video: videoData, dates: { createdAt }, userId } = model
		return new VideoEntity({
			id,
			title, description, userId, previewData, videoData,
			createdAt: timestampToDate(createdAt)!
		})
	}

	public toJSON(entity: VideoEntity) :VideoToModel {
		return {
			title: entity.title,
			description: entity.description,
			preview: entity.previewData,
			video: entity.videoData,
			userId: entity.userId
		}
	}

}
