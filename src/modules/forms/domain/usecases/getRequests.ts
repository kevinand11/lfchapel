import { IRequestRepository } from '../irepositories/irequest'
import { RequestEntity } from '../entities/request'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetRequestsUseCase {
	private repository: IRequestRepository

	constructor(repository: IRequestRepository) {
		this.repository = repository
	}

	public async call (date?: Date) :Promise<RequestEntity[]> {
		const conditions: GetClauses = {
			order: {
				field: 'dates.createdAt',
				desc: true
			},
			limit: parseInt(process.env.VUE_APP_PAGINATION_LIMIT) + 1
		}
		if(date){
			conditions.where = [
				{
					field: 'dates.createdAt',
					condition: '<',
					value: date
				}
			]
		}
		return await this.repository.get(conditions)
	}

}

