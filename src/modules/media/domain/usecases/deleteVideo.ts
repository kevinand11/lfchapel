import { IVideoRepository } from '../irepositories/ivideo'

export class DeleteVideoUseCase {
	private repository: IVideoRepository

	constructor(repository: IVideoRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
