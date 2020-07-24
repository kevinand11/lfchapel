export default class Event {
	#id
	#title
	#description
	#start
	#end
	#allDay
	constructor(id, { title, description, start, end, allDay }){
		this.#id = id
		this.#title = title
		this.#description = description
		this.#start = allDay ? start.setHours(0,0,0) : start
		this.#end = allDay ? start.setHours(23,59,59) : end
		this.#allDay = !!allDay
	}

	get id(){ return this.#id }
	get title(){ return this.#title }
	get description(){ return this.#description }
	get start(){ return this.#start }
	get end(){ return this.#end }
	get allDay(){ return this.#allDay }

	isWithinDate(date){
		return this.#start <= date && date <= this.#end
	}
}
