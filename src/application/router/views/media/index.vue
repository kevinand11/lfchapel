<template>
	<Default>
		<RouteName />
		<div class="container">
			<div class="row">
				<div class="col-md-3 mb-3">
					<SideNavigation :routes="routes" />
				</div>
				<div class="col-md-9 mb-3">
					<router-view />
				</div>
			</div>
		</div>
	</Default>
</template>

<script>
export default {
	setup(){
		return {
			routes: [
				{ name: 'Photo Gallery', route: '/media/photo-gallery' },
				{ name: 'Audio Sermons', route: '/media/audio-sermons' },
				{ name: 'LFC TV', route: '/media/lfc-tv' },
			]
		}
	},
	meta(){
		return {
			title: 'Media - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
