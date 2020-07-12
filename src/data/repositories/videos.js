import Video from '@/data/entities/videos'

const videosRaw = [
	{ id: 1, link: '/mock/videos/video_1.mp4', title: 'Faith: Inside Out', description: 'It is a perennial question pondered by the preacher — how long should my sermon be? Recently a friend took an informal poll on Twitter' },
	{ id: 2, link: '/mock/videos/video_2.mp4', title: 'Why the church', description: 'Christ is the head of the church. And he does not have out-of-body experiences. To submit to the authority of Jesus Christ over your life is to live in fellowship with the church.' },
	{ id: 3, link: '/mock/videos/video_2.mp4', title: 'Why the church', description: 'Christ is the head of the church. And he does not have out-of-body experiences. To submit to the authority of Jesus Christ over your life is to live in fellowship with the church.' },
	{ id: 4, link: '/mock/videos/video_2.mp4', title: 'Why the church', description: 'Christ is the head of the church. And he does not have out-of-body experiences. To submit to the authority of Jesus Christ over your life is to live in fellowship with the church.' },
	{ id: 5, link: '/mock/videos/video_2.mp4', title: 'Why the church', description: 'Christ is the head of the church. And he does not have out-of-body experiences. To submit to the authority of Jesus Christ over your life is to live in fellowship with the church.' },
	{ id: 6, link: '/mock/videos/video_2.mp4', title: 'Why the church', description: 'Christ is the head of the church. And he does not have out-of-body experiences. To submit to the authority of Jesus Christ over your life is to live in fellowship with the church.' },
]

const videos = videosRaw.map((video) => new Video(video.id, video))

export default class VideoRepository {
	static async getVideos(){
		return videos
	}
}
