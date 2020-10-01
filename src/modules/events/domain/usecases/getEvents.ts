import { IEventRepository } from '../irepositories/ievent'
import { EventEntity } from '../entities/event'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetEventsUseCase {
	private repository: IEventRepository

	constructor(repository: IEventRepository) {
		this.repository = repository
	}

	public async call (date?: Date) :Promise<EventEntity[]> {
		const conditions: GetClauses = {
			order: {
				field: 'start',
				desc: true
			},
			limit: parseInt(process.env.VUE_APP_PAGINATION_LIMIT) + 1
		}
		if(date){
			conditions.where = [
				{
					field: 'start',
					condition: '<',
					value: date
				}
			]
		}
		return await this.repository.get(conditions)
	}

}

