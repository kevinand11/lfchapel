<template>
	<div>
		<p class="mb-0 text-danger" v-if="error">{{ error }}</p>
		<div v-else>
			<input type="range" class="form-control text-black-50" v-model="time" :min="0" :max="length">
			<div class="d-flex justify-content-between">
				<span>{{ timeFormatted }}</span>
				<span>{{ lengthFormatted }}</span>
			</div>
			<div class="d-flex align-items-center justify-content-center">
				<i class="fas fa-fast-backward cursor-pointer mr-3" @click="backwardLong"></i>
				<i class="fas fa-backward cursor-pointer mr-3" @click="backwardShort"></i>
				<i class="mr-3 spinner-border text-info" style="width:2rem;height:2rem" v-if="loading"></i>
				<i class="fas fa-2x cursor-pointer mr-3" v-else :class="playing ? 'fa-pause' : 'fa-play'" @click="togglePlay"></i>
				<i class="fas fa-forward cursor-pointer mr-3" @click="forwardShort"></i>
				<i class="fas fa-fast-forward cursor-pointer" @click="forwardLong"></i>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useAudioPlayer } from '@/usecases/media/useAudios'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	props: {
		audio: {
			type: Object as () => AudioI,
			required: true
		}
	},
	setup(props){
		return useAudioPlayer(props.audio.id, props.audio.link)
	}
})
</script>
