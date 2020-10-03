import Vue from 'vue'
import Default from '@app/router/layouts/Default.vue'
import Admin from '@app/router/layouts/Admin.vue'
import Modal from '@app/components/general/Modal.vue'
import RouteName from '@app/components/general/RouteName.vue'
import Loading from '@app/components/general/Loading.vue'
import AudioPlayer from '@app/components/general/AudioPlayer.vue'
import SideNavigation from '@app/components/general/SideNavigation.vue'
import Editor from '@app/components/general/Editor.vue'

Vue.component('Default', Default)
Vue.component('Admin', Admin)

Vue.component('ModalBase', Modal)
Vue.component('RouteName', RouteName)
Vue.component('Loading', Loading)
Vue.component('AudioPlayer', AudioPlayer)
Vue.component('SideNavigation', SideNavigation)
Vue.component('Editor', Editor)
