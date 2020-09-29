import { IPictureRepository } from '../irepositories/ipicture'
import { PictureEntity } from '../entities/picture'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetPicturesUseCase {
	private repository: IPictureRepository

	constructor(repository: IPictureRepository) {
		this.repository = repository
	}

	public async call (date?: Date) :Promise<PictureEntity[]> {
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

