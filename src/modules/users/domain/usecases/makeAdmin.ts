import { IUserRepository } from '../irepositories/iuser'

export class MakeAdminUsecase {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.makeAdmin(id)
	}

}
