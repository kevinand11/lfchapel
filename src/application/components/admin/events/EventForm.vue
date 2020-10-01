<template>
	<ModalBase>
		<template slot="header">
			<slot name="title"><h4>Title</h4></slot>
		</template>
		<form class="mx-2" @submit.prevent="submit">
			<template>
				<div class="form-group my-3">
					<input class="form-control" placeholder="Title" v-model="factory.title"
					       :class="{'is-invalid': factory.errors.title, 'is-valid': factory.isValid('title')}">
					<span class="small" v-if="factory.errors.title">{{ factory.errors.title }}</span>
				</div>
				<div class="form-group my-3">
					<textarea class="form-control" placeholder="Description" v-model="factory.description"
					          :class="{'is-invalid': factory.errors.description, 'is-valid': factory.isValid('description')}">
					</textarea>
					<span class="small" v-if="factory.errors.description">{{ factory.errors.description }}</span>
				</div>
				<hr>
				<h5>Dates</h5>
				<div class="grid">
					<div class="form-group my-3">
						<h6>Start</h6>
						<DatetimePicker v-model="factory.startStr" placeholder="Select start date"
			                :dayStr="['Su','Mo','Tu','We','Th','Fr','Sa']" :timeStr="['Hr','Min','Sec']"
			                timeType="minute" btnStr="Select"
						/>
						<span class="small text-danger" v-if="factory.errors.start">{{ factory.errors.start }}</span>
					</div>
					<div class="form-group my-3">
						<h6>End</h6>
						<DatetimePicker v-model="factory.endStr" placeholder="Select end date"
			                :dayStr="['Su','Mo','Tu','We','Th','Fr','Sa']" :timeStr="['Hr','Min','Sec']"
			                timeType="minute" btnStr="Select" :min="factory.startStr"
						/>
						<span class="small text-danger" v-if="factory.errors.end">{{ factory.errors.end }}</span>
					</div>
				</div>
				<hr>
				<div class="d-flex justify-content-end my-3">
					<button class="btn btn-gold text-white" type="submit" :disabled="loading || !factory.valid">
						<i class="fas fa-spinner fa-spin mr-2" v-if="loading"></i>
						<span><slot name="buttonText">Submit</slot></span>
					</button>
				</div>
			</template>
		</form>
	</ModalBase>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { EventFactory } from '@modules/events/domain/factories/event'
import { DatetimePicker } from '@livelybone/vue-datepicker'
export default defineComponent({
	name: 'EventForm',
	props: {
		factory: {
			type: EventFactory,
			required: true
		},
		loading: {
			type: Boolean,
			required: true
		},
		submit: {
			type: Function,
			required: true
		}
	},
	components: {
		DatetimePicker
	}
})
</script>

<style lang="scss" scoped>
@import '~@livelybone/vue-datepicker/lib/css/index.css';
.datetime-picker{ cursor: pointer; }
.grid{
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 1rem;
}
@media (min-width: 480px) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
