import  Vue, { ComponentOptions } from 'vue'

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        meta?: object | (() => object)
    }
}

export interface ExtendedVueComponent extends ComponentOptions<Vue> {}
