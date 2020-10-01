import { trimToLength, extractTextFromHTML, extractDate } from '@modules/core/validations/sanitizers'

export class EventEntity{
	public readonly id: string
	public readonly title: string
	public readonly description: string
	public readonly start: Date
	public readonly end: Date
	public readonly userId: string
	public readonly createdAt: Date

	constructor({ id, title, description, start, end, userId, createdAt }: EventConstructorArgs) {
		this.id = id
		this.title = title
		this.description = description
		this.start = start
		this.end = end
		this.userId = userId
		this.createdAt = createdAt
	}

	get trimmedDescription(){ return trimToLength(extractTextFromHTML(this.description), 200) }

	get createdDate(){return extractDate(this.createdAt) }

	isWithinDate(date: Date){
		const start = new Date(this.start),
			end = new Date(this.end), 
			d = new Date(date)
		start.setHours(0,0,0,0)
		end.setHours(0,0,0,0)
		d.setHours(0,0,0,0)
		return start <= d && d <= end
	}
}

type EventConstructorArgs = {
	id: string,
	title: string,
	description: string,
	start: Date,
	end: Date,
	createdAt: Date,
	userId: string
}

