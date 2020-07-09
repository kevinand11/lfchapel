<template>
	<ul class="list-group">
		<li class="list-group-item">
			<router-link to="/about-us/our-church">Our Church</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/rccg-the-church">RCCG - The Church</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/the-general-overseer">The General Overseer</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/our-pastor">Our Pastor</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/leadership">Leadership</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/mission-and-vision">Mission and Vision</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/pastors-message">Pastor's Message</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/about-us/service-times">Service Times</router-link>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	a{
		color: $black;
	}
	.router-link-exact-active{
		color: $red;
		font-weight: bold;
	}
</style>
