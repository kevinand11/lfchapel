<template>
	<form @submit.prevent="() => {}">
		<h3 class="mb-4 red">Leave us a message</h3>
		<div class="form-group">
			<label for="name">Your Name</label>
			<input type="text" id="name" class="form-control" placeholder="Eg. John Doe">
		</div>
		<div class="form-group">
			<label for="email">Your Email</label>
			<input type="email" id="email" class="form-control" placeholder="Eg. johndoe@gmail.com">
		</div>
		<div class="form-group">
			<label for="subject">Subject</label>
			<input type="text" id="subject" class="form-control" placeholder="Eg. Book an appointment">
		</div>
		<div class="form-group">
			<label for="message">Your Message</label>
			<textarea id="message" rows="6" class="form-control" placeholder="Eg I want to book a private session with the pastor on Friday at 12 noon"></textarea>
		</div>
		<button class="btn btn-outline-primary">Submit</button>
	</form>
</template>
