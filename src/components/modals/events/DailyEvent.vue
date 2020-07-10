<template>
	<div>
		<h6>Today</h6>
		<p>{{ date }}</p>
	</div>
</template>

<script>
export default {
	props: {
		date: {
			type: Date,
			required: true
		}
	}
}
</script>
