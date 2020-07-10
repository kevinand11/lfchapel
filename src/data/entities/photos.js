export default class Photo {
	constructor(id, { link }){
		this._id = id
		this._link = link
	}

	get id(){ return this._id }
	get link(){ return this._link }
}
