<template>
	<div>
		<div class="container" v-if="loading">
			<Loading />
		</div>
		<div v-else>
			<div class="container">
				<h1>{{ article.title }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
import { useArticle } from '@/usecases/useArticles'
export default {
	setup(props, { root }){
		const { id } = root.$route.params
		const { article, fetchArticle, loading } = useArticle(id)
		return { article, fetchArticle, loading }
	}
}
</script>
