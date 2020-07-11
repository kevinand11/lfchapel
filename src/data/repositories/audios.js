import Audio from '@/data/entities/audios'

const audiosRaw = [
	{ id: 1, link: '/mock/articles/article (1).jpg'},
	{ id: 2, link: '/mock/articles/article (2).jpg' },
	{ id: 3, link: '/mock/articles/article (3).jpg' },
	{ id: 4, link: '/mock/articles/article (4).jpg' },
	{ id: 5, link: '/mock/articles/article (5).jpg' },
	{ id: 6, link: '/mock/articles/article (6).jpg' },
]

const audios = audiosRaw.map((audio) => new Audio(audio.id, audio))

export default class AudioRepository {
	static async getAudios(){
		return audios
	}
}
