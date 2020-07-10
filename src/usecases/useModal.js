import GalleryPhotoModal from '@/components/modals/media/Gallery'

export const useModalInstance = (modal) => {
	const showGalleryModal = (props) => modal.show(GalleryPhotoModal, props, {
		width: '90%', minWidth: 600, maxWidth: 900,
		height: 'auto',
		clickToClose: true, adaptive: false, scrollable: true,
		focusTrap: true
	})
	return { showGalleryModal }
}
