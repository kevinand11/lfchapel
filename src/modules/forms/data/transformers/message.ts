import { MessageFromModel, MessageToModel } from '../models/message'
import { MessageEntity } from '../../domain/entities/message'
import { timestampToDate } from '@modules/core/data/transformers/converters/getFirestoreDate'

export class MessageTransformer {
	public fromJSON(model: MessageFromModel) {
		const { id, name, email, message, subject, dates: { createdAt }, attendedTo} = model
		return new MessageEntity({
			id,
			name, email, message, subject, attendedTo,
			createdAt: timestampToDate(createdAt)!
		})
	}

	public toJSON(entity: MessageEntity) :MessageToModel {
		return {
			name: entity.name,
			email: entity.email,
			subject: entity.subject,
			message: entity.message,
			attendedTo: entity.attendedTo
		}
	}

}
