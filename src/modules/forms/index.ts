import { TestimonyFirebaseDataSource } from './data/datasources/testimony-firebase'
import { TestimonyTransformer } from './data/transformers/testimony'
import { TestimonyRepository } from './data/repositories/testimony'
import { GetTestimoniesUseCase } from './domain/usecases/getTestimonies'
import { FindTestimonyUseCase } from './domain/usecases/findTestimony'
import { DeleteTestimonyUseCase } from './domain/usecases/deleteTestimony'
import { AddTestimonyUseCase } from './domain/usecases/addTestimony'
import { GetTestimonyFactoryUseCase } from './domain/usecases/getTestimonyFactory'
import { UpdateTestimonyUseCase } from './domain/usecases/updateTestimony'
import { RequestFirebaseDataSource } from '@modules/forms/data/datasources/request-firebase'
import { RequestTransformer } from './data/transformers/request'
import { RequestRepository } from './data/repositories/request'
import { GetRequestsUseCase } from './domain/usecases/getRequests'
import { FindRequestUseCase } from './domain/usecases/findRequest'
import { DeleteRequestUseCase } from './domain/usecases/deleteRequest'
import { AddRequestUseCase } from './domain/usecases/addRequest'
import { GetRequestFactoryUseCase } from './domain/usecases/getRequestFactory'
import { UpdateRequestUseCase } from './domain/usecases/updateRequest'
import { MessageFirebaseDataSource } from './data/datasources/message-firebase'
import { MessageTransformer } from './data/transformers/message'
import { MessageRepository } from './data/repositories/message'
import { GetMessagesUseCase } from './domain/usecases/getMessages'
import { FindMessageUseCase } from './domain/usecases/findMessage'
import { DeleteMessageUseCase } from './domain/usecases/deleteMessage'
import { AddMessageUseCase } from './domain/usecases/addMessage'
import { GetMessageFactoryUseCase } from './domain/usecases/getMessageFactory'
import { UpdateMessageUseCase } from './domain/usecases/updateMessage'

const testimonyDataSource = new TestimonyFirebaseDataSource()
const requestDataSource = new RequestFirebaseDataSource()
const messageDataSource = new MessageFirebaseDataSource()

const testimonyTransformer = new TestimonyTransformer()
const requestTransformer = new RequestTransformer()
const messageTransformer = new MessageTransformer()

const testimonyRepository = new TestimonyRepository(testimonyDataSource, testimonyTransformer)
const requestRepository = new RequestRepository(requestDataSource, requestTransformer)
const messageRepository = new MessageRepository(messageDataSource, messageTransformer)

export const AddTestimony = new AddTestimonyUseCase(testimonyRepository)
export const FindTestimony = new FindTestimonyUseCase(testimonyRepository)
export const GetTestimonies = new GetTestimoniesUseCase(testimonyRepository)
export const UpdateTestimony = new UpdateTestimonyUseCase(testimonyRepository)
export const DeleteTestimony = new DeleteTestimonyUseCase(testimonyRepository)
export const GetTestimonyFactory = new GetTestimonyFactoryUseCase()

export const AddRequest = new AddRequestUseCase(requestRepository)
export const FindRequest = new FindRequestUseCase(requestRepository)
export const GetRequests = new GetRequestsUseCase(requestRepository)
export const UpdateRequest = new UpdateRequestUseCase(requestRepository)
export const DeleteRequest = new DeleteRequestUseCase(requestRepository)
export const GetRequestFactory = new GetRequestFactoryUseCase()

export const AddMessage = new AddMessageUseCase(messageRepository)
export const FindMessage = new FindMessageUseCase(messageRepository)
export const GetMessages = new GetMessagesUseCase(messageRepository)
export const UpdateMessage = new UpdateMessageUseCase(messageRepository)
export const DeleteMessage = new DeleteMessageUseCase(messageRepository)
export const GetMessageFactory = new GetMessageFactoryUseCase()
