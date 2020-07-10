<template>
	<div class="p-3">
		<h3>Hi {{ photos }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		photos: {
			type: Array,
			required: true
		}
	}
}
</script>
