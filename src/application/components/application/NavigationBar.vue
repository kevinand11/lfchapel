<template>
	<header class="sticky-top">
		<nav class="navbar navbar-expand-lg navbar-dark container d-flex align-content-center justify-content-between">
			<router-link class="navbar-brand" to="/">
				<img src="@app/assets/images/logo.png" alt="LFChapel" height="60">
			</router-link>
			<button class="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse font-weight-bold" id="navbar">
				<ul class="navbar-nav mt-2 ml-auto text-center">
					<li class="nav-item">
						<router-link class="nav-link" to="/about-us/our-church">ABOUT</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/events">EVENTS</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/articles">BLOG</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/media/photo-gallery">MEDIA</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" target="_blank" href="https://rccglfc.vomoz.net/rccglfc/vxh">MEMBER'S PORTAL</a>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/forms/prayer-requests">PRAYER REQUEST</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/contact-us">CONTACT</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	header{
		background: $red;
		margin: 0;
	}
	.nav-link{
		color: $white !important;
		padding: 0.5rem 0;
	}
</style>
