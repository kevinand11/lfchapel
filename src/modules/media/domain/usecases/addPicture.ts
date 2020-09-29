import { IPictureRepository } from '../irepositories/ipicture'
import { PictureFactory } from '../factories/picture'

export class AddPictureUseCase {
	private repository: IPictureRepository

	constructor(repository: IPictureRepository) {
		this.repository = repository
	}

	public async call (factory: PictureFactory) : Promise<string> {
		return await this.repository.add(await factory.toModel())
	}

}
