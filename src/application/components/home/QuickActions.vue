<template>
	<section class="p-3 p-md-5">
		<div class="container">
			<div class="row align-items-center">
				<div class="slide col-md-4">
					<div class="contain">
						<img src="@/application/assets/images/home/quick_1.svg" alt="" class="w-100">
						<div class="child">
							<h4>Upcoming</h4>
							<h3>Events</h3>
							<router-link class="mt-3" to="/events">
								<span class="content"><i class="fas fa-angle-right"></i></span>
								<span>view events</span>
							</router-link>
						</div>
					</div>
				</div>
				<div class="slide col-md-4">
					<div class="contain">
						<img src="@/application/assets/images/home/quick_2.svg" alt="" class="w-100">
						<div class="child">
							<h4>Service</h4>
							<h3>Times</h3>
							<router-link class="mt-3" to="/about-us/service-times">
								<span class="content"><i class="fas fa-angle-right"></i></span>
								<span>plan your visit</span>
							</router-link>
						</div>
					</div>
				</div>
				<div class="slide col-md-4">
					<div class="contain">
						<img src="@/application/assets/images/home/quick_3.svg" alt="" class="w-100">
						<div class="child">
							<h4>Prayer</h4>
							<h3>Requests</h3>
							<router-link class="mt-3" to="/forms/prayer-requests">
								<span class="content"><i class="fas fa-angle-right"></i></span>
								<span>submit request</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	section{
		background: $white;
	}
	@keyframes slideIn {
		from{ left: -1000px; opacity: 0; }
		to{ left: 0; opacity: 1; }
	}
	.slide{
		margin: 0 0 0.5rem ;
		.contain{
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 0;
			//padding: 2.8rem 2.25rem 2.25rem;
			.child{
				position: absolute;
				color: $white;
				z-index: 1;
				h4{
					font-size: 1.25rem;
					margin-bottom: 0;
				}
				h3{
					font-size: 2.5rem;
					margin-bottom: 1.25rem;
				}
				a {
					color: $white;
				}
			}
		}
	}
	.content{
		background: $red;
		color: $white;
		border-radius: 5rem;
		border: 2px solid $white;
		font-size: 1rem;
		width: 2rem;
		height: 2rem;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		margin-right: 0.25rem;
	}
</style>
