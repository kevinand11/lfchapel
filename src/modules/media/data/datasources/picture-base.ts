import { GetClauses } from '@modules/core/data/datasources/base'
import { PictureFromModel, PictureToModel } from '../models/picture'

export abstract class PictureBaseDataSource {
	public abstract create: (data: PictureToModel) => Promise<string>
	public abstract get: (condition?: GetClauses) => Promise<PictureFromModel[]>
	public abstract find: (id: string) => Promise<PictureFromModel | undefined>
	public abstract update: (id: string, data: PictureToModel) => Promise<string>
	public abstract delete: (id: string) => Promise<void>
}
