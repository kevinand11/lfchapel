<template>
	<div class="container text-center py-5 my-5">
		<h4 class="red mb-4">Page doesn't exist at the moment.</h4>
		<div class="d-flex justify-content-center">
			<button class="btn btn-lg btn-primary mx-1" @click="$router.go(-1)">Go Back</button>
			<router-link class="btn btn-lg btn-outline-primary mx-1" to="/">Go Home</router-link>
		</div>
	</div>
</template>

<script>
export default {
	meta(){
		return {
			title: 'Page Not Found - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
