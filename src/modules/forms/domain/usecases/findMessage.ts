import { IMessageRepository } from '../irepositories/imessage'
import { MessageEntity } from '../entities/message'

export class FindMessageUseCase {
	private repository: IMessageRepository

	constructor(repository: IMessageRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<MessageEntity | undefined> {
		return await this.repository.find(id)
	}

}
