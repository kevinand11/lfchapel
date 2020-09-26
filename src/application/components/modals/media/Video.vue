<template>
	<div class="contain">
		<video controls class="w-100" allowfullscreen="false">
			<source :src="video.link">
			Your browser does not playing videos.
		</video>
		<h4 class="text-center">{{ video.title }}</h4>
		<p>{{ video.description }}</p>
		<div class="d-flex justify-content-end">
			<button class="btn btn-danger float-right" @click="closeModal">Close</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'
export default defineComponent({
	props: {
		video: {
			type: Object as PropType<VideoI>,
			required: true
		}
	},
	setup(props, { root }){
		return { closeModal: root.$modal.hideAll }
	}
})
</script>

<style lang="scss" scoped>
	div.contain{
		padding: 1rem;
		video{ margin: 0 0 1rem; }
	}
	@media (min-width: $sm){
		div.contain{ padding: 2rem; }
	}
</style>
