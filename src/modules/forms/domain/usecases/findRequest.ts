import { IRequestRepository } from '../irepositories/irequest'
import { RequestEntity } from '../entities/request'

export class FindRequestUseCase {
	private repository: IRequestRepository

	constructor(repository: IRequestRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<RequestEntity | undefined> {
		return await this.repository.find(id)
	}

}
