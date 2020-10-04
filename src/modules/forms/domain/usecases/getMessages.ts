import { IMessageRepository } from '../irepositories/imessage'
import { MessageEntity } from '../entities/message'
import { GetClauses } from '@modules/core/data/datasources/base'

export class GetMessagesUseCase {
	private repository: IMessageRepository

	constructor(repository: IMessageRepository) {
		this.repository = repository
	}

	public async call (date?: Date) :Promise<MessageEntity[]> {
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

