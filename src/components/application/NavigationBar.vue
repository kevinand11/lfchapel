<template>
	<nav class="navbar navbar-expand-lg navbar-light container d-flex flex-row-reverse flex-lg-row align-content-center justify-content-between">
		<router-link class="navbar-brand" to="/">LFChapel</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse font-weight-bold" id="navbar">
			<ul class="navbar-nav mr-auto mt-2 ml-auto text-center">
				<li class="nav-item">
					<router-link class="nav-link" to="/about-us/our-church">ABOUT</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/events">EVENTS</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/announcement">ANNOUNCEMENT</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/media/lfc-tv">MEDIA</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/give">GIVE</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/online-forms">FORMS</router-link>
				</li>
				<li class="nav-item">
					<a class="nav-link" target="_blank" href="https://rccglfc.vomoz.net/rccglfc/vxh">MEMBER'S PORTAL</a>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/contact-us">CONTACT</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	@import '~@/assets/style/index.scss';
	.nav-link{
		color: $red !important;
		padding: 0.5rem 0;
	}
</style>
