import Gallery from '@app/components/modals/media/Gallery.vue'
import DailyEvent from '@app/components/modals/events/DailyEvent.vue'
import Video from '@app/components/modals/media/Video.vue'
import { VModal } from '@/@types/config'
import { getCurrentInstance } from '@vue/composition-api'

export const useModal = () => {
	const modal: VModal = getCurrentInstance()!.$modal
	const showGalleryModal = () => modal.show(Gallery)
	const showDailyEventModal = (props: object) => modal.show(DailyEvent, props)
	const showVideoModal = (props: object) => modal.show(Video, props, { clickToClose: false })
	return { showGalleryModal, showDailyEventModal, showVideoModal }
}
