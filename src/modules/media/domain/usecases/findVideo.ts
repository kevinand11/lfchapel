import { IVideoRepository } from '../irepositories/ivideo'
import { VideoEntity } from '../entities/video'

export class FindVideoUseCase {
	private repository: IVideoRepository

	constructor(repository: IVideoRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<VideoEntity | undefined> {
		return await this.repository.find(id)
	}

}
