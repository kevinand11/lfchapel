export default class Audio implements AudioI {
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
