<template>
	<div class="card mb-4">
		<img :src="photo.link" class="card-img-top" alt="">
	</div>
</template>

<script>
export default {
	props: {
		photo: {
			type: Object,
			required: true
		}
	}
}
</script>
