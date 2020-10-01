import { EventFirebaseDataSource } from './data/datasources/event-firebase'
import { EventTransformer } from './data/transformers/event'
import { EventRepository } from './data/repositories/event'
import { GetEventsUseCase } from './domain/usecases/getEvents'
import { FindEventUseCase } from './domain/usecases/findEvent'
import { DeleteEventUseCase } from './domain/usecases/deleteEvent'
import { AddEventUseCase } from './domain/usecases/addEvent'
import { GetEventFactoryUseCase } from './domain/usecases/getEventFactory'
import { UpdateEventUseCase } from './domain/usecases/updateEvent'
import { GetEventsBetweenUseCase } from './domain/usecases/getEventsBetween'

const eventDataSource = new EventFirebaseDataSource()
const eventTransformer = new EventTransformer()
const eventRepository = new EventRepository(eventDataSource, eventTransformer)

export const AddEvent = new AddEventUseCase(eventRepository)
export const FindEvent = new FindEventUseCase(eventRepository)
export const GetEvents = new GetEventsUseCase(eventRepository)
export const GetEventsBetween = new GetEventsBetweenUseCase(eventRepository)
export const UpdateEvent = new UpdateEventUseCase(eventRepository)
export const DeleteEvent = new DeleteEventUseCase(eventRepository)
export const GetEventFactory = new GetEventFactoryUseCase()
