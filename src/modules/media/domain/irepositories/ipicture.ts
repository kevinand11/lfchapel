import { PictureEntity } from '../entities/picture'
import { GetClauses } from '../../../core/data/datasources/base'
import { PictureToModel } from '../../data/models/picture'

export interface IPictureRepository {
	add: (data: PictureToModel) => Promise<string>,
	find: (id: string) => Promise<PictureEntity | undefined>
	get: (conditions?: GetClauses) => Promise<PictureEntity[]>
	update: (id: string, data: PictureToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
