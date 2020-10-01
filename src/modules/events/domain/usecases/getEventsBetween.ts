import { IEventRepository } from '../irepositories/ievent'
import { EventEntity } from '../entities/event'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetEventsBetweenUseCase {
	private repository: IEventRepository

	constructor(repository: IEventRepository) {
		this.repository = repository
	}

	public async call (start?: Date, end?: Date) :Promise<EventEntity[]> {
		const conditions: GetClauses = {
			order: {
				field: 'dates.createdAt',
				desc: false
			},
			where: [
				{ field: 'start', condition: '>=', value: start },
				{ field: 'end', condition: '<=', value: end },
			]
		}
		return await this.repository.get(conditions)
	}

}

