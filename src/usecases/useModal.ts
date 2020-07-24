import Gallery from '@/components/modals/media/Gallery.vue'
import DailyEvent from '@/components/modals/events/DailyEvent.vue'
import Video from '@/components/modals/media/Video.vue'
import { PropType } from 'vue'

export const useModal = (modal: VModal) => {
	const showGalleryModal = (props: PropType<{}>) => modal.show(Gallery, props)
	const showDailyEventModal = (props: PropType<{}>) => modal.show(DailyEvent, props)
	const showVideoModal = (props: PropType<{}>) => modal.show(Video, props, { clickToClose: false })
	return { showGalleryModal, showDailyEventModal, showVideoModal }
}
