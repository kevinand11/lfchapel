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
						<p class="mb-0" v-if="factory.image">{{ factory.image.name }} </p>
						<span class="text-info">{{ factory.image ? 'Change' : 'Upload' }} image</span>
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
import { defineComponent } from '@vue/composition-api'
import { PictureFactory } from '@modules/media/domain/factories/picture'
import { useFileInputs } from '@app/usecases/core/forms'
export default defineComponent({
	name: 'ArticleForm',
	props: {
		factory: {
			type: PictureFactory,
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
		const { catchFiles: catchImage } = useFileInputs(
			(file:File) => props.factory.image = file
		)
		return { catchImage }
	}
})
</script>
