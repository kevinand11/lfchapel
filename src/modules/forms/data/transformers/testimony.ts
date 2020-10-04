import { TestimonyFromModel, TestimonyToModel } from '../models/testimony'
import { TestimonyEntity } from '../../domain/entities/testimony'
import { timestampToDate } from '@modules/core/data/transformers/converters/getFirestoreDate'

export class TestimonyTransformer {
	public fromJSON(model: TestimonyFromModel) {
		const { id, name, email, message, public: p, dates: { createdAt }, attendedTo} = model
		return new TestimonyEntity({
			id,
			name, email, message, public: p, attendedTo,
			createdAt: timestampToDate(createdAt)!
		})
	}

	public toJSON(entity: TestimonyEntity) :TestimonyToModel {
		return {
			name: entity.name,
			email: entity.email,
			message: entity.message,
			public: entity.public,
			attendedTo: entity.attendedTo
		}
	}

}
