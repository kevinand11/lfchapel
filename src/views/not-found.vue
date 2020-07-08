<template>
	<div class="container text-center py-5 my-5">
		<h4 class="red mb-5">Page doesn't exist at the moment.</h4>
		<div class="d-flex justify-content-center">
			<button class="btn btn-lg btn-primary mx-3" @click="$router.go(-1)">Go Back</button>
			<router-link class="btn btn-lg btn-outline-primary mx-3" to="/">Go Home</router-link>
		</div>
	</div>
</template>
