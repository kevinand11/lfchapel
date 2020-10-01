import { IEventRepository } from '../irepositories/ievent'
import { EventFactory } from '../factories/event'

export class AddEventUseCase {
	private repository: IEventRepository

	constructor(repository: IEventRepository) {
		this.repository = repository
	}

	public async call (factory: EventFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
