import { AudioEntity } from '../entities/audio'
import { GetClauses } from '@modules/core/data/datasources/base'
import { AudioToModel } from '../../data/models/audio'

export interface IAudioRepository {
	add: (data: AudioToModel) => Promise<string>,
	find: (id: string) => Promise<AudioEntity | undefined>
	get: (conditions?: GetClauses) => Promise<AudioEntity[]>
	update: (id: string, data: AudioToModel) => Promise<string>,
	delete: (id: string) => Promise<void>
}
