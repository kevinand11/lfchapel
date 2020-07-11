<template>
	<div class="card mb-4" @click="showModal">
		<div class="card-body">
			<h5 class="card-title text-capitalize">{{ video.title }}</h5>
			<p class="card-text">{{ video.trimmedDescription }}</p>
		</div>
	</div>
</template>

<script>
import { useModal } from '@/usecases/useModal'
export default {
	props: {
		video: {
			type: Object,
			required: true
		}
	},
	setup(props, { root }){
		const { showVideoModal } =  useModal(root.$modal)
		const showModal = () => showVideoModal({ video: props.video })
		return { showModal }
	}
}
</script>

<style>
	.card{ cursor: pointer; }
</style>
