import { ITestimonyRepository } from '../irepositories/itestimony'
import { TestimonyEntity } from '../entities/testimony'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetTestimoniesUseCase {
	private repository: ITestimonyRepository

	constructor(repository: ITestimonyRepository) {
		this.repository = repository
	}

	public async call (date?: Date) :Promise<TestimonyEntity[]> {
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

