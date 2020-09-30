<template>
	<div>
		<div class="banner d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row">
			<div class="banner-content container text-center">
				<h1 class="display-4">WELCOME TO OUR <br>CHURCH</h1>
				<p class="lead">
					Connecting Men to God and people to purpose, while exercising their Faith
				</p>
				<hr class="my-4">
				<router-link class="btn btn-danger btn-lg text-white" to="/about-us/our-church" role="button">About Our Church</router-link>
			</div>
			<div id="slide" class="carousel slide carousel-fade" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#slide" data-slide-to="0" class="d-none d-sm-inline active"></li>
					<li data-target="#slide" data-slide-to="1" class="d-none d-sm-inline"></li>
					<li data-target="#slide" data-slide-to="2" class="d-none d-sm-inline"></li>
					<li data-target="#slide" data-slide-to="3" class="d-none d-sm-inline"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active" data-ride="2000">
						<img src="@app/assets/images/home/slide-1.png" class="d-block w-100" alt="">
					</div>
					<div class="carousel-item" data-ride="2000">
						<img src="@app/assets/images/home/slide-2.png" class="d-block w-100" alt="">
					</div>
					<div class="carousel-item" data-ride="2000">
						<img src="@app/assets/images/home/slide-5.png" class="d-block w-100" alt="">
					</div>
					<div class="carousel-item" data-ride="2000">
						<img src="@app/assets/images/home/slide-4.png" class="d-block w-100" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.curve{
		display: none;
		width: 100%;
		margin-top: -0.25rem;
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
				max-width: 50%;
				padding: 4rem 1rem;
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
