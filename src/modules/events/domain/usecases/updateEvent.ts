import { IEventRepository } from '../irepositories/ievent'
import { EventFactory } from '../factories/event'

export class UpdateEventUseCase {
	private repository: IEventRepository

	constructor(repository: IEventRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: EventFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
