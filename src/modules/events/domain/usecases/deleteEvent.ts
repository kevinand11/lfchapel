import { IEventRepository } from '../irepositories/ievent'

export class DeleteEventUseCase {
	private repository: IEventRepository

	constructor(repository: IEventRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
