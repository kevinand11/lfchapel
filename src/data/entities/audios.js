export default class Audio {
	constructor(id, { title, description, link }){
		this._id = id
		this._title = title
		this._description = description
		this._link = link
	}

	get id(){ return this._id }
	get title(){ return this._title }
	get description(){ return this._description }
	get link(){ return this._link }
}
