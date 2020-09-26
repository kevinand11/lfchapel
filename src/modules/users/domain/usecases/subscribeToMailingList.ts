import { IUserRepository } from '../irepositories/iuser'
import { SubscribeToMailingListFactory } from '../factories/subscribeToMailingList'

export class SubscribeToMailingListUsecase {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	public async call (factory: SubscribeToMailingListFactory) :Promise<void> {
		return await this.repository.subscribeToMailingList((await factory.toModel()).email)
	}

}
