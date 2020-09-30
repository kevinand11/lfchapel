import { IVideoRepository } from '../irepositories/ivideo'
import { VideoFactory } from '../factories/video'

export class UpdateVideoUseCase {
	private repository: IVideoRepository

	constructor(repository: IVideoRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: VideoFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
