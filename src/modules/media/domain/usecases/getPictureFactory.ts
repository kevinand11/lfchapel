import { PictureFactory } from '../factories/picture'

export class GetPictureFactoryUseCase {
	public call () :PictureFactory {
		return new PictureFactory()
	}
}

