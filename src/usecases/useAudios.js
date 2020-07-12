import AudioRepository from '@/data/repositories/audios'
import { computed, reactive, ref } from '@vue/composition-api'

const formatTime = (length) => {
	if(length < 0) length = 0
	let hours = parseInt(length / 3600)
	let minutes = parseInt((length % 3600) / 60)
	let seconds = parseInt(length % 60)
	hours = hours > 9 ? `${hours}` :`0${hours}`
	minutes = minutes > 9 ? `${minutes}` :`0${minutes}`
	seconds = seconds > 9 ? `${seconds}` :`0${seconds}`
	return `${hours < 1 ? '' : `${hours}:`}${minutes}:${seconds}`
}

export const useAudiosList = () => {
	const loading = ref(false)
	const state = reactive({ audios: [] })
	const fetchAudios = async () => {
		loading.value = true
		state.audios = await AudioRepository.getAudios()
		loading.value = false
	}
	fetchAudios()

	return { audios: computed(() => state.audios), loading }
}

const players = {}
export const useAudioPlayer = (id, link) => {
	let { state, audio } = players[id] || {}
	state = state || reactive({ loading: true, playing: false, time: 0, error: '', length: 0 })
	audio = audio || new Audio(link)
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
			Object.values(players).forEach((player) => player.audio.pause())
			await audio.play()
		}
		catch{ state.error = 'Failed to play audio'}
	}
	const pause = () => audio.pause()
	const togglePlay = () => state.playing ? pause() : play()
	const setTime = (t) => audio.currentTime = t
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
