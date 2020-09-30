import { IAudioRepository } from '../irepositories/iaudio'
import { AudioFactory } from '../factories/audio'

export class UpdateAudioUseCase {
	private repository: IAudioRepository

	constructor(repository: IAudioRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: AudioFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
