<template>
	<div>
		<div class="d-flex justify-content-between align-items-center"></div>
		<div id="gallery" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item" v-for="(photo, i) in photos" :key="photo.id" :class="{'active': i === index}">
					<img :src="photo.link" class="d-block w-100" alt="">
					<div class="carousel-caption">
						<h5>
							<span>{{ index + 1 }} of {{ length }}</span>
							<a :href="photo.link" download class="ml-3 text-info">Download</a>
						</h5>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" @click="previous" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" @click="next" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
</template>

<script>
import { usePhotoGalleryModal } from '@/usecases/usePhotos'

export default {
	props: {
		photos: {
			type: Array[Object],
			required: true
		},
		current: {
			type: Number || String,
			required: true
		}
	},
	setup(props){
		const { index, next, previous, length } = usePhotoGalleryModal(props.photos, props.current)
		return { index, next, previous, length }
	}
}
</script>

<style lang="scss" scoped>
	.carousel-caption{
		background: $blackTransparent;
		width: 100%;
		left: 0;
		bottom: 0;
		padding: 0.5rem 0;
	}
</style>
