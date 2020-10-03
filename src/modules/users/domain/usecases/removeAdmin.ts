import { IUserRepository } from '../irepositories/iuser'

export class RemoveAdminUsecase {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	public async call (id: string) : Promise<void> {
		return await this.repository.removeAdmin(id)
	}

}
