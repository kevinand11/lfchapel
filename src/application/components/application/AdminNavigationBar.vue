<template>
	<header class="bg-dark">
		<nav class="navbar navbar-expand-lg navbar-dark container d-flex align-content-center justify-content-between">
			<router-link class="navbar-brand" to="/admin/">
				<img src="@/application/assets/images/logo.png" alt="LFChapel" height="60">
			</router-link>
			<button class="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse font-weight-bold" id="navbar">
				<ul class="navbar-nav mt-2 text-center ml-auto">
					<li class="nav-item">
						<router-link class="nav-link" to="/admin/signin">Sign In</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/admin/signup">Sign Up</router-link>
					</li>
					<li class="nav-item">
						<button class="nav-link btn btn-sm btn-danger">Logout</button>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	.nav-link{
		color: $white !important;
		padding: 0.5rem 0;
	}
</style>
