import { trimToLength, extractTextFromHTML, extractDate } from '../../../core/validations/sanitizers'
import { Media } from '../../../core/data/models/base'

export class PictureEntity{
	public readonly id: string
	public readonly title: string
	public readonly description: string
	public readonly imageData: Media
	public readonly userId: string
	public readonly createdAt: Date

	constructor({ id, title, description, imageData, createdAt, userId }: PictureConstructorArgs) {
		this.id = id
		this.title = title
		this.description = description
		this.imageData = imageData
		this.createdAt = createdAt
		this.userId = userId
	}

	get image(){ return this.imageData.link }

	get trimmedDescription(){ return trimToLength(extractTextFromHTML(this.description), 200) }

	get createdDate(){return extractDate(this.createdAt) }
}

type PictureConstructorArgs = { id: string, title: string, description: string, imageData: Media, createdAt: Date, userId: string }

