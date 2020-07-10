<template>
	<div class="p-3">
		<h3>Hi {{ photo }}</h3>
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
