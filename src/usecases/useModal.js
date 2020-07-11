import Gallery from '@/components/modals/media/Gallery'
import DailyEvent from '@/components/modals/events/DailyEvent'
import Audio from '@/components/modals/media/Audio'
import Video from '@/components/modals/media/Video'

export const useModal = (modal) => {
	const showGalleryModal = (props) => modal.show(Gallery, props)
	const showDailyEventModal = (props) => modal.show(DailyEvent, props)
	const showAudioModal = (props) => modal.show(Audio, props, { clickToClose: false })
	const showVideoModal = (props) => modal.show(Video, props, { clickToClose: false })
	return { showGalleryModal, showDailyEventModal, showAudioModal, showVideoModal }
}
