export default class Article {
	public readonly id: String | Number
	public readonly title: String
	public readonly description: String
	public readonly tags: String[]
	public readonly image: String
	public readonly userName: String
	public readonly userImage: String
	public readonly createdAt: Date

	constructor(data: RawArticle){
		this.id = data.id
		this.title = data.title
		this.description = data.description
		this.tags = data.tags
		this.image = data.image
		this.userName = data.user.name
		this.userImage = data.user.image
		this.createdAt = data.createdAt
	}

	get route(){ return `/articles/${this.id}` }
	get trimmedDescription(){
		if(this.description.length < 200){ return this.description }
		const index = this.description.indexOf(' ', 200)
		return `${this.description.slice(0, index)}...`
	}
}
