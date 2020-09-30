<template>
	<header class="sticky-top position-relative">
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
		<div class="custom-divider" v-if="$route.path === '/'">
			<svg data-name="Layer 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="d-sm-none">
				<path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
			</svg>
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="d-none d-sm-block">
				<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
			</svg>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	header{
		background: $gold;
		margin: 0;
	}
	.nav-link{
		color: $white !important;
		padding: 0.5rem 0;
	}
	.custom-divider {
		position: relative;
		padding: 0;
		border-bottom: transparent 2px solid;
		top: 100%;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.custom-divider svg.d-sm-none {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 30px;
	}

	.custom-divider svg.d-sm-block {
		position: relative;
		display: block;
		width: calc(153% + 1.3px);
		height: 50px;
		transform: rotateY(180deg);
	}

	.custom-divider .shape-fill {
		fill: #FFFFFF;
	}
</style>
