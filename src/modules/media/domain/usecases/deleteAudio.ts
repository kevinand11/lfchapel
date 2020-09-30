import { IAudioRepository } from '../irepositories/iaudio'

export class DeleteAudioUseCase {
	private repository: IAudioRepository

	constructor(repository: IAudioRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
