import Gallery from '@/components/modals/media/Gallery'
import DailyEvent from '@/components/modals/events/DailyEvent'

export const useModal = (modal) => {
	const showGalleryModal = (props) => modal.show(Gallery, props)
	const showDailyEventModal = (props) => modal.show(DailyEvent, props)
	return { showGalleryModal, showDailyEventModal }
}
