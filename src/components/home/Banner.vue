<template>
	<div class="p-0">
		<img src="@/assets/images/top.svg" alt="" class="curve">
		<div class="banner d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row">
			<div class="banner-content container text-center">
				<h1 class="display-4">WELCOME TO OUR <br>CHURCH</h1>
				<p class="lead">
					Connecting Men to God and people to purpose, while exercising their Faith
				</p>
				<hr class="my-4">
				<router-link class="btn btn-danger btn-lg text-white" to="/about-us/our-church" role="button">About Our Church</router-link>
			</div>
			<div>
				<img src="@/assets/images/home/banner.png" alt="" class="w-100">
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.curve{
		display: none;
		width: 120vw;
		margin-top: -0.25rem;
		margin-left: -0.25rem;
	}
	@media (min-width: 300px){
		.curve{
			display: block;
		}
	}
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
