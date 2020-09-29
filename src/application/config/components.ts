import Vue from 'vue'
import Default from '@/application/layouts/Default.vue'
import Admin from '@/application/layouts/Admin.vue'
import RouteName from '@/application/components/application/RouteName.vue'
import Loading from '@/application/components/application/Loading.vue'
import AudioPlayer from '@/application/components/application/AudioPlayer.vue'

Vue.component('Default', Default)
Vue.component('Admin', Admin)

Vue.component('RouteName', RouteName)
Vue.component('Loading', Loading)
Vue.component('AudioPlayer', AudioPlayer)
