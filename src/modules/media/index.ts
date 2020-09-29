import { PictureFirebaseDataSource } from './data/datasources/picture-firebase'
import { PictureTransformer } from './data/transformers/picture'
import { PictureRepository } from './data/repositories/picture'
import { GetPicturesUseCase } from './domain/usecases/getPictures'
import { FindPictureUseCase } from './domain/usecases/findPicture'
import { DeletePictureUseCase } from './domain/usecases/deletePicture'
import { AddPictureUseCase } from './domain/usecases/addPicture'
import { GetPictureFactoryUseCase } from './domain/usecases/getPictureFactory'
import { UpdatePictureUseCase } from './domain/usecases/updatePicture'

const pictureDataSource = new PictureFirebaseDataSource()
const pictureTransformer = new PictureTransformer()
const pictureRepository = new PictureRepository(pictureDataSource, pictureTransformer)

export const AddPicture = new AddPictureUseCase(pictureRepository)
export const FindPicture = new FindPictureUseCase(pictureRepository)
export const GetPictures = new GetPicturesUseCase(pictureRepository)
export const UpdatePicture = new UpdatePictureUseCase(pictureRepository)
export const DeletePicture = new DeletePictureUseCase(pictureRepository)
export const GetPictureFactory = new GetPictureFactoryUseCase()
