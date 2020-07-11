<template>
	<div class="card mb-4" @click="showModal">
		<div class="card-body">
			<h5 class="card-title text-capitalize">{{ audio.title }}</h5>
			<p class="card-text">{{ audio.trimmedDescription }}</p>
		</div>
	</div>
</template>

<script>
import { useModal } from '@/usecases/useModal'
export default {
	props: {
		audio: {
			type: Object,
			required: true
		}
	},
	setup(props, { root }){
		const { showAudioModal } =  useModal(root.$modal)
		const showModal = () => showAudioModal({ audio: props.audio })
		return { showModal }
	}
}
</script>

<style>
	.card{ cursor: pointer; }
</style>
