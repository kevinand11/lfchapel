import { computed, reactive } from '@vue/composition-api'
import { AudioEntity } from '@modules/media/domain/entities/audio'
import {
	DeleteAudio, GetAudios, FindAudio,
	GetAudioFactory, AddAudio, UpdateAudio
} from '@modules/media'
import { Alert, Notify } from '@app/config/notifications'
import router from '@app/router'
import { useStore } from '@app/usecases/store'
import { useCreateModal, useEditModal } from '@app/usecases/modals'

const PAGINATION_LIMIT = parseInt(process.env.VUE_APP_PAGINATION_LIMIT)

const globalState = reactive({
	audios: reactive([]) as AudioEntity[],
	fetched: false,
	loading: false,
	error: '',
	hasMore: false,
	olderAudiosLoading: false
})

const setAudio = (audio: AudioEntity) => {
	const index = globalState.audios.findIndex((p) => p.id === audio.id)
	if(index !== -1) globalState.audios[index] = audio
	else globalState.audios.push(audio)
	globalState.error = ''
}
const unshiftAudio = (audio: AudioEntity) => {
	const index = globalState.audios.findIndex((p) => p.id === audio.id)
	if(index !== -1) globalState.audios[index] = audio
	else globalState.audios.unshift(audio)
	globalState.error = ''
}
const fetchAudios = async () => {
	const date = globalState.audios[globalState.audios.length - 1]?.createdAt ?? undefined
	const entities = await GetAudios.call(date)
	globalState.hasMore = entities.length === PAGINATION_LIMIT + 1
	entities.splice(0, PAGINATION_LIMIT).forEach(setAudio)
}
const fetchAudiosOnInit = async () => {
	globalState.loading = true
	await fetchAudios().catch(() => globalState.error = 'Failed to fetch audios')
	if(globalState.audios.length === 0) globalState.error = 'No audios available at the moment. Check again later'
	globalState.loading = false
}
const fetchOlderAudios = async () => {
	globalState.olderAudiosLoading = true
	await fetchAudios()
	globalState.olderAudiosLoading = true
}

export const useAudiosList = () => {
	if(!globalState.fetched) fetchAudiosOnInit().then(() => globalState.fetched = true)

	return {
		loading: computed(() => globalState.loading),
		olderAudiosLoading: computed(() => globalState.olderAudiosLoading),
		hasMore: computed(() => globalState.hasMore),
		error: computed(() => globalState.error),

		audios: computed(() => globalState.audios),

		fetchOlderAudios
	}
}

export const useDeleteAudio = (audio: AudioEntity) => {
	const state = reactive({ loading: false })
	const deleteAudio = async () :Promise<boolean> => {
		try {
			const result = await Alert({
				title: 'Delete audio',
				text: `Are you sure you want to delete ${audio.title}? This cannot be undone`,
				icon: 'info',
				confirmButtonText: 'Delete'
			})
			if(result.value) {
				state.loading = true
				await DeleteAudio.call(audio.id)
				globalState.audios = globalState.audios.filter((a) => a.id !== audio.id)
				const { id } = router.currentRoute.params
				if(id) await router.replace('/blog')
				state.loading = false
				await Notify({ icon: 'success', title: 'Audio deleted successfully' })
			}
			return result.value as boolean
		} catch(error) {
			state.loading = false
			await Notify({ icon: 'error', title: error.message })
			return false
		}
	}
	return {
		loading: computed(() => state.loading),
		deleteAudio
	}
}

const fetchAudio = async (id: string) => {
	let audio = globalState.audios.find((audio) => audio.id === id)
	if(audio) return audio
	audio = await FindAudio.call(id)
	if(audio) unshiftAudio(audio)
	return audio
}

export const useSingleAudio = (id: string) => {
	const state = reactive({
		loading: false,
		audio: undefined as AudioEntity | undefined,
		error: ''
	})
	const findAudio = async () => {
		state.loading = true
		const audio = await fetchAudio(id)
		if(audio){
			state.audio = audio
		}
		else{
			await router.replace('/blog')
			await Notify({ title: 'No such audio found', icon: 'error' })
		}
		state.loading = false
	}
	findAudio().catch(() => state.error = 'Failed to fetch audio')
	return {
		loading: computed(() => state.loading),
		audio: computed(() => state.audio),
		error: computed(() => state.error)
	}
}

export const useCreateAudio = () => {
	const state = reactive({
		loading: false,
		factory: GetAudioFactory.call()
	})

	state.factory.userId = useStore().auth.getId.value

	const createAudio = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const id = await AddAudio.call(state.factory)
				await fetchAudio(id)
				state.factory.reset()
				useCreateModal().closeCreateModal()
				await Notify({ icon: 'success', title: 'Audio created successfully' })
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		createAudio,
	}
}

let currentEdit = undefined as AudioEntity | undefined

export const setCurrentEditingAudio = (audio: AudioEntity) => currentEdit = audio

export const useEditAudio = () => {
	const state = reactive({
		loading: false,
		factory: GetAudioFactory.call()
	})

	if(currentEdit) state.factory.loadEntity(currentEdit)

	const editAudio = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			state.factory.userId = useStore().auth.getId.value
			try{
				const newId = await UpdateAudio.call(currentEdit!.id, state.factory)
				const audio = await FindAudio.call(newId)
				if(audio) unshiftAudio(audio)
				state.factory.reset()
				if(router.currentRoute.params.id) await router.replace('/blog')
				await router.replace(`/blog/${newId}`)
				useEditModal().closeEditModal()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		factory: state.factory,
		loading: computed(() => state.loading),
		editAudio,
	}
}
