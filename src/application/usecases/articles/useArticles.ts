import ArticleRepository from '@/data/repositories/articles'
import { reactive, ref, computed } from '@vue/composition-api'
import router from '@/application/router'

export const useArticleList = () => {
	const loading = ref(false)
	const state = reactive({ articles: <ArticleI[]> [] })
	const fetchArticles = async () => {
		loading.value = true
		state.articles = await ArticleRepository.getArticles()
		loading.value = false
	}
	fetchArticles()
	return { articles: computed(() => state.articles), loading }
}

export const useArticle = (id: Id) => {
	const loading = ref(false)
	const state = reactive({ article: {} })
	const fetchArticle = async () => {
		loading.value = true
		const article = await ArticleRepository.findArticleById(id)
		article ? state.article = article : router?.push('/articles')
		loading.value = false
	}
	fetchArticle()

	return { article: computed(() => state.article), loading }
}

export const useRecentArticles = () => {
	const loading = ref(false)
	const state = reactive({ articles: <ArticleI[]> [] })
	const fetchArticles = async () => {
		loading.value = true
		state.articles = await ArticleRepository.getRecentArticles()
		loading.value = false
	}
	fetchArticles()
	return { articles: computed(() => state.articles), loading }
}
