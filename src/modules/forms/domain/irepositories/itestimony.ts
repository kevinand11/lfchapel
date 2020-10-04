import { TestimonyEntity } from '../entities/testimony'
import { GetClauses } from '@modules/core/data/datasources/base'
import { TestimonyToModel } from '../../data/models/testimony'

export interface ITestimonyRepository {
	add: (data: TestimonyToModel) => Promise<string>,
	find: (id: string) => Promise<TestimonyEntity | undefined>
	get: (conditions?: GetClauses) => Promise<TestimonyEntity[]>
	update: (id: string, data: TestimonyToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
