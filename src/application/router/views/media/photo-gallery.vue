<template>
	<div>
		<Loading v-if="loading" />
		<div class="grid" v-else>
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
.grid{
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
