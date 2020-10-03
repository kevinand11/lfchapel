import { IMessageRepository } from '../irepositories/imessage'
import { MessageFactory } from '../factories/message'

export class AddMessageUseCase {
	private repository: IMessageRepository

	constructor(repository: IMessageRepository) {
		this.repository = repository
	}

	public async call (factory: MessageFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
