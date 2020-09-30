import { PictureFirebaseDataSource } from './data/datasources/picture-firebase'
import { PictureTransformer } from './data/transformers/picture'
import { PictureRepository } from './data/repositories/picture'
import { GetPicturesUseCase } from './domain/usecases/getPictures'
import { FindPictureUseCase } from './domain/usecases/findPicture'
import { DeletePictureUseCase } from './domain/usecases/deletePicture'
import { AddPictureUseCase } from './domain/usecases/addPicture'
import { GetPictureFactoryUseCase } from './domain/usecases/getPictureFactory'
import { UpdatePictureUseCase } from './domain/usecases/updatePicture'
import { AudioFirebaseDataSource } from './data/datasources/audio-firebase'
import { AudioTransformer } from './data/transformers/audio'
import { AudioRepository } from './data/repositories/audio'
import { AddAudioUseCase } from '@modules/media/domain/usecases/addAudio'
import { FindAudioUseCase } from '@modules/media/domain/usecases/findAudio'
import { GetAudiosUseCase } from '@modules/media/domain/usecases/getAudios'
import { UpdateAudioUseCase } from '@modules/media/domain/usecases/updateAudio'
import { DeleteAudioUseCase } from '@modules/media/domain/usecases/deleteAudio'
import { GetAudioFactoryUseCase } from '@modules/media/domain/usecases/getAudioFactory'

const pictureDataSource = new PictureFirebaseDataSource()
const audioDataSource = new AudioFirebaseDataSource()
const pictureTransformer = new PictureTransformer()
const audioTransformer = new AudioTransformer()
const pictureRepository = new PictureRepository(pictureDataSource, pictureTransformer)
const audioRepository = new AudioRepository(audioDataSource, audioTransformer)

export const AddPicture = new AddPictureUseCase(pictureRepository)
export const FindPicture = new FindPictureUseCase(pictureRepository)
export const GetPictures = new GetPicturesUseCase(pictureRepository)
export const UpdatePicture = new UpdatePictureUseCase(pictureRepository)
export const DeletePicture = new DeletePictureUseCase(pictureRepository)
export const GetPictureFactory = new GetPictureFactoryUseCase()

export const AddAudio = new AddAudioUseCase(audioRepository)
export const FindAudio = new FindAudioUseCase(audioRepository)
export const GetAudios = new GetAudiosUseCase(audioRepository)
export const UpdateAudio = new UpdateAudioUseCase(audioRepository)
export const DeleteAudio = new DeleteAudioUseCase(audioRepository)
export const GetAudioFactory = new GetAudioFactoryUseCase()
