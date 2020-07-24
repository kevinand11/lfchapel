export default class Audio implements Media {
	public readonly id: Id
	public readonly title: String
	public readonly description: String
	public readonly link: String

	constructor(data: Media){
		this.id = data.id
		this.title = data.title
		this.description = data.description
		this.link = data.link
	}
}
