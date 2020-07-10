export default class Event {
	constructor(id, { title, start, end }){
		this._id = id
		this._title = title
		this._start = start
		this._end = end
	}

	get id(){ return this._id }
	get title(){ return this._title }
	get start(){ return this._start }
	get end(){ return this._end }
}
