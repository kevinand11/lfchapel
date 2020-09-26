import Gallery from '@/application/components/modals/media/Gallery.vue'
import DailyEvent from '@/application/components/modals/events/DailyEvent.vue'
import Video from '@/application/components/modals/media/Video.vue'
import { VModal } from '@/@types/config'
import { getCurrentInstance } from '@vue/composition-api'

export const useModal = () => {
	const modal: VModal = getCurrentInstance()!.$modal
	const showGalleryModal = (props: object) => modal.show(Gallery, props)
	const showDailyEventModal = (props: object) => modal.show(DailyEvent, props)
	const showVideoModal = (props: object) => modal.show(Video, props, { clickToClose: false })
	return { showGalleryModal, showDailyEventModal, showVideoModal }
}
