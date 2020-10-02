import { extractDate } from '@modules/core/validations/sanitizers'
import { BaseEntity } from '@modules/core/domains/entities/BaseEntity'

export class RequestEntity extends BaseEntity {
	public readonly id: string
	public readonly name: string
	public readonly email: string
	public readonly message: string
	public readonly public: boolean
	public readonly attendedTo: boolean
	public readonly createdAt: Date

	constructor({ id, name, email, message, createdAt, public: p, attendedTo }: RequestConstructorArgs) {
		super()
		this.id = id
		this.name = name
		this.email = email
		this.message = message
		this.public = p
		this.attendedTo = attendedTo
		this.createdAt = createdAt
	}

	get createdDate(){return extractDate(this.createdAt) }
}

type RequestConstructorArgs = { id: string, name: string, email: string, message: string, createdAt: Date, public: boolean, attendedTo: boolean }

