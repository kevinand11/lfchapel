<template>
	<div class="card mb-5">
		<img :src="article.image" class="card-img-top" alt="">
		<div class="card-body">
			<p class="small">Published {{ article.date }}</p>
			<router-link :to="article.route" class="d-block mb-3 h4 black card-title text-capitalize">{{ article.title }}</router-link>
			<p class="card-text">{{ article.trimmedDescription }}</p>
			<p>
				<img :src="article.userImage" alt="" class="mr-2 border border-dark rounded-circle" width="40" height="40">
				<span class="bolder">by {{ article.userName }}</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
	.bolder{
		font-weight: 500;
	}
</style>
