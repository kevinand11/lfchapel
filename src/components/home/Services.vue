<template>
	<div class="container py-5">
		<div>
			<hr class="bordered">
			<h2 class="text-center my-4">Living Faith Chapel</h2>
			<hr class="bordered">
		</div>
		<div class="d-flex flex-md-row flex-column text-white flex-grow-1">
			<div class="mb-3 service mr-2 p-3" id="service1">
				<h4 class="mb-1">Join us</h4>
				<p class="font-weight-bold">Service Times</p>
				<p>Sundays @ 10AM <br>Wednesday @ 7PM</p>
			</div>
			<div class="mb-3 service p-3" id="service2">
				<h4 class="mb-1">Our Pastor</h4>
				<p class="font-weight-bold">Gbenga Obatuase</p>
				<p>The life of Pastor Gbenga Obatuase is a fulfillment of the scriptures in Zechariah 4: 10 which declare, “despise not the days of small beginnings”.</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.service{
		min-width: calc(50% - 4px);
		min-height: 250px;
		background-size: cover !important;
		&#service1{
			background: url('../../assets/images/home/service-1.png');
		}
		&#service2{
			background: url('../../assets/images/home/service-2.png');
		}
	}
	h2{
		font-size: 1.4rem;
		font-weight: 400;
		margin-bottom: 2.25rem;
	}
	@media (min-width: 576px){
		h2{
			font-size: 1.5rem;
			margin-bottom: 2.5rem;
		}
	}
	@media (min-width: 768px){
		h2{
			font-size: 2.0rem;
			margin-bottom: 2.75rem;
			font-weight: 300;
		}
	}
	@media (min-width: 992px){
		h2{
			font-size: 2.5rem;
			margin-bottom: 3.0rem;
		}
	}
</style>
