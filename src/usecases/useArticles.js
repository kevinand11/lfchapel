import ArticleRepository from '@/data/repositories/articles'
import { reactive, ref, computed } from '@vue/composition-api'
import { useRouter } from '@/usecases/usePlugins'

export const useArticleList = () => {
	const loading = ref(false)
	const state = reactive({ articles: [] })
	const fetchArticles = async () => {
		loading.value = true
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
		const article = await ArticleRepository.findArticleById(id)
		article ? state.article = article : router.push('/articles')
		loading.value = false
	}
	fetchArticle()

	return { article: computed(() => state.article), fetchArticle, loading }
}
