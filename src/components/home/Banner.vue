<template>
	<div class="banner d-flex align-items-center flex-column-reverse flex-md-row">
		<div class="p-4 banner-content container">
			<h1 class="display-4">Welcome to our church in corona exile</h1>
			<p class="lead">We have moved to web sermons this period. Join us in growing the church in new ways. Stay tuned here for news from us.</p>
			<hr class="my-4">
			<router-link class="btn btn-primary btn-lg" to="/media/audio-sermons" role="button">See sermons</router-link>
		</div>
		<img src="@/assets/images/home/slide-1.jpg" alt="" class="d-md-none w-100">
	</div>
</template>

<style lang="scss" scoped>
	.display-4{
		font-size: 2.0rem;
	}
	.lead{
		font-size: 1.0rem;
	}
	@media (min-width: $md){
		.banner{
			background: url("../../assets/images/home/slide-2.jpg") right;
			min-height: 500px;
			color: $white;
			.banner-content{
				padding: 4rem;
				width: 80%;
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
