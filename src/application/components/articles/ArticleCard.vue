<template>
	<div class="card rounded-xl shadow-sm">
		<img :src="article.image" class="card-img-top" alt="">
		<div class="card-body">
			<p class="small">Published {{ formatDate(article.createdAt) }}</p>
			<router-link :to="`/articles/${article.id}`" class="d-block mb-3 h4 black card-title text-capitalize">{{ article.title }}</router-link>
			<p class="card-text">{{ article.trimmedBody }}</p>
			<p>
				<img :src="article.user.image" alt="" class="mr-2 border border-dark rounded-circle" width="40" height="40">
				<span class="bolder">by {{ article.user.name }}</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { formatDate } from '@app/usecases/events/calendar'
import { ArticleEntity } from '@modules/articles/domain/entities/article'
export default defineComponent({
	props: {
		article: {
			type: ArticleEntity,
			required: true
		}
	},
	setup(){
	    return { formatDate }
	}
})
</script>

<style lang="scss" scoped>
	.bolder{
		font-weight: 500;
	}
</style>
