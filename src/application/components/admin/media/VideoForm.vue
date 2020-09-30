<template>
	<ModalBase>
		<template slot="header">
			<slot name="title"><h4>Title</h4></slot>
		</template>
		<form class="mx-2" @submit.prevent="submit">
			<template>
				<div class="form-group my-3">
					<input class="form-control" placeholder="Title" v-model="factory.title"
					       :class="{'is-invalid': factory.errors.title, 'is-valid': factory.isValid('title')}">
					<span class="small" v-if="factory.errors.title">{{ factory.errors.title }}</span>
				</div>
				<div class="form-group my-3">
					<textarea class="form-control" placeholder="Description" v-model="factory.description"
					       :class="{'is-invalid': factory.errors.description, 'is-valid': factory.isValid('description')}">
					</textarea>
					<span class="small" v-if="factory.errors.description">{{ factory.errors.description }}</span>
				</div>
				<hr>
				<div class="form-group my-3">
					<input type="file" @change="catchImage" class="d-none" ref="imageInput" accept="image/*">
					<a @click.prevent="() => { $refs.imageInput.value= ''; $refs.imageInput.click() }">
						<img :src="previewLink" alt="" v-if="previewLink" width="50px" class="mr-2">
						<span class="text-info">{{ factory.image ? 'Change' : 'Upload' }} preview image</span>
					</a>
				</div>
				<div class="form-group my-3">
					<input type="file" @change="catchVideo" class="d-none" ref="videoInput" accept="video/*">
					<a @click.prevent="() => { $refs.videoInput.value= ''; $refs.videoInput.click() }">
						<span class="d-block" v-if="factory.video">{{ factory.video.name }}</span>
						<span class="text-info">{{ factory.video ? 'Change' : 'Upload' }} video</span>
					</a>
				</div>
				<hr>
				<div class="d-flex justify-content-end my-3">
					<button class="btn btn-gold text-white" type="submit" :disabled="loading || !factory.valid">
						<i class="fas fa-spinner fa-spin mr-2" v-if="loading"></i>
						<span>
							<slot name="buttonText">Submit</slot>
						</span>
					</button>
				</div>
			</template>
		</form>
	</ModalBase>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { VideoFactory } from '@modules/media/domain/factories/video'
import { useFileInputs } from '@app/usecases/core/forms'
export default defineComponent({
	name: 'VideoForm',
	props: {
		factory: {
			type: VideoFactory,
			required: true
		},
		loading: {
			type: Boolean,
			required: true
		},
		submit: {
			type: Function,
			required: true
		}
	},
	setup(props) {
		const previewLink = ref((props.factory.preview as any)?.link ?? null)
		const { catchFiles: catchImage } = useFileInputs(
			(file:File) => {
				props.factory.preview = file
				previewLink.value = window.URL.createObjectURL(file)
			}
		)
		const { catchFiles: catchVideo } = useFileInputs(
			(file:File) => props.factory.video = file
		)
		return { catchImage, catchVideo, previewLink }
	}
})
</script>
