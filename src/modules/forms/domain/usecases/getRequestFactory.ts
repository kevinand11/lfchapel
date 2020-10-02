import { RequestFactory } from '../factories/request'

export class GetRequestFactoryUseCase {
	public call () :RequestFactory {
		return new RequestFactory()
	}
}
