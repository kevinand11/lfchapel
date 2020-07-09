<template>
	<div class="row justify-content-center">
		<div class="col-6 col-sm-4 hover d-flex flex-column">
			<i class="fas fa-map-marker-alt"></i>
			<h4>Address</h4>
			<div class="hidden">
				<p>321 Main Street, Suite 200 <br>Reisterstown Road, Maryland 21136</p>
			</div>
		</div>
		<div class="col-6 col-sm-4 hover d-flex flex-column">
			<i class="fas fa-phone"></i>
			<h4>Phone</h4>
			<div class="hidden">
				<p>443-273-3563</p>
			</div>
		</div>
		<div class="col-8 col-sm-4 hover d-flex flex-column">
			<i class="fas fa-envelope"></i>
			<h4>Email</h4>
			<div class="hidden">
				<p class="mb-0">info@lfchapel.com</p>
				<p class="mb-0">pastor@lfchapel.com</p>
				<p class="mb-0">lauretta@lfchapel.com</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.hover{
		padding: 1rem;
		text-align: center;
		i{
			font-size: 2rem;
			color: $red;
		}
		h4{
			color: $red;
			margin: 1rem 0;
			font-size: 1.125rem;
		}
		.hidden{
			display: none;
		}
	}
	.hover:hover {
		border: 2px solid $red;
		border-radius: 8px;
		i{ font-size: 4rem; }
		.hidden{ display: block; }
	}
	@media (min-width: 768px){
		.hover i { font-size: 4rem; }
		.hover h4 { margin: 2rem 0; }
		.hover:hover i{ font-size: 6rem; }
	}
</style>
