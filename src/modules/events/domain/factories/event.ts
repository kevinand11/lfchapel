import { BaseFactory } from '@modules/core/domains/factories/base'
import {
	isLongerThan, isRequired, isDateGreaterThan
} from '@modules/core/validations/rules'
import { EventToModel } from '../../data/models/event'
import { EventEntity } from '../entities/event'
import { dateToTimestamp } from '@modules/core/data/transformers/converters/getFirestoreDate'
import { getDateParts } from '@modules/core/validations/sanitizers'

const isLongerThan3 = (value: string) => isLongerThan(3, value)

export class EventFactory extends BaseFactory<EventEntity, EventToModel> {
	public rules = {
		title: [isRequired,isLongerThan3],
		description: [isRequired,isLongerThan3],
		allDay: [isRequired],
		start: [isRequired],
		end: [isRequired, (d: Date) => isDateGreaterThan(d, this.start)],
		userId: [isRequired],
	}
	public values: { title: string, description: string, userId: string, allDay: boolean, start: Date, end: Date } = {
		title: '', description: '', userId: '', allDay: true, start: new Date(), end: new Date(Date.now() + 7200000)
	}
	public validValues: { title: string, description: string, userId: string, allDay: boolean, start: Date, end: Date } = {
		title: '', description: '', userId: '', allDay: true, start: new Date(), end: new Date(Date.now() + 7200000)
	}
	public errors = {
		title: undefined, description: undefined, userId: undefined, allDay: undefined, start: undefined, end: undefined
	}

	get title(){ return this.values.title }
	set title(value: string){ this.set('title', value) }
	get description(){ return this.values.description }
	set description(value: string){ this.set('description', value) }
	get userId(){ return this.values.userId }
	set userId(value: string){ this.set('userId', value) }
	get start(){ return this.values.start }
	set start(value: Date){
		this.set('start', value)
		this.set('end', new Date(new Date(value).getTime() + 7200000))
	}
	get end(){ return this.values.end }
	set end(value: Date){ this.set('end', value) }
	get startStr(){ return parseDate(this.start) }
	set startStr(value: string){ this.start = new Date(value) }
	get endStr(){ return parseDate(this.end) }
	set endStr(value: string){ this.end = new Date(value) }

	public toModel = async () => {
		if(this.valid){
			return {
				title: this.validValues.title,
				description: this.validValues.description,
				userId: this.validValues.userId,
				start: dateToTimestamp(this.validValues.start),
				end: dateToTimestamp(this.validValues.end),
			}
		}else{
			throw new Error('Validation errors')
		}
	}

	public loadEntity = (entity: EventEntity) => {
		this.title = entity.title
		this.description = entity.description
		this.userId = entity.userId
		this.start = entity.start
		this.end = entity.end
	}

}

const parseDate = (d: Date) => {
	const { year, month, day, hour, minute } = getDateParts(d)
	return `${year}-${month}-${day} ${hour}:${minute}`
}
