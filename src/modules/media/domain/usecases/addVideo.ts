import { IVideoRepository } from '../irepositories/ivideo'
import { VideoFactory } from '../factories/video'

export class AddVideoUseCase {
	private repository: IVideoRepository

	constructor(repository: IVideoRepository) {
		this.repository = repository
	}

	public async call (factory: VideoFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
