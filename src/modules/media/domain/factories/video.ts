import { BaseFactory } from '@modules/core/domains/factories/base'
import {
	isLongerThan, isImageOrMedia, isVideoOrMedia, isRequired
} from '@modules/core/validations/rules'
import { VideoToModel } from '../../data/models/video'
import { Media } from '@modules/core/data/models/base'
import { VideoEntity } from '../entities/video'

type MediaContent = File | Media
const isLongerThan3 = (value: string) => isLongerThan(3, value)

export class VideoFactory extends BaseFactory<VideoEntity, VideoToModel> {
	public rules = {
		title: [isRequired,isLongerThan3],
		description: [isRequired,isLongerThan3],
		userId: [isRequired],
		preview: [isRequired, isImageOrMedia],
		video: [isRequired, isVideoOrMedia],
	}
	public values: { title: string, description: string, userId: string, preview: MediaContent | undefined, video: MediaContent | undefined } = {
		title: '', description: '', userId: '', preview: undefined, video: undefined
	}
	public validValues: { title: string, description: string, userId: string, preview: MediaContent | undefined, video: MediaContent | undefined } = {
		title: '', description: '', userId: '', preview: undefined, video: undefined
	}
	public errors = {
		title: undefined, description: undefined, userId: undefined, preview: undefined, video: undefined
	}

	get title(){ return this.values.title }
	set title(value: string){ this.set('title', value) }
	get description(){ return this.values.description }
	set description(value: string){ this.set('description', value) }
	get userId(){ return this.values.userId }
	set userId(value: string){ this.set('userId', value) }
	get preview(){ return this.values.preview! }
	set preview(file: MediaContent){ this.set('preview', file) }
	get video(){ return this.values.video! }
	set video(file: MediaContent){ this.set('video', file) }

	public toModel = async () => {
		if(this.valid){
			if(this.preview instanceof File) this.preview = await this.uploadFile('videos', this.preview)
			if(this.video instanceof File) this.video = await this.uploadFile('videos', this.video)

			return {
				title: this.validValues.title,
				description: this.validValues.description,
				userId: this.validValues.userId,
				preview: this.validValues.preview as Media,
				video: this.validValues.video as Media
			}
		}else{
			throw new Error('Validation errors')
		}
	}

	public loadEntity = (entity: VideoEntity) => {
		this.title = entity.title
		this.description = entity.description
		this.userId = entity.userId
		this.preview = entity.previewData
		this.video = entity.videoData
	}

}
