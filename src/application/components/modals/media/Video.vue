<template>
	<ModalBase :show-separator="false">
		<template slot="header"><div></div></template>
		<template>
			<div class="m-n3">
				<video controls class="w-100" :allowfullscreen="false">
					<source :src="video.video">
					Your browser does not playing videos.
				</video>
				<div class="p-3 px-md-5">
					<div class="d-flex justify-content-between align-items-center mb-3">
						<i></i>
						<h4 class="mb-0">{{ video.title }}</h4>
						<a @click="closeMediaModal" class="text-danger"><i class="fas fa-times"></i></a>
					</div>
					<p>{{ video.description }}</p>
				</div>
			</div>
		</template>
	</ModalBase>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useVideoModal } from '@app/usecases/media/videos'
import { useMediaModal } from '@app/usecases/modals'
export default defineComponent({
	setup(){
		const { video } = useVideoModal()
		return {
			video,
			closeMediaModal: useMediaModal().closeMediaModal
		}
	}
})
</script>

<style lang="scss" scoped>
	div.contain{
		padding: 1rem;
		video{ margin: 0 0 1rem; }
	}
	@media (min-width: $sm){
		div.contain{ padding: 2rem; }
	}
</style>
