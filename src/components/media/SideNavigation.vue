<template>
	<ul class="list-group">
		<li class="list-group-item">
			<router-link to="/media/lfc-tv">LFC TV</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/media/audio-sermons">Audio Sermons</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/media/photo-gallery">Photo Gallery</router-link>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	@import "~@/assets/style/index.scss";
	a{
		color: $black;
	}
	.router-link-exact-active{
		color: $red;
		font-weight: bold;
	}
</style>
