import { IAudioRepository } from '../irepositories/iaudio'
import { AudioEntity } from '../entities/audio'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetAudiosUseCase {
	private repository: IAudioRepository

	constructor(repository: IAudioRepository) {
		this.repository = repository
	}

	public async call (date?: Date) :Promise<AudioEntity[]> {
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

