import { GetClauses } from '@modules/core/data/datasources/base'

export abstract class FormBaseDataSource<From, To> {
	public abstract create: (data: To) => Promise<string>
	public abstract get: (condition?: GetClauses) => Promise<From[]>
	public abstract find: (id: string) => Promise<From | undefined>
	public abstract update: (id: string, data: To) => Promise<string>
	public abstract delete: (id: string) => Promise<void>
}
