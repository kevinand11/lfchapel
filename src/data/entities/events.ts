export default class Event implements EventI{
	public readonly id: Id
	public readonly title: string
	public readonly description: string
	public readonly start: Date
	public readonly end: Date
	public readonly allDay: boolean
	constructor(data: RawEvent){
		this.id = data.id
		this.title = data.title
		this.description = data.description
		if(data.allDay){
			const date = data.start
			date.setHours(0,0,0)
			this.start = date
			date.setHours(23,59,59)
			this.end = date
		}else{
			this.start = data.start
			this.end = data.end!
		}
		this.allDay = data.allDay
	}

	isWithinDate(date: Date){
		return this.start <= date && date <= this.end
	}
}
