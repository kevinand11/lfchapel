import { provide, inject } from '@vue/composition-api'
import router from '@/router/index'
import store from '@/store/index'

const storeKey = 'store-key'
const routerKey = 'router-key'

export const provideStore = () => provide(storeKey, store)

export const useStore = () => inject(storeKey)

export const provideRouter = () => provide(routerKey, router)

export const useRouter = () => inject(routerKey)
