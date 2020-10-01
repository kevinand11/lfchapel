<template>
	<Default>
		<loading v-if="loading"/>
		<div v-else>
			<ArticleImageTitle :article="article" />
			<ArticleContent :article="article" />
		</div>
	</Default>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useSingleArticle } from '@app/usecases/articles/articles'
import ArticleImageTitle from '@app/components/articles/ArticleImageTitle.vue'
import ArticleContent from '@app/components/articles/ArticleContent.vue'
import router from '@app/router'
export default defineComponent({
	name: 'Article',
	setup(){
		const { id } = router.currentRoute.params
		const { loading, article, error } = useSingleArticle(id)
		return { loading, article, error }
	},
	components: {
		ArticleImageTitle,
		ArticleContent
	},
	meta(){
		return {
			title: (this.article as any)?.title || 'Title',
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: ''
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: [].join(', ')
				}
			]
		}
	}
})
</script>
