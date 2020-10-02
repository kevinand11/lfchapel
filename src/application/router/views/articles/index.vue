<template>
	<Default>
		<RouteName />
		<div class="container">
			<Loading v-if="loading" />
			<div class="grid" v-else>
				<ArticleCard v-for="article in articles" :article="article" :key="article.hash" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderArticles" :disabled="olderArticlesLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderArticlesLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Default>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ArticleCard from '@app/components/articles/ArticleCard.vue'
import { useArticlesList } from '@app/usecases/articles/articles'
export default defineComponent({
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
		const { loading, olderArticlesLoading, hasMore, error, articles, fetchOlderArticles } = useArticlesList()
		return {
			loading, olderArticlesLoading, hasMore, error, articles, fetchOlderArticles
		}
	},
})
</script>

<style lang="scss" scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
