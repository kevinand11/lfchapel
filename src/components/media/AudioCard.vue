<template>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title text-capitalize">{{ audio.title }}</h5>
			<AudioPlayer class="my-3" :audio="audio" />
			<a class="card-link text-info cursor-pointer" @click="toggleDescription">{{ show ? 'Hide description' : 'Show description' }}</a>
			<p class="card-text" v-if="show">{{ audio.description }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
	props: {
		audio: {
			type: Object,
			required: true
		}
	},
	setup(){
		const show = ref(false)
		const toggleDescription = () => show.value = !show.value
		return { show, toggleDescription }
	}
}
</script>
