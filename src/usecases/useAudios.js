import AudioRepository from '@/data/repositories/audios'
import { computed, reactive, ref } from '@vue/composition-api'

export const useAudiosList = () => {
	const loading = ref(false)
	const state = reactive({ audios: [] })
	const fetchAudios = async () => {
		loading.value = true
		state.photos = await AudioRepository.getAudios()
		loading.value = false
	}
	fetchAudios()

	return { audios: computed(() => state.audios), loading }
}
