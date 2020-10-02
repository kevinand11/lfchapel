import { ITestimonyRepository } from '../irepositories/itestimony'
import { TestimonyFactory } from '../factories/testimony'

export class UpdateTestimonyUseCase {
	private repository: ITestimonyRepository

	constructor(repository: ITestimonyRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: TestimonyFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
