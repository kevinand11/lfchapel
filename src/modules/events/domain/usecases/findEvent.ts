import { IEventRepository } from '../irepositories/ievent'
import { EventEntity } from '../entities/event'

export class FindEventUseCase {
	private repository: IEventRepository

	constructor(repository: IEventRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<EventEntity | undefined> {
		return await this.repository.find(id)
	}

}
