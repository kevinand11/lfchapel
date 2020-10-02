import { BaseFactory } from '@modules/core/domains/factories/base'
import { isLongerThan, isRequired, isEmail } from '@modules/core/validations/rules'
import { RequestToModel } from '../../data/models/request'
import { RequestEntity } from '../entities/request'

export class RequestFactory extends BaseFactory<RequestEntity, RequestToModel> {
	public rules = {
		name: [isRequired,(value: string) => isLongerThan(3, value)],
		email: [isRequired,isEmail],
		message: [isRequired,(value: string) => isLongerThan(5, value)],
		public: [isRequired],
		attendedTo: [isRequired]
	}
	public values: { name: string, email: string, message: string, public: boolean, attendedTo: boolean } = {
		name: '', email: '', message: '', public: true, attendedTo: false
	}
	public validValues: { name: string, email: string, message: string, public: boolean, attendedTo: boolean } = {
		name: '', email: '', message: '', public: true, attendedTo: false
	}
	public errors = {
		name: undefined, email: undefined, message: undefined, public: undefined, attendedTo: undefined
	}

	get name(){ return this.values.name }
	set name(value: string){ this.set('name', value) }
	get email(){ return this.values.email }
	set email(value: string){ this.set('email', value) }
	get message(){ return this.values.message }
	set message(value: string){ this.set('message', value) }
	get public(){ return this.values.public }
	set public(value: boolean){ this.set('public', value) }
	get attendedTo(){ return this.values.attendedTo }
	set attendedTo(value: boolean){ this.set('attendedTo', value) }

	public toModel = async () => {
		if(this.valid){
			return {
				name: this.validValues.name,
				email: this.validValues.email,
				message: this.validValues.message,
				public: this.validValues.public,
				attendedTo: this.validValues.attendedTo,
			}
		}else{
			throw new Error('Validation errors')
		}
	}

	public loadEntity = (entity: RequestEntity) => {
		this.name = entity.name
		this.email = entity.email
		this.message = entity.message
		this.public = entity.public
		this.attendedTo = entity.attendedTo
	}

}
