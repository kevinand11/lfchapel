<template>
	<div id="image" :style="{background: `url('${article.image}')`}">
		<div class="overlay">
			<div class="container text-center">
				<h1 class="title">{{ article.title }}</h1>
				<p>{{ formatDate(article.createdAt) }}</p>
				<img :src="article.userImage" alt="" width="50" height="50" class="rounded-circle border border-secondary">
				<h6>{{ article.userName }}</h6>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'
import { formatDate} from '@/usecases/events/useEvents'
export default defineComponent({
	props: {
		article: {
			type: Object as PropType<ArticleI>,
			required: true
		}
	},
	setup(){
	    return { formatDate }
	}
})
</script>

<style lang="scss" scoped>
	div#image{
		.overlay{
			background: $blackTransparent;
			color: $white;
			padding: 4rem 0;
			min-height: 60vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		h1.title{
			font-size: 2.25rem;
			margin: 1.25rem 0;
		}
		img{ margin: 3rem 0 0; }
		h6{ margin: 1rem 0; }
		@media (min-width: $md){
			h1.title{ font-size: 3.5rem; }
		}
		@media (min-width: $lg){
			h1.title{ font-size: 4.5rem; }
		}
	}
</style>
