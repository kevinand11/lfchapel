import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { MediaBaseDataSource } from './media-base'
import { AudioFromModel, AudioToModel } from '../models/audio'

export class AudioFirebaseDataSource implements MediaBaseDataSource<AudioFromModel, AudioToModel> {

	public async create(audio: AudioToModel): Promise<string> {
		return await FirestoreService.create('audios', audio)
	}

	public async find(id: string): Promise<AudioFromModel | undefined> {
		return await FirestoreService.find('audios', id) as AudioFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<AudioFromModel[]> {
		return await FirestoreService.get('audios', conditions) as AudioFromModel[]
	}

	public async update(id: string, data: AudioToModel): Promise<string> {
		return await FirestoreService.update('audios', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('audios', id)
	}

}
