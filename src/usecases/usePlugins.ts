import { provide, inject } from '@vue/composition-api'
import router from '@/router/index'
import store from '@/store/index'
import { VueRouter } from 'vue-router/types/router'
import { Store } from 'vuex'

const storeKey = Symbol()
const routerKey = Symbol()

export const provideAllPlugins = () => {
	provide(storeKey, store)
	provide(routerKey, router)
}

export const useStore = () : Store<{}> | undefined => inject(storeKey)

export const useRouter = () : VueRouter | undefined => inject(routerKey)
