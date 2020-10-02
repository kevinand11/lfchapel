export class BaseEntity {
	public hash: string

	constructor(){
		this.hash = Date.now().toString()
	}
}
