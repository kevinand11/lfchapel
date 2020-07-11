import Audio from '@/data/entities/audios'

const audiosRaw = [
	{ id: 1, link: '/mock/audios/audio_1.mp3', title: 'How long should my sermons be', description: 'It is a perennial question pondered by the preacher — how long should my sermon be? Recently a friend took an informal poll on Twitter' },
	{ id: 2, link: '/mock/audios/audio_2.mp3', title: 'Why the church', description: 'Christ is the head of the church. And he does not have out-of-body experiences. To submit to the authority of Jesus Christ over your life is to live in fellowship with the church.' },
]

const audios = audiosRaw.map((audio) => new Audio(audio.id, audio))

export default class AudioRepository {
	static async getAudios(){
		return audios
	}
}
