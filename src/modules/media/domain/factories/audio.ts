import { BaseFactory } from '@modules/core/domains/factories/base'
import {
	isLongerThan, isAudioOrMedia, isRequired
} from '@modules/core/validations/rules'
import { AudioToModel } from '../../data/models/audio'
import { Media } from '@modules/core/data/models/base'
import { AudioEntity } from '../entities/audio'

type MediaContent = File | Media
const isLongerThan3 = (value: string) => isLongerThan(3, value)

export class AudioFactory extends BaseFactory<AudioEntity, AudioToModel> {
	public rules = {
		title: [isRequired,isLongerThan3],
		description: [isRequired,isLongerThan3],
		userId: [isRequired],
		audio: [isRequired, isAudioOrMedia]
	}
	public values: { title: string, description: string, userId: string, audio: MediaContent | undefined } = {
		title: '', description: '', userId: '', audio: undefined
	}
	public validValues: { title: string, description: string, userId: string, audio: MediaContent | undefined } = {
		title: '', description: '', userId: '', audio: undefined
	}
	public errors = {
		title: undefined, description: undefined, userId: undefined, audio: undefined
	}

	get title(){ return this.values.title }
	set title(value: string){ this.set('title', value) }
	get description(){ return this.values.description }
	set description(value: string){ this.set('description', value) }
	get userId(){ return this.values.userId }
	set userId(value: string){ this.set('userId', value) }
	get audio(){ return this.values.audio! }
	set audio(file: MediaContent){ this.set('audio', file) }

	public toModel = async () => {
		if(this.valid){
			if(this.audio instanceof File){
				this.audio = await this.uploadFile('audios', this.audio)
			}
			return {
				title: this.validValues.title,
				description: this.validValues.description,
				userId: this.validValues.userId,
				audio: this.validValues.audio as Media
			}
		}else{
			throw new Error('Validation errors')
		}
	}

	public loadEntity = (entity: AudioEntity) => {
		this.title = entity.title
		this.description = entity.description
		this.userId = entity.userId
		this.audio = entity.audioData
	}

}
