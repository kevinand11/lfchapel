<template>
	<Default>
		<Loading v-if="loading" />
		<div v-else>
			<ArticleImageTitle :article="article" />
			<ArticleContent :article="article" />
		</div>
	</Default>
</template>

<script>
import { useArticle } from '@app/usecases/articles/useArticles'
import ArticleImageTitle from '@app/components/articles/ArticleImageTitle'
import ArticleContent from '@app/components/articles/ArticleContent'
import router from '@app/router'
export default {
	components: {
		ArticleImageTitle,
		ArticleContent
	},
	setup(){
		const { id } = router.currentRoute.params
		const { article, loading } = useArticle(id)
		return { article, loading }
	},
	meta(){
		return {
			title: this.article.name,
			meta: [
				{ vmid: 'description', name: 'description', content: this.article.description },
				{ vmid: 'keywords', name: 'keywords', content: this.article.tags },
			]
		}
	}
}
</script>
