<template>
	<div class="contain">
		<h4>{{ audio.title }}</h4>
		<audio controls class="w-100">
			<source :src="audio.link">
			Your browser does not playing audios.
		</audio>
		<p>{{ audio.description }}</p>
		<div class="d-flex justify-content-end">
			<button class="btn btn-danger float-right" @click="closeModal">Close</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		audio: {
			type: Object,
			required: true
		}
	},
	setup(props, { root }){
		return { closeModal: root.$modal.hideAll }
	}
}
</script>

<style lang="scss" scoped>
	div.contain{
		padding: 1rem;
		audio{ margin: 1rem 0; }
	}
	@media (min-width: $sm){
		div.contain{ padding: 2rem; }
	}
</style>
