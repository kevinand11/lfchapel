<template>
	<div class="card mb-5">
		<img src="../../assets/images/background.jpg" class="card-img-top" alt="">
		<div class="card-body">
			<h5 class="card-title">Card title that wraps to a new line</h5>
			<p class="card-text">{{ trimmedDescription }}</p>
		</div>
	</div>
</template>

<script>
import  useTrimmer from '@/usecases/global/useTrimmer'
export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	},
	setup(props){
		const { trimmed } = useTrimmer(props, 'article', 'description')
		return { trimmedDescription: trimmed }
	}
}
</script>
