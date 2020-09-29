import { IPictureRepository } from '../irepositories/ipicture'
import { PictureFactory } from '../factories/picture'

export class UpdatePictureUseCase {
	private repository: IPictureRepository

	constructor(repository: IPictureRepository) {
		this.repository = repository
	}

	public async call (id: string, factory: PictureFactory) :Promise<string> {
		return await this.repository.update(id, await factory.toModel())
	}

}
