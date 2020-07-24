export default class Video implements MediaWithPreview{
	public readonly id: Id
	public readonly title: String
	public readonly description: String
	public readonly link: String
	public readonly preview: String

	constructor(data: MediaWithPreview){
		this.id = data.id
		this.title = data.title
		this.description = data.description
		this.link = data.link
		this.preview = data.preview
	}

	get trimmedDescription(){
		if(this.description.length < 200){ return this.description }
		const index = this.description.indexOf(' ', 200)
		return `${this.description.slice(0, index)}...`
	}
}
