import { RequestFromModel, RequestToModel } from '../models/request'
import { RequestEntity } from '../../domain/entities/request'
import { timestampToDate } from '@modules/core/data/transformers/converters/getFirestoreDate'

export class RequestTransformer {
	public fromJSON(model: RequestFromModel) {
		const { id, name, email, message, public: p, dates: { createdAt }, attendedTo} = model
		return new RequestEntity({
			id,
			name, email, message, public: p, attendedTo,
			createdAt: timestampToDate(createdAt)!
		})
	}

	public toJSON(entity: RequestEntity) :RequestToModel {
		return {
			name: entity.name,
			email: entity.email,
			message: entity.message,
			public: entity.public,
			attendedTo: entity.attendedTo
		}
	}

}
