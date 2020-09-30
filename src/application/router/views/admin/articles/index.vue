<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<div class="d-flex justify-content-end mb-4">
				<button class="btn btn-lg btn-success" @click="setCreateModalArticle">Add New Article</button>
			</div>
			<hr>
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<ArticleCard v-for="article in articles" :key="article.id" :article="article" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderArticles" :disabled="olderArticlesLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderArticlesLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useArticlesList } from '@app/usecases/articles/articles'
import { useCreateModal } from '@app/usecases/modals'
import ArticleCard from '@app/components/admin/articles/ArticleCard.vue'
export default defineComponent({
	name: 'Articles',
	components: {
		ArticleCard
	},
	setup(){
		const { loading, olderArticlesLoading, hasMore, error, articles, fetchOlderArticles } = useArticlesList()
		return {
			loading, olderArticlesLoading, hasMore, error, articles, fetchOlderArticles,
			setCreateModalArticle: useCreateModal().setCreateModalArticle
		}
	},
	meta(){
		return {
			title: 'Articles',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
			]
		}
	}
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
