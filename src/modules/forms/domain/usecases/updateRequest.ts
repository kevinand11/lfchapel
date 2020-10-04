import { IRequestRepository } from '../irepositories/irequest'
import { RequestFactory } from '../factories/request'

export class UpdateRequestUseCase {
	private repository: IRequestRepository

	constructor(repository: IRequestRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: RequestFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
