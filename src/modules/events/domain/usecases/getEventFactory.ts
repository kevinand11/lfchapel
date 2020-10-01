import { EventFactory } from '../factories/event'

export class GetEventFactoryUseCase {
	public call () :EventFactory {
		return new EventFactory()
	}
}

