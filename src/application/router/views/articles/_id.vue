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
import { useArticle } from '@/application/usecases/articles/useArticles'
import ArticleImageTitle from '@/application/components/articles/ArticleImageTitle'
import ArticleContent from '@/application/components/articles/ArticleContent'
import router from '@/application/router'
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
