import { IMessageRepository } from '../irepositories/imessage'

export class DeleteMessageUseCase {
	private repository: IMessageRepository

	constructor(repository: IMessageRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
