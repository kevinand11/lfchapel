import { IAudioRepository } from '../irepositories/iaudio'
import { AudioFactory } from '../factories/audio'

export class AddAudioUseCase {
	private repository: IAudioRepository

	constructor(repository: IAudioRepository) {
		this.repository = repository
	}

	public async call (factory: AudioFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
