<template>
	<div>
		<RouteName />
		<div class="container">
			<div class="card-columns">
				<ArticleCard v-for="i in 9" :key="i" />
			</div>
		</div>
	</div>
</template>

<script>
import ArticleCard from '@/components/articles/ArticleCard'
export default {
	components: {
		ArticleCard
	},
	meta(){
		return {
			title: 'Articles - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	.card-columns{ column-count: 1; }
	@media (min-width: $md) {
		.card-columns{ column-count: 2; }
	}
	@media (min-width: $lg) {
		.card-columns{ column-count: 3; }
	}
</style>
