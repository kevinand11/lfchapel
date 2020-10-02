import { IRequestRepository } from '../irepositories/irequest'

export class DeleteRequestUseCase {
	private repository: IRequestRepository

	constructor(repository: IRequestRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
