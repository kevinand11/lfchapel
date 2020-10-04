import { IUserRepository } from '../../domain/irepositories/iuser'
import { UserBaseDataSource } from '../datasources/user-base'
import { UserTransformer } from '../transformers/user'
import { GetClauses } from '@modules/core/data/datasources/base'
import { UserFromModel } from '@modules/users/data/models/user'

export class UserRepository implements IUserRepository{
	private dataSource: UserBaseDataSource
	private transformer: UserTransformer

	constructor(dataSource: UserBaseDataSource, transformer: UserTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	public async find(id: string) {
		const model = await this.dataSource.find(id)
		if(model) return this.transformer.fromJSON(model)
		else return undefined
	}

	public async get(conditions?: GetClauses) {
		const models = await this.dataSource.get(conditions)
		return models.map((model: UserFromModel) => this.transformer.fromJSON(model))
	}

	public async subscribeToMailingList(email: string): Promise<void> {
		return await this.dataSource.subscribeToMailingList({ email })
	}

	public async makeAdmin(id: string) {
		return await this.dataSource.makeAdmin({ id })
	}

	public async removeAdmin(id: string) {
		return await this.dataSource.removeAdmin({ id })
	}

}
