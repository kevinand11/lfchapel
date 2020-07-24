import Gallery from '@/components/modals/media/Gallery.vue'
import DailyEvent from '@/components/modals/events/DailyEvent.vue'
import Video from '@/components/modals/media/Video.vue'
import { VModal } from '@/@types/config'

export const useModal = (modal: VModal) => {
	const showGalleryModal = (props: object) => modal.show(Gallery, props)
	const showDailyEventModal = (props: object) => modal.show(DailyEvent, props)
	const showVideoModal = (props: object) => modal.show(Video, props, { clickToClose: false })
	return { showGalleryModal, showDailyEventModal, showVideoModal }
}
