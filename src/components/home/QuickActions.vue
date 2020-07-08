<template>
	<div class="container mb-5">
		<div class="row">
			<div class="col-lg-3 col-sm-6">
				<h4>Upcoming</h4>
				<h3>Events</h3>
				<router-link class="mt-3" to="/events">
					<span class="content"><i class="fas fa-angle-right"></i></span>
					<span>see more</span>
				</router-link>
			</div>
			<div class="col-lg-3 col-sm-6">
				<h4>Service</h4>
				<h3>Times</h3>
				<router-link class="mt-3" to="/about-us/service-times">
					<span class="content"><i class="fas fa-angle-right"></i></span>
					<span>plan your visit</span>
				</router-link>
			</div>
			<div class="col-lg-3 col-sm-6">
				<h4>Donate</h4>
				<h3>Now</h3>
				<router-link class="mt-3" to="/give">
					<span class="content"><i class="fas fa-angle-right"></i></span>
					<span>make a donation</span>
				</router-link>
			</div>
			<div class="col-lg-3 col-sm-6">
				<h4>Prayer</h4>
				<h3>Requests</h3>
				<router-link class="mt-3" to="/online-forms/prayer-request">
					<span class="content"><i class="fas fa-angle-right"></i></span>
					<span>submit request</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "~@/assets/style/index.scss";
	.col-sm-6, .col-lg-3{
		color: $white;
		background: $red;
		border: 1px solid transparent;
		padding: 2.8rem 2.25rem 2.25rem;
		h4{
			font-size: 1.25rem;
			margin-bottom: 0;
		}
		h3{
			font-size: 2.5rem;
			margin-bottom: 1.25rem;
		}
		a{
			color: $white;
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
