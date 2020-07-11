<template>
	<div>
		<h4>{{ audios }}</h4>
	</div>
</template>

<script>
import { useAudiosList } from '@/usecases/useAudios'
export default {
	setup(/*props, { root }*/){
		const { audios, loading } = useAudiosList()
		return { audios, loading }
	},
	meta(){
		return {
			title: 'Audio Sermons - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
