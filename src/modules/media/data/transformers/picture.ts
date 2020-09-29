import { PictureFromModel, PictureToModel } from '../models/picture'
import { PictureEntity } from '../../domain/entities/picture'
import { timestampToDate } from '../../../core/data/transformers/converters/getFirestoreDate'

export class PictureTransformer {
	public fromJSON(model: PictureFromModel) {
		const { id, title, description, image: imageData, dates: { createdAt }, userId } = model
		return new PictureEntity({
			id,
			title, description, userId, imageData,
			createdAt: timestampToDate(createdAt)!
		})
	}

	public toJSON(entity: PictureEntity) :PictureToModel {
		return {
			title: entity.title,
			description: entity.description,
			image: entity.imageData,
			userId: entity.userId
		}
	}

}
