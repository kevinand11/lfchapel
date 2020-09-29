import { IPictureRepository } from '../irepositories/ipicture'

export class DeletePictureUseCase {
	private repository: IPictureRepository

	constructor(repository: IPictureRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.delete(id)
	}

}
