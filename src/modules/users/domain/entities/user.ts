import { BaseEntity } from '@modules/core/domains/entities/BaseEntity'

export class UserEntity extends BaseEntity {
	public readonly id: string
	public readonly roles: UserRoles

	public readonly userBio: UserBio

	constructor({ id, bio, roles }: UserConstructorArgs) {
		super()
		this.id = id
		this.userBio = bio
		this.roles = roles
	}

	get name(){ return this.userBio.name }
	get email(){ return this.userBio.email }

}

type UserConstructorArgs = {
	id: string
	bio: UserBio
	roles: UserRoles
}

export interface UserBio {
	name: string
	email: string
}
export interface UserRoles {
	isAdmin?: boolean
}
