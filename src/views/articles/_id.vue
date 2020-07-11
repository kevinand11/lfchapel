<template>
	<div>
		<Loading v-if="loading" />
		<div v-else>
			<ArticleImageTitle :article="article" />
			<ArticleContent :article="article" />
		</div>
	</div>
</template>

<script>
import { useArticle } from '@/usecases/useArticles'
import ArticleImageTitle from '@/components/articles/ArticleImageTitle'
import ArticleContent from '@/components/articles/ArticleContent'
export default {
	components: {
		ArticleImageTitle,
		ArticleContent
	},
	setup(props, { root }){
		const { id } = root.$route.params
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
