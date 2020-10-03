import { extractDate } from '@modules/core/validations/sanitizers'
import { BaseEntity } from '@modules/core/domains/entities/BaseEntity'

export class MessageEntity extends BaseEntity {
	public readonly id: string
	public readonly name: string
	public readonly email: string
	public readonly subject: string
	public readonly message: string
	public readonly attendedTo: boolean
	public readonly createdAt: Date

	constructor({ id, name, email, subject, message, createdAt, attendedTo }: MessageConstructorArgs) {
		super()
		this.id = id
		this.name = name
		this.email = email
		this.subject = subject
		this.message = message
		this.attendedTo = attendedTo
		this.createdAt = createdAt
	}

	get createdDate(){return extractDate(this.createdAt) }
}

type MessageConstructorArgs = { id: string, name: string, email: string, message: string, createdAt: Date, subject: string, attendedTo: boolean }

