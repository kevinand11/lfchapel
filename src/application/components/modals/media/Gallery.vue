<template>
	<div>
		<div class="d-flex justify-content-between align-items-center"></div>
		<div id="gallery" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item" v-for="(picture, i) in pictures" :key="picture.id" :class="{'active': i === index}">
					<img :src="picture.image" class="d-block w-100" alt="">
					<div class="carousel-caption d-flex justify-content-between py-2 px-2 px-md-4">
						<a @click="previous" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<h5>
							<span>{{ index + 1 }} of {{ length }}</span>
							<a :href="picture.image" download class="ml-3 text-info">Download</a>
						</h5>
						<a  @click="next" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useGalleryModal } from '@app/usecases/media/pictures'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	setup(){
		const { index, next, previous, length, pictures } = useGalleryModal()
		return { index, next, previous, length, pictures }
	}
})
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
