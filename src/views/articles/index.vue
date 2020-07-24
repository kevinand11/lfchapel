<template>
	<div>
		<RouteName />
		<div class="container">
			<Loading v-if="loading" />
			<div class="card-columns" v-else>
				<ArticleCard v-for="article in articles" :article="article" :key="article.id" />
			</div>
		</div>
	</div>
</template>

<script>
import ArticleCard from '@/components/articles/ArticleCard'
import { useArticleList } from '@/usecases/articles/useArticles'
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
	},
	setup(){
		const { articles, loading } = useArticleList()
		return { articles, loading }
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
