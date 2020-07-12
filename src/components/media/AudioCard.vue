<template>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title text-capitalize">{{ audio.title }}</h5>
			<AudioPlayer class="my-3" :audio="audio" />
			<p class="card-text" v-if="show">{{ audio.trimmedDescription }}</p>
			<a class="card-link text-info" @click="toggleDescription">{{ show ? 'Hide description' : 'Show description' }}</a>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useModal } from '@/usecases/useModal'
export default {
	props: {
		audio: {
			type: Object,
			required: true
		}
	},
	setup(props, { root }){
		const show = ref(false)
		const toggleDescription = () => show.value = !show.value
		const { showAudioModal } =  useModal(root.$modal)
		const showModal = () => showAudioModal({ audio: props.audio })
		return { showModal, show, toggleDescription }
	}
}
</script>

<style>
	.card{ cursor: pointer; }
</style>
