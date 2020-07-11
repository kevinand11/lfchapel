<template>
	<div>
		<Loading v-if="loading" />
		<div v-else>
			{{audios}}
		</div>
	</div>
</template>

<script>
import { useAudiosList } from '@/usecases/useAudios'
export default {
	setup(){
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
