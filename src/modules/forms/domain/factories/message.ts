import { BaseFactory } from '@modules/core/domains/factories/base'
import { isLongerThan, isRequired, isEmail } from '@modules/core/validations/rules'
import { MessageToModel } from '../../data/models/message'
import { MessageEntity } from '../entities/message'

export class MessageFactory extends BaseFactory<MessageEntity, MessageToModel> {
	public rules = {
		name: [isRequired,(value: string) => isLongerThan(3, value)],
		email: [isRequired,isEmail],
		subject: [isRequired, (value: string) => isLongerThan(3, value)],
		message: [isRequired,(value: string) => isLongerThan(5, value)],
		attendedTo: [isRequired]
	}
	public values: { name: string, email: string, message: string, subject: string, attendedTo: boolean } = {
		name: '', email: '', message: '', subject: '', attendedTo: false
	}
	public validValues: { name: string, email: string, message: string, subject: string, attendedTo: boolean } = {
		name: '', email: '', message: '', subject: '', attendedTo: false
	}
	public errors = {
		name: undefined, email: undefined, message: undefined, subject: undefined, attendedTo: undefined
	}

	get name(){ return this.values.name }
	set name(value: string){ this.set('name', value) }
	get email(){ return this.values.email }
	set email(value: string){ this.set('email', value) }
	get message(){ return this.values.message }
	set message(value: string){ this.set('message', value) }
	get subject(){ return this.values.subject }
	set subject(value: string){ this.set('subject', value) }
	get attendedTo(){ return this.values.attendedTo }
	set attendedTo(value: boolean){ this.set('attendedTo', value) }

	public toModel = async () => {
		if(this.valid){
			return {
				name: this.validValues.name,
				email: this.validValues.email,
				subject: this.validValues.subject,
				message: this.validValues.message,
				attendedTo: this.validValues.attendedTo,
			}
		}else{
			throw new Error('Validation errors')
		}
	}

	public loadEntity = (entity: MessageEntity) => {
		this.name = entity.name
		this.email = entity.email
		this.subject = entity.subject
		this.message = entity.message
		this.attendedTo = entity.attendedTo
	}

}
