import { RequestEntity } from '../entities/request'
import { GetClauses } from '@modules/core/data/datasources/base'
import { RequestToModel } from '../../data/models/request'

export interface IRequestRepository {
	add: (data: RequestToModel) => Promise<string>,
	find: (id: string) => Promise<RequestEntity | undefined>
	get: (conditions?: GetClauses) => Promise<RequestEntity[]>
	update: (id: string, data: RequestToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
