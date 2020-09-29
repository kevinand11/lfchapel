import { BaseFactory } from '../../../core/domains/factories/base'
import {
	isLongerThan, isImageOrMedia, isRequired
} from '../../../core/validations/rules'
import { PictureToModel } from '../../data/models/picture'
import { Media } from '../../../core/data/models/base'
import { PictureEntity } from '../entities/picture'

type MediaContent = File | Media
const isLongerThan3 = (value: string) => isLongerThan(3, value)

export class PictureFactory extends BaseFactory<PictureEntity, PictureToModel> {
	public rules = {
		title: [isRequired,isLongerThan3],
		description: [isRequired,isLongerThan3],
		userId: [isRequired],
		image: [isRequired, isImageOrMedia]
	}
	public values: { title: string, description: string, userId: string, image: MediaContent | undefined } = {
		title: '', description: '', userId: '', image: undefined
	}
	public validValues: { title: string, description: string, userId: string, image: MediaContent | undefined } = {
		title: '', description: '', userId: '', image: undefined
	}
	public errors = {
		title: undefined, description: undefined, userId: undefined, image: undefined
	}

	get title(){ return this.values.title }
	set title(value: string){ this.set('title', value) }
	get description(){ return this.values.description }
	set description(value: string){ this.set('description', value) }
	get userId(){ return this.values.userId }
	set userId(value: string){ this.set('userId', value) }
	get image(){ return this.values.image! }
	set image(file: MediaContent){ this.set('image', file) }

	public toModel = async () => {
		if(this.valid){
			if(this.image instanceof File){
				this.image = await this.uploadFile('pictures', this.image)
			}
			return {
				title: this.validValues.title,
				description: this.validValues.description,
				userId: this.validValues.userId,
				image: this.validValues.image as Media
			}
		}else{
			throw new Error('Validation errors')
		}
	}

	public loadEntity = (entity: PictureEntity) => {
		this.title = entity.title
		this.description = entity.description
		this.userId = entity.userId
		this.image = entity.imageData
	}

}
