import ArticleRepository from '@/data/repositories/articles'
import { reactive, ref, computed } from '@vue/composition-api'
import { useRouter } from '@/usecases/usePlugins'

export const useArticleList = () => {
	const loading = ref(false)
	const state = reactive({ articles: [] })
	const fetchArticles = async () => {
		loading.value = true
		/* TODO Delete on implementation of data source */await new Promise((resolve) => setTimeout(resolve, 1000))
		state.articles = await ArticleRepository.getArticles()
		loading.value = false
	}
	fetchArticles()

	return { articles: computed(() => state.articles), fetchArticles, loading }
}

export const useArticle = (id) => {
	const router = useRouter()
	const loading = ref(false)
	const state = reactive({ article: {} })
	const fetchArticle = async () => {
		loading.value = true
		/* TODO Delete on implementation of data source */await new Promise((resolve) => setTimeout(resolve, 1000))
		const article = await ArticleRepository.find(id)
		article ? state.article = article : router.push('/articles')
		loading.value = false
	}
	fetchArticle()

	return { article: computed(() => state.article), fetchArticle, loading }
}
