import { IAudioRepository } from '../irepositories/iaudio'
import { AudioEntity } from '../entities/audio'

export class FindAudioUseCase {
	private repository: IAudioRepository

	constructor(repository: IAudioRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<AudioEntity | undefined> {
		return await this.repository.find(id)
	}

}
