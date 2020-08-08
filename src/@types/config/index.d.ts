import Vue, { VueConstructor, AsyncComponent, ComponentOptions } from 'vue'
export declare interface VModal {
    show(name: string, params?: object): void
    show(
        component: typeof Vue | ComponentOptions<Vue> | AsyncComponent | VueConstructor,
        componentProps?: object,
        modalProps?: object,
        modalEvents?: object
    ): void
    hide(name: string, params?: object): void
    hideAll(): void
    toggle(name: string, params?: object): void
}