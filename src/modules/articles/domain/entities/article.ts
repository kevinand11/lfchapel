import { trimToLength, extractTextFromHTML, extractDate } from '@modules/core/validations/sanitizers'
import { Media } from '@modules/core/data/models/base'
import { BaseEntity } from '@modules/core/domains/entities/BaseEntity'

export class ArticleEntity extends BaseEntity {
	public readonly id: string
	public readonly title: string
	public readonly body: string
	public readonly imageData: Media
	public readonly tags: string[]
	public readonly userId: string
	public readonly createdAt: Date
	public readonly user = {
		name: 'The Writer\'s Block',
		image: '/img/user_profile.png'
	}

	constructor({ id, title, body, imageData, tags, createdAt, userId }: ArticleConstructorArgs) {
		super()
		this.id = id
		this.title = title
		this.body = body
		this.tags = tags
		this.imageData = imageData
		this.createdAt = createdAt
		this.userId = userId
	}

	get image(){ return this.imageData.link }

	get trimmedBody(){ return trimToLength(extractTextFromHTML(this.body), 200) }

	get createdDate(){return extractDate(this.createdAt) }
}

type ArticleConstructorArgs = { id: string, title: string, body: string, imageData: Media, tags: string[], createdAt: Date, userId: string }

