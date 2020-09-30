<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<div class="d-flex justify-content-end mb-4">
				<button class="btn btn-lg btn-success" @click="setCreateModalPicture">Add New Picture</button>
			</div>
			<hr>
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<PictureCard v-for="picture in pictures" :key="picture.id" :picture="picture" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderPictures" :disabled="olderPicturesLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderPicturesLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { usePicturesList } from '@app/usecases/media/pictures'
import { useCreateModal } from '@app/usecases/modals'
import PictureCard from '@app/components/admin/media/PictureCard.vue'
export default defineComponent({
	name: 'Pictures',
	components: {
		PictureCard
	},
	setup(){
		const { loading, olderPicturesLoading, hasMore, error, pictures, fetchOlderPictures } = usePicturesList()
		return {
			loading, olderPicturesLoading, hasMore, error, pictures, fetchOlderPictures,
			setCreateModalPicture: useCreateModal().setCreateModalPicture
		}
	},
	meta(){
		return {
			title: 'Pictures',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
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
	grid-row-gap: 1rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
