import { TestimonyFirebaseDataSource } from './data/datasources/testimony-firebase'
import { TestimonyTransformer } from './data/transformers/testimony'
import { TestimonyRepository } from './data/repositories/testimony'
import { GetTestimoniesUseCase } from './domain/usecases/getTestimonies'
import { FindTestimonyUseCase } from './domain/usecases/findTestimony'
import { DeleteTestimonyUseCase } from './domain/usecases/deleteTestimony'
import { AddTestimonyUseCase } from './domain/usecases/addTestimony'
import { GetTestimonyFactoryUseCase } from './domain/usecases/getTestimonyFactory'
import { UpdateTestimonyUseCase } from './domain/usecases/updateTestimony'

const testimonyDataSource = new TestimonyFirebaseDataSource()

const testimonyTransformer = new TestimonyTransformer()

const testimonyRepository = new TestimonyRepository(testimonyDataSource, testimonyTransformer)

export const AddTestimony = new AddTestimonyUseCase(testimonyRepository)
export const FindTestimony = new FindTestimonyUseCase(testimonyRepository)
export const GetTestimonies = new GetTestimoniesUseCase(testimonyRepository)
export const UpdateTestimony = new UpdateTestimonyUseCase(testimonyRepository)
export const DeleteTestimony = new DeleteTestimonyUseCase(testimonyRepository)
export const GetTestimonyFactory = new GetTestimonyFactoryUseCase()
