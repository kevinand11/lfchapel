import { provide, inject } from '@vue/composition-api'
import router from '@/router/index'
import store from '@/store/index'

const storeKey = 'store-key'
const routerKey = 'router-key'

export const provideAllPlugins = () => {
	provide(storeKey, store)
	provide(routerKey, router)
}

export const useStore = () => inject(storeKey)

export const useRouter = () => inject(routerKey)
