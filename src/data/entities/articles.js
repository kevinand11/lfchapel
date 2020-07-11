export default class Article {
	#id
	#title
	#description
	#tags
	#image
	#userName
	#userImage
	#createdAt
	constructor(id, { title, description, tags, image, user: { name: userName, image: userImage }, createdAt }){
		this.#id = id
		this.#title = title
		this.#description = description
		this.#tags = tags
		this.#image = image
		this.#userName = userName
		this.#userImage = userImage
		this.#createdAt = createdAt
	}
	get id(){ return this.#id }
	get title(){ return this.#title }
	get description(){ return this.#description }
	get tags(){ return this.#tags || [] }
	get image(){ return this.#image }
	get userName(){ return this.#userName }
	get userImage(){ return this.#userImage }
	get createdAt(){ return this.#createdAt }

	get route(){ return `/articles/${this.#id}` }
	get trimmedDescription(){
		if(this.#description.length < 200){ return this.#description }
		const index = this.#description.indexOf(' ', 200)
		return `${this.#description.slice(0, index)}...`
	}
}
