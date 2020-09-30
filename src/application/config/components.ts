import Vue from 'vue'
import Default from '@app/layouts/Default.vue'
import Admin from '@app/layouts/Admin.vue'
import Modal from '@app/components/application/Modal.vue'
import RouteName from '@app/components/application/RouteName.vue'
import Loading from '@app/components/application/Loading.vue'
import AudioPlayer from '@app/components/application/AudioPlayer.vue'
import SideNavigation from '@app/components/application/SideNavigation.vue'
import Editor from '@app/components/application/Editor.vue'

Vue.component('Default', Default)
Vue.component('Admin', Admin)

Vue.component('ModalBase', Modal)
Vue.component('RouteName', RouteName)
Vue.component('Loading', Loading)
Vue.component('AudioPlayer', AudioPlayer)
Vue.component('SideNavigation', SideNavigation)
Vue.component('Editor', Editor)
