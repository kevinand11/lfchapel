import { IPictureRepository } from '../irepositories/ipicture'
import { PictureEntity } from '../entities/picture'

export class FindPictureUseCase {
	private repository: IPictureRepository

	constructor(repository: IPictureRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<PictureEntity | undefined> {
		return await this.repository.find(id)
	}

}
