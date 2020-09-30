<template>
	<ModalBase :close="closeMediaModal" :show-separator="false">
		<template slot="header"><div></div></template>
		<template>
			<div class="position-relative m-n3">
				<img :src="picture.image" class="d-block w-100" alt="">
				<div class="d-flex justify-content-between p-2 px-md-4 top text-white">
					<a @click="previous"><span class="fas fa-angle-left" aria-hidden="true"></span></a>
					<h5 class="mb-0">
						<span>{{ index + 1 }} of {{ length }}</span>
						<a :href="picture.image" download target="__blank" class="ml-3 text-info">Download</a>
					</h5>
					<a @click="next"><span class="fas fa-angle-right" aria-hidden="true"></span></a>
				</div>
			</div>
		</template>
	</ModalBase>
</template>

<script lang="ts">
import { useGalleryModal } from '@app/usecases/media/pictures'
import { defineComponent } from '@vue/composition-api'
import { useMediaModal } from '@app/usecases/modals'
export default defineComponent({
	setup(){
		const { index, next, previous, length, picture } = useGalleryModal()
		const { closeMediaModal } = useMediaModal()
		return { index, next, previous, length, picture, closeMediaModal }
	}
})
</script>

<style lang="scss" scoped>
	.top{
		background: $blackTransparent;
		z-index: 1;
		bottom: 0;
		width: 100%;
		position: absolute;
	}
</style>
