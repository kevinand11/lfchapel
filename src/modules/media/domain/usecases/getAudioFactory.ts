import { AudioFactory } from '../factories/audio'

export class GetAudioFactoryUseCase {
	public call () :AudioFactory {
		return new AudioFactory()
	}
}

