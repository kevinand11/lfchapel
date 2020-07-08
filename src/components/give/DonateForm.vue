<template>
	<form @submit.prevent="() => {}">
		<div class="form-group">
			<select class="form-control">
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
			<label for="amount">Enter Contribution Amount</label>
			<input type="number" id="amount" class="form-control">
		</div>
	</form>
</template>
