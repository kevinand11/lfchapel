import GalleryPhotoModal from '@/components/modals/media/Gallery'

export const useModalInstance = (modal) => {
	const showGalleryModal = (props) => modal.show(GalleryPhotoModal, props)
	return { showGalleryModal }
}
