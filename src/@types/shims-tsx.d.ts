import Vue, { VNode } from 'vue'

interface VueI extends Vue {}
interface VNodeI extends VNode {}

declare global {
  namespace JSX {
    interface Element extends VNodeI {}
    interface ElementClass extends VueI {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
