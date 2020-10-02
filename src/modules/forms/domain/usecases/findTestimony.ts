import { ITestimonyRepository } from '../irepositories/itestimony'
import { TestimonyEntity } from '../entities/testimony'

export class FindTestimonyUseCase {
	private repository: ITestimonyRepository

	constructor(repository: ITestimonyRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<TestimonyEntity | undefined> {
		return await this.repository.find(id)
	}

}
