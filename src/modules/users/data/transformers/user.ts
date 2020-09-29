import { UserFromModel, UserToModel } from '../models/user'
import { UserEntity } from '../../domain/entities/user'

export class UserTransformer {
	public fromJSON(model: UserFromModel) {
		const { id, bio, roles } = model
		return new UserEntity({
			id, bio, roles,
		})
	}

	public toJSON(entity: UserEntity) :UserToModel {
		return {
			bio: entity.userBio,
			roles: entity.roles,
		}
	}

}
