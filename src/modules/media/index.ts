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
import { AddAudioUseCase } from './domain/usecases/addAudio'
import { FindAudioUseCase } from './domain/usecases/findAudio'
import { GetAudiosUseCase } from './domain/usecases/getAudios'
import { UpdateAudioUseCase } from './domain/usecases/updateAudio'
import { DeleteAudioUseCase } from './domain/usecases/deleteAudio'
import { GetAudioFactoryUseCase } from './domain/usecases/getAudioFactory'
import { VideoFirebaseDataSource } from './data/datasources/video-firebase'
import { FindVideoUseCase } from './domain/usecases/findVideo'
import { VideoTransformer } from './data/transformers/video'
import { DeleteVideoUseCase } from './domain/usecases/deleteVideo'
import { GetVideoFactoryUseCase } from './domain/usecases/getVideoFactory'
import { UpdateVideoUseCase } from './domain/usecases/updateVideo'
import { AddVideoUseCase } from './domain/usecases/addVideo'
import { GetVideosUseCase } from './domain/usecases/getVideos'
import { VideoRepository } from './data/repositories/video'

const pictureDataSource = new PictureFirebaseDataSource()
const audioDataSource = new AudioFirebaseDataSource()
const videoDataSource = new VideoFirebaseDataSource()

const pictureTransformer = new PictureTransformer()
const audioTransformer = new AudioTransformer()
const videoTransformer = new VideoTransformer()

const pictureRepository = new PictureRepository(pictureDataSource, pictureTransformer)
const audioRepository = new AudioRepository(audioDataSource, audioTransformer)
const videoRepository = new VideoRepository(videoDataSource, videoTransformer)

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

export const AddVideo = new AddVideoUseCase(videoRepository)
export const FindVideo = new FindVideoUseCase(videoRepository)
export const GetVideos = new GetVideosUseCase(videoRepository)
export const UpdateVideo = new UpdateVideoUseCase(videoRepository)
export const DeleteVideo = new DeleteVideoUseCase(videoRepository)
export const GetVideoFactory = new GetVideoFactoryUseCase()
