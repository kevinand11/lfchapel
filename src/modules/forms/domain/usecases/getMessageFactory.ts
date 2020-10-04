import { MessageFactory } from '../factories/message'

export class GetMessageFactoryUseCase {
	public call () :MessageFactory {
		return new MessageFactory()
	}
}
