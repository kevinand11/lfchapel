<template>
	<div class="card mb-4">
		<img :src="photo.link" class="card-img-top" alt="" @click="onClicked(photo.id)">
	</div>
</template>

<script>
export default {
	props: {
		photo: {
			type: Object,
			required: true
		},
		onClicked: {
			type: Function,
			required: true
		}
	}
}
</script>
