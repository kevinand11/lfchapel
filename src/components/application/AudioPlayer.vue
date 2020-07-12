<template>
	<div>
		<div class="d-flex align-items-center mb-2">
			<i class="mr-3 spinner-border text-info" style="width:2rem;height:2rem" v-if="loading"></i>
			<i class="mr-3 fas fa-2x fa-play text-secondary" v-else-if="error"></i>
			<i class="mr-3 fas fa-2x cursor-pointer" v-else="" :class="playing ? 'fa-pause' : 'fa-play'" @click="togglePlay"></i>
			<span>{{ time }} / {{ length }}</span>
		</div>
		<p class="mb-0 text-danger" v-if="error">{{ error }}</p>
	</div>
</template>

<script>
import { useAudioPlayer } from '@/usecases/useAudios'
export default {
	props: {
		audio: {
			type: Object,
			required: true
		}
	},
	setup(props){
		const state = useAudioPlayer(props.audio.id, props.audio.link)
		const { loading, error, playing, length, time, togglePlay } = useAudioPlayer(props.audio.id, props.audio.link)
		return { state, loading, error, playing, length, time, togglePlay }
	}
}
</script>
