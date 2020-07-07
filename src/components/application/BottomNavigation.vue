<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4 my-3">
				<h1>LFChapel</h1>
			</div>
			<div class="col-md-4 d-flex align-items-center my-3">
				<span class="icon mr-2">
					<i class="fa fa-map-marker-alt"></i>
				</span>
				<span class="info">321 Main Street, Suite 200<br>Reisterstown Road, Maryland 21136</span>
			</div>
			<div class="col-md-4 d-flex align-items-center my-3">
				<span class="icon mr-2">
					<i class="fa fa-map-marker-alt"></i>
				</span>
				<div class="info">
					<div class="email"><a href="mailto:info@lfchapel.com">info@lfchapel.com</a></div>
					<div class="phone"><a href="tel:443-273-3563">443-273-3563</a></div><div class="email"><a href="mailto:pastor@lfchapel.com">pastor@lfchapel.com</a></div>
					<div class="email"><a href="mailto:Lauretta@lfchapel.com">Lauretta@lfchapel.com</a></div>
				</div>
			</div>
		</div>
		<hr class="bordered my-5">
		<div class="row links">
			<div class="col-md-3 col-6">
				<h4>MAIN LINKS</h4>
				<ul class="list-group">
					<li class="list-group-item">
						<router-link to="/">Home</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/about-us/our-church">Our Church</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/media">Media</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/give">Give</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/serve">Serve</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/contact-us">Contact Us</router-link>
					</li>
				</ul>
			</div>
			<div class="col-md-3 col-6">
				<h4>WHO WE ARE</h4>
				<ul class="list-group">
					<li class="list-group-item">
						<router-link to="/about-us/mission-and-vision">Mission and Vision</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/about-us/service-times">Service Times</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/announcement">Announcement</router-link>
					</li>
					<li class="list-group-item">
						<router-link to="/online-forms/prayer-requests">Mission and Vision</router-link>
					</li>
				</ul>
			</div>
			<div class="col-md-3 col-6">
				<h4>FOLLOW US</h4>
				<ul class="list-group">
					<li class="list-group-item d-flex">
						<span class="socials mr-2">
							<i class="fab fa-twitter"></i>
						</span>
						<a href="https://www.twitter.com/">Twitter</a>
					</li>
					<li class="list-group-item d-flex">
						<span class="socials mr-2">
							<i class="fab fa-facebook-f"></i>
						</span>
						<a href="https://www.facebook.com/">Facebook</a>
					</li>
					<li class="list-group-item d-flex">
						<span class="socials mr-2">
							<i class="fab fa-google-plus-g"></i>
						</span>
						<a href="https://www.plus.google.com/">Google &plus;</a>
					</li>
					<li class="list-group-item d-flex">
						<span class="socials mr-2">
							<i class="fab fa-youtube"></i>
						</span>
						<a href="https://www.youtube.com/">Youtube</a>
					</li>
				</ul>
			</div>
			<div class="col-md-3 col-6">
				<h4>NEWSLETTER</h4>
				<form>
					<ul class="list-group">
						<li class="list-group-item">
							<input type="email" class="form-control" placeholder="Enter email">
						</li>
						<li class="list-group-item">
							<button class="btn-outline-primary bg-light px-4 py-2" type="submit">Submit</button>
						</li>
					</ul>
				</form>
			</div>
		</div>
		<hr class="my-3">
		<div class="d-flex justify-content-center">
			<p>
				<span class="copyright">&copy; Copyright 2017 Living Faith Chapel. </span>
				<span>All Right Reserved</span>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "~@/assets/style/index.scss";
	span.icon{
		background: $red;
		color: $white;
		border-radius: 5rem;
		font-size: 1.5rem;
		width: 4rem;
		height: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
	}
	.info{
		font-weight: bold;
		a{
			color: $black !important;
		}
	}
	.bordered{
		border-bottom: 3px dashed $red !important;
	}
	.links{
		div{
			margin-bottom: 2rem;
		}
		h4{
			font-size: 1.25rem;
			font-weight: bold;
			margin-bottom: 1rem;
		}
		.list-group-item{
			border: none;
			padding: 0.5rem 0;
			a{
				color: $black;
			}
		}
		span.socials{
			background: $red;
			color: $white;
			border-radius: 5rem;
			font-size: 1rem;
			width: 1.75rem;
			height: 1.75rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
		}
	}
	.copyright{
		color: $red;
		font-weight: bolder;
	}
</style>
