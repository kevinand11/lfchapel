import { AudioFromModel, AudioToModel } from '../models/audio'
import { AudioEntity } from '../../domain/entities/audio'
import { timestampToDate } from '@modules/core/data/transformers/converters/getFirestoreDate'

export class AudioTransformer {
	public fromJSON(model: AudioFromModel) {
		const { id, title, description, audio: audioData, dates: { createdAt }, userId } = model
		return new AudioEntity({
			id,
			title, description, userId, audioData,
			createdAt: timestampToDate(createdAt)!
		})
	}

	public toJSON(entity: AudioEntity) :AudioToModel {
		return {
			title: entity.title,
			description: entity.description,
			audio: entity.audioData,
			userId: entity.userId
		}
	}

}
