export default class Article implements ArticleI {
	public readonly id: Id
	public readonly title: string
	public readonly description: string
	public readonly tags: string[]
	public readonly image: string
	public readonly userName: string
	public readonly userImage: string
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
