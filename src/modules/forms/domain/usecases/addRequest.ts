import { IRequestRepository } from '../irepositories/irequest'
import { RequestFactory } from '../factories/request'

export class AddRequestUseCase {
	private repository: IRequestRepository

	constructor(repository: IRequestRepository) {
		this.repository = repository
	}

	public async call (factory: RequestFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
