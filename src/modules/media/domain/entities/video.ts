import { trimToLength, extractTextFromHTML, extractDate } from '@modules/core/validations/sanitizers'
import { Media } from '@modules/core/data/models/base'

export class VideoEntity{
	public readonly id: string
	public readonly title: string
	public readonly description: string
	public readonly previewData: Media
	public readonly videoData: Media
	public readonly userId: string
	public readonly createdAt: Date

	constructor({ id, title, description, previewData, videoData, createdAt, userId }: VideoConstructorArgs) {
		this.id = id
		this.title = title
		this.description = description
		this.previewData = previewData
		this.videoData = videoData
		this.createdAt = createdAt
		this.userId = userId
	}

	get preview(){ return this.previewData.link }

	get video(){ return this.videoData.link }

	get trimmedDescription(){ return trimToLength(extractTextFromHTML(this.description), 200) }

	get createdDate(){return extractDate(this.createdAt) }
}

type VideoConstructorArgs = { id: string, title: string, description: string, previewData: Media, videoData: Media, createdAt: Date, userId: string }

