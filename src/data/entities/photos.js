export default class Photo {
	#id
	#title
	#description
	#link
	constructor(id, { title, description, link }){
		this.#id = id
		this.#title = title
		this.#description = description
		this.#link = link
	}

	get id(){ return this.#id }
	get title(){ return this.#title }
	get description(){ return this.#description }
	get link(){ return this.#link }
}
