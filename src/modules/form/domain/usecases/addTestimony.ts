import { ITestimonyRepository } from '../irepositories/itestimony'
import { TestimonyFactory } from '../factories/testimony'

export class AddTestimonyUseCase {
	private repository: ITestimonyRepository

	constructor(repository: ITestimonyRepository) {
		this.repository = repository
	}

	public async call (factory: TestimonyFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
