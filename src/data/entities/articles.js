export default class Article {
	constructor(id, { title, description, image, user: { name: userName, image: userImage }, createdAt }){
		this._id = id
		this._title = title
		this._description = description
		this._image = image
		this._userName = userName
		this._userImage = userImage
		this._createdAt = createdAt
	}
	get id(){ return this._id }
	get title(){ return this._title }
	get description(){ return this._description }
	get image(){ return this._image }
	get userName(){ return this._userName }
	get userImage(){ return this._userImage }
	get createdAt(){ return this._createdAt }

	get route(){ return `/articles/${this._id}` }
	get trimmedDescription(){
		if(this._description.length < 200){ return this._description }
		const index = this._description.indexOf(' ', 200)
		return `${this._description.slice(0, index)}...`
	}
}
