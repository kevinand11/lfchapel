import { IMessageRepository } from '../irepositories/imessage'
import { MessageFactory } from '../factories/message'

export class UpdateMessageUseCase {
	private repository: IMessageRepository

	constructor(repository: IMessageRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: MessageFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
