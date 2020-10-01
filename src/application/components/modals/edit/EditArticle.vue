<template>
	<article-form :submit="editArticle" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Edit Article</h4>
				<a @click.prevent="closeEditModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Save Article</template>
	</article-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import { useEditArticle } from '@app/usecases/articles/articles'
import ArticleForm from '@app/components/admin/articles/ArticleForm.vue'
export default defineComponent({
	name: 'EditArticle',
	components: {
		'article-form': ArticleForm
	},
	setup(){
		const { closeEditModal } = useEditModal()
		const { loading, editArticle, factory } = useEditArticle()
		return {
			loading, editArticle, factory,
			closeEditModal
		}
	}
})
</script>
