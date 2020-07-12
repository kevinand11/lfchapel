export default class Video {
	#id
	#title
	#description
	#link
	#preview
	constructor(id, { title, description, link , preview }){
		this.#id = id
		this.#title = title
		this.#description = description
		this.#link = link
		this.#preview = preview
	}

	get id(){ return this.#id }
	get title(){ return this.#title }
	get description(){ return this.#description }
	get link(){ return this.#link }
	get preview(){ return this.#preview }

	get trimmedDescription(){
		if(this.#description.length < 200){ return this.#description }
		const index = this.#description.indexOf(' ', 200)
		return `${this.#description.slice(0, index)}...`
	}
}
