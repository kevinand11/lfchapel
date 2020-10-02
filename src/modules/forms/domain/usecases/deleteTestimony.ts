import { ITestimonyRepository } from '../irepositories/itestimony'

export class DeleteTestimonyUseCase {
	private repository: ITestimonyRepository

	constructor(repository: ITestimonyRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
