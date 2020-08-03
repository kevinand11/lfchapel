<template>
	<div class="banner d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row">
		<div class="banner-content container text-center">
			<h1 class="display-4">WELCOME TO OUR <br> CHURCH</h1>
			<p class="lead">Prayer can be rich when it's simple and spontaneous. In fact, we can pray, at any time. It doesn't require lofty language.</p>
			<hr class="my-4">
			<router-link class="btn btn-danger btn-lg text-white" to="/media/audio-sermons" role="button">See sermons</router-link>
		</div>
		<div>
			<img src="@/assets/images/home/banner.png" alt="" class="w-100">
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.banner{
		.banner-content{
			padding: 1.5rem;
		}
		color: $main-red;
		.display-4{
			font-size: 2.25rem;
			font-weight: 900;
		}
		.lead{
			font-size: 1.0rem;
		}
	}
	@media (min-width: $lg){
		.banner{
			min-height: 500px;
			.banner-content{
				padding: 4rem 1rem 4rem 10%;
				.display-4{
					font-size: 3.5rem;
				}
				.lead{
					font-size: 1.25rem;
				}
			}
		}
	}
</style>
