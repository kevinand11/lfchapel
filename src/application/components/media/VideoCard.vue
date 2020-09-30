<template>
	<div class="card shadow-sm">
		<div class="position-relative">
			<img :src="video.preview" class="card-img-top" alt="">
			<div class="contain">
				<i class="fas fa-play fa-2x text-light" @click="showModal"></i>
			</div>
		</div>
		<div class="card-body">
			<h5 class="card-title text-capitalize" @click="showModal">{{ video.title }}</h5>
			<p class="card-text">{{ video.trimmedDescription }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { VideoEntity } from '@modules/media/domain/entities/video'
import { setCurrentViewingVideo } from '@app/usecases/media/videos'
import { useMediaModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		video: {
			type: VideoEntity,
			required: true
		}
	},
	setup(props){
		const showModal = () => {
			setCurrentViewingVideo(props.video)
			useMediaModal().setMediaModalVideo()
		}
		return { showModal }
	}
})
</script>

<style lang="scss" scoped>
	.card{ cursor: pointer; }
	div.contain{
		background: $blackTransparent;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
