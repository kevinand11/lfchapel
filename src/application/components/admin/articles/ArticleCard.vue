<template>
	<div class="card rounded-xl shadow-sm">
		<img :src="article.image" class="card-img-top" alt="">
		<div class="card-body">
			<p class="small">Published {{ article.createdDate }}</p>
			<h5 :to="`/articles/${article.id}`" class="card-title">{{ article.title }}</h5>
			<p class="card-text">{{ article.trimmedBody }}</p>
			<div>
				<router-link :to="`/articles/${article.id}`" class="card-link text-info">Visit</router-link>
				<a class="card-link text-warning" @click.prevent="openEditModal">Edit</a>
				<a class="card-link text-danger" @click.prevent="deleteArticle">Delete</a>
			</div>
			<Loading v-if="loading" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ArticleEntity } from '@modules/articles/domain/entities/article'
import { setCurrentEditingArticle, useDeleteArticle } from '@app/usecases/articles/articles'
import { useEditModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		article: {
			required: true,
			type: ArticleEntity
		}
	},
	setup(props){
		const { loading, deleteArticle } = useDeleteArticle(props.article)
		return {
			openEditModal: () => {
				setCurrentEditingArticle(props.article)
				useEditModal().setEditModalArticle()
			},
			loading, deleteArticle
		}
	},
})
</script>
