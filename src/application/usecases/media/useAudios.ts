import AudioRepository from '@/data/repositories/audios'
import { computed, reactive, ref } from '@vue/composition-api'

const formatTime = (length: number) => {
	if(length < 0) length = 0
	const hours = Math.trunc(length / 3600)
	const minutes = Math.trunc((length % 3600) / 60)
	const seconds = Math.trunc(length % 60)
	const hoursToString = hours > 9 ? `${hours}` :`0${hours}`
	const minutesToString = minutes > 9 ? `${minutes}` :`0${minutes}`
	const secondsToString = seconds > 9 ? `${seconds}` :`0${seconds}`
	return `${hours < 1 ? '' : `${hoursToString}:`}${minutesToString}:${secondsToString}`
}

export const useAudiosList = () => {
	const loading = ref(false)
	const state = reactive({ audios: <AudioI[]> [] })
	const fetchAudios = async () => {
		loading.value = true
		state.audios = await AudioRepository.getAudios()
		loading.value = false
	}
	fetchAudios()

	return { audios: computed(() => state.audios), loading }
}

const players: AudioPlayers = {}

export const useAudioPlayer = (id: Id, link: string) => {
	let { state, audio } = players[id] || {}
	state = state || reactive({ loading: true, playing: false, time: 0, error: '', length: 0 })
	audio = audio || new window.Audio(link)
	audio.onerror = () => {
		state.error = 'Failed loading audio'
		state.loading = false
	}
	audio.oncanplay = () => {
		state.loading = false
		state.length = audio.duration
	}
	audio.ontimeupdate = () => state.time = audio.currentTime
	audio.onplay = () => state.playing = true
	audio.onpause = () => state.playing = false
	audio.onended = () => {
		state.playing = false
		state.time = 0
	}
	const play = async () => {
		try{
			const controllers = Object.values(players) as AudioInstance[]
			controllers.forEach((player) => player.audio.pause())
			await audio.play()
		}
		catch{ state.error = 'Failed to play audio'}
	}
	const pause = () => audio.pause()
	const togglePlay = () => state.playing ? pause() : play()
	const setTime = (t: number) => audio.currentTime = t
	const forwardShort = () => setTime(audio.currentTime + 10 < audio.duration ? audio.currentTime + 10 : audio.duration)
	const backwardShort = () => setTime(audio.currentTime - 10 < 0 ? 0 : audio.currentTime - 10)
	const forwardLong= () => setTime(audio.currentTime + 60 < audio.duration ? audio.currentTime + 60 : audio.duration)
	const backwardLong = () => setTime(audio.currentTime - 60 < 0 ? 0 : audio.currentTime - 60)
	players[id] = { audio, state }
	return {
		togglePlay, forwardShort, backwardShort, forwardLong, backwardLong,
		loading: computed(() => state.loading),
		playing: computed(() => state.playing),
		time: computed({ get: () => state.time, set: setTime}),
		length: computed(() => state.length),
		timeFormatted: computed(() => formatTime(state.time)),
		lengthFormatted: computed(() => formatTime(state.length)),
		error: computed(() => state.error)
	}
}
