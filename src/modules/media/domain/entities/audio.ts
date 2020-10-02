import { trimToLength, extractTextFromHTML, extractDate } from '@modules/core/validations/sanitizers'
import { Media } from '@modules/core/data/models/base'
import { BaseEntity } from '@modules/core/domains/entities/BaseEntity'

export class AudioEntity extends BaseEntity {
	public readonly id: string
	public readonly title: string
	public readonly description: string
	public readonly audioData: Media
	public readonly userId: string
	public readonly createdAt: Date

	constructor({ id, title, description, audioData, createdAt, userId }: AudioConstructorArgs) {
		super()
		this.id = id
		this.title = title
		this.description = description
		this.audioData = audioData
		this.createdAt = createdAt
		this.userId = userId
	}

	get audio(){ return this.audioData.link }

	get trimmedDescription(){ return trimToLength(extractTextFromHTML(this.description), 200) }

	get createdDate(){return extractDate(this.createdAt) }
}

type AudioConstructorArgs = { id: string, title: string, description: string, audioData: Media, createdAt: Date, userId: string }

