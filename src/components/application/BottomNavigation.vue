<template>
	<footer>
		<div class="container pt-5">
			<hr class="bordered mb-4">
			<div class="row align-items-center">
				<div class="col-md-4 my-3">
					<h1>LFChapel</h1>
				</div>
				<div class="col-md-4 d-flex align-items-center my-3">
				<span class="icon mr-2">
					<i class="fa fa-map-marker-alt"></i>
				</span>
					<span class="info">{{ address }}</span>
				</div>
				<div class="col-md-4 d-flex align-items-center my-3">
				<span class="icon mr-2">
					<i class="fa fa-envelope"></i>
				</span>
					<div class="info">
						<div class="phone"><a :href="`tel:${phone}`">{{ phone }}</a></div>
						<div class="email"><a :href="`mailto:${email_1}`">{{ email_1 }}</a></div>
						<div class="email"><a :href="`mailto:${email_2}`">{{ email_2 }}</a></div>
						<div class="email"><a :href="`mailto:${email_3}`">{{ email_3 }}</a></div>
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
							<router-link to="/media/photo-gallery">Media</router-link>
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
							<router-link to="/articles">Blog</router-link>
						</li>
						<li class="list-group-item">
							<router-link to="/forms/prayer-requests">Prayer Requests</router-link>
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
								<i class="fab fa-youtube"></i>
							</span>
							<a href="https://www.youtube.com/">Youtube</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-6">
					<h4>NEWSLETTER</h4>
					<form @submit.prevent="() => {}">
						<ul class="list-group">
							<li class="list-group-item">
								<input type="email" class="form-control" placeholder="Enter email">
							</li>
							<li class="list-group-item">
								<button class="btn btn-outline-light" type="submit">Submit</button>
							</li>
						</ul>
					</form>
				</div>
			</div>
			<hr class="my-3">
			<div class="d-flex justify-content-center">
				<p>
					<span class="font-weight-bolder">&copy; Copyright {{ new Date().getFullYear() }} Living Faith Chapel. </span>
					<span>All Right Reserved</span>
				</p>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	footer{
		background: $red;
		color: $white;
	}
	span.icon{
		background: $main-red;
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
			color: $white;
		}
	}
	.links{
		background: $red;
		color: $white;
		div{
			margin-bottom: 2rem;
		}
		h4{
			font-size: 1.25rem;
			font-weight: bold;
			margin-bottom: 1rem;
		}
		.list-group-item{
			background: $red;
			border: none;
			padding: 0.5rem 0;
			a{
				color: $white;
			}
		}
		span.socials{
			//background: $white;
			//color: $red;
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
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	setup(){
	    return {
	        address: process.env.VUE_APP_CHURCH_ADDRESS,
		    email_1: process.env.VUE_APP_CHURCH_EMAIL_1,
		    email_2: process.env.VUE_APP_CHURCH_EMAIL_2,
		    email_3: process.env.VUE_APP_CHURCH_EMAIL_3,
		    phone: process.env.VUE_APP_CHURCH_PHONE,
	    }
	}
})
</script>
