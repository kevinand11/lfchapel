<template>
	<form @submit.prevent="() => {}" class="mt-5">
		<div class="form-group">
			<select class="form-control">
				<option value="Select a reason to donate" selected disabled>Select a reason to donate</option>
				<option value="Tithe Contribution">Tithe Contribution</option>
				<option value="Special Offering">Special Offering</option>
				<option value="Jewels Dues">Jewels Dues</option>
				<option value="DTC">DTC</option>
				<option value="Offering Contribution">Offering Contribution</option>
				<option value="Building Fund Contribution">Building Fund Contribution</option>
				<option value="JHB Hope Foundation Contribution">JHB Hope Foundation Contribution</option>
				<option value="Mission Contribution">Mission Contribution</option>
				<option value="Thanksgiving Contribution">Thanksgiving Contribution</option>
			</select>
		</div>
		<div class="form-group">
			<label for="amount">Enter Contribution Amount &dollar;</label>
			<input type="number" id="amount" class="form-control" placeholder="10.00">
		</div>
		<button class="btn btn-outline-gold" type="submit">Submit</button>
	</form>
</template>
