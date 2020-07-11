import Audio from '@/data/entities/audios'

const audiosRaw = [
	{ id: 1, link: '/mock/audios/audio_1.mp3'},
	{ id: 2, link: '/mock/audios/audio_2.mp3' },
]

const audios = audiosRaw.map((audio) => new Audio(audio.id, audio))

export default class AudioRepository {
	static async getAudios(){
		return audios
	}
}
