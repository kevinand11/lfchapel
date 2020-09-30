<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<div class="d-flex justify-content-end mb-4">
				<button class="btn btn-lg btn-success" @click="setCreateModalPicture">Add New Picture</button>
			</div>
			<Loading v-if="loading"/>
			<template v-else>
				<div v-for="picture in pictures" :key="picture.id">
					{{ picture }}
				</div>
			</template>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderPictures">
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
export default defineComponent({
	name: 'Pictures',
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
