export default class Photo implements Media {
	public readonly id: Id
	public readonly title: string
	public readonly description: string
	public readonly link: string

	constructor(data: Media){
		this.id = data.id
		this.title = data.title ?? ''
		this.description = data.description ?? ''
		this.link = data.link
	}
}
