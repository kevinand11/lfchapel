export class UserEntity{
	public readonly id: string
	public readonly roles: UserRoles

	public readonly userBio: UserBio

	constructor({ id, bio, roles }: UserConstructorArgs) {
		this.id = id
		this.userBio = bio
		this.roles = roles
	}
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
