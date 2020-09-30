import { VideoFactory } from '../factories/video'

export class GetVideoFactoryUseCase {
	public call () :VideoFactory {
		return new VideoFactory()
	}
}

