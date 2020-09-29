<template>
	<section class="py-5 container" v-if="articles.length > 0">
		<div class="section-header">
			<h2>Recent Articles</h2>
		</div>
		<div class="grid">
			<ArticleCard :article="article" v-for="article in articles" :key="article.id" />
		</div>
		<div class="d-flex justify-content-center mt-3">
			<router-link class="btn btn-primary" to="/articles">More Articles</router-link>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.grid{
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 0.5rem;
		grid-row-gap: 1rem;
	}
	@media (min-width: $md) {
		.grid{
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useRecentArticles } from '@app/usecases/articles/useArticles'
import ArticleCard from '@app/components/articles/ArticleCard.vue'
export default defineComponent({
	components: {
		ArticleCard
	},
	setup(){
		const { loading, articles } = useRecentArticles()
		return {
		    loading, articles
		}
	}
})
</script>
