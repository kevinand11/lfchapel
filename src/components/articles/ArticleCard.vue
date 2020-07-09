<template>
	<div class="card mb-5">
		<img :src="article.image" class="card-img-top" alt="">
		<div class="card-body">
			<p class="small">Published {{ article.date }}</p>
			<router-link :to="`/articles/${article.id}`" class="d-block mb-3 h4 black card-title text-capitalize">{{ article.title }}</router-link>
			<p class="card-text">{{ trimmedDescription }}</p>
			<p>
				<img :src="article.user.image" alt="" class="mr-2 border border-dark rounded-circle" width="40" height="40">
				<span class="bolder">by {{ article.user.name }}</span>
			</p>
		</div>
	</div>
</template>

<script>
import  useTrimmer from '@/usecases/global/useTrimmer'
export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	},
	setup(props){
		const { trimmed } = useTrimmer(props, 'article', 'description')
		return { trimmedDescription: trimmed }
	}
}
</script>

<style lang="scss" scoped>
	.bolder{
		font-weight: 500;
	}
</style>
