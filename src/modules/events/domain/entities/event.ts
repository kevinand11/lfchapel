import { trimToLength, extractTextFromHTML, extractDate } from '@modules/core/validations/sanitizers'

export class EventEntity{
	public readonly id: string
	public readonly title: string
	public readonly description: string
	public readonly start: Date
	public readonly end: Date
	public readonly allDay: boolean
	public readonly userId: string
	public readonly createdAt: Date

	constructor({ id, title, description, start, end, allDay, userId, createdAt }: EventConstructorArgs) {
		this.id = id
		this.title = title
		this.description = description
		this.start = start
		this.end = end
		this.allDay = allDay
		this.userId = userId
		this.createdAt = createdAt
		if(allDay){
			const date = start
			date.setHours(0,0,0)
			this.start = date
			date.setHours(23,59,59)
			this.end = date
		}
	}

	get trimmedDescription(){ return trimToLength(extractTextFromHTML(this.description), 200) }

	get createdDate(){return extractDate(this.createdAt) }
}

type EventConstructorArgs = {
	id: string,
	title: string,
	description: string,
	start: Date,
	end: Date,
	allDay: boolean,
	createdAt: Date,
	userId: string
}

