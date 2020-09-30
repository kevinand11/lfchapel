<template>
	<div>
		<Loading v-if="loading" />
		<div class="card-columns" v-else>
			<PictureCard v-for="picture in pictures" :picture="picture" :key="picture.id" />
		</div>
		<div class="d-flex justify-content-end my-3" v-if="hasMore">
			<button class="btn-success" @click="fetchOlderPictures" :disabled="olderPicturesLoading">
				<i class="fas fa-spinner fa-spin mr-2" v-if="olderPicturesLoading"></i>
				<span>Fetch More</span>
			</button>
		</div>
		<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PictureCard from '@app/components/media/PictureCard.vue'
import { usePicturesList } from '@app/usecases/media/pictures'
export default defineComponent({
	components: {
		PictureCard
	},
	setup(){
		const { loading, olderPicturesLoading, hasMore, error, pictures, fetchOlderPictures } = usePicturesList()
		return {
			loading, olderPicturesLoading, hasMore, error, pictures, fetchOlderPictures
		}
	},
	meta(){
		return {
			title: 'Gallery - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>

<style lang="scss" scoped>
	.card-columns{ column-count: 1; }
	@media (min-width: $md) {
		.card-columns{ column-count: 2; }
	}
</style>
