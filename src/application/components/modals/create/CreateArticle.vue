<template>
	<article-form :submit="createArticle" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Create Article</h4>
				<a @click.prevent="closeCreateModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Create Article</template>
	</article-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import { useCreateArticle } from '@app/usecases/articles/articles'
import ArticleForm from '@app/components/admin/articles/ArticleForm.vue'
export default defineComponent({
	name: 'CreateArticle',
	components: {
		'article-form': ArticleForm
	},
	setup(){
		const { closeCreateModal } = useCreateModal()
		const { loading, createArticle, factory } = useCreateArticle()
		return {
			loading, createArticle, factory,
			closeCreateModal
		}
	}
})
</script>
