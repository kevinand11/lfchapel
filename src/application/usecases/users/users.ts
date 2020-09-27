import { computed, reactive } from '@vue/composition-api'
import { GetMailingListFactory, SubscribeToMailingList } from '@/modules/users'
import { notify } from '@/config/notify'

export const useMailingList = () => {
	const state = reactive({
		loading: false,
		factory: GetMailingListFactory.call()
	})

	const subscribeToMailingList = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				await SubscribeToMailingList.call(state.factory)
				state.factory.reset()
				state.loading = false
				await notify({ icon: 'success', title: 'Subscribed successfully' })
			}catch(error){ await notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else state.factory.validateAll()
	}

	return {
		loading: computed(() => state.loading),
		factory: computed(() => state.factory),
		subscribeToMailingList
	}
}
