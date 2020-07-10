export default class Event {
	constructor(id, { title, description, start, end, allDay }){
		this._id = id
		this._title = title
		this._description = description
		this._start = allDay ? start.setHours(0,0,0) : start
		this._allDay = !!allDay
		this._end = allDay ? start.setHours(23,59,59) : end
	}

	get id(){ return this._id }
	get title(){ return this._title }
	get description(){ return this._description }
	get start(){ return this._start }
	get end(){ return this._end }
	get allDay(){ return this._allDay }

	isWithinDate(date){
		return this._start <= date && date <= this._end
	}
}
