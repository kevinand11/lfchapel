import { TestimonyFactory } from '../factories/testimony'

export class GetTestimonyFactoryUseCase {
	public call () :TestimonyFactory {
		return new TestimonyFactory()
	}
}

