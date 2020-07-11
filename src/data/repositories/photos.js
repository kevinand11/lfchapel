import Photo from '@/data/entities/photos'

const photosRaw = [
	{ id: 1, link: '/mock/photos/photo (1).jpg'},
	{ id: 2, link: '/mock/photos/photo (2).jpg' },
	{ id: 3, link: '/mock/photos/photo (3).jpg' },
	{ id: 4, link: '/mock/photos/photo (4).jpg' },
	{ id: 5, link: '/mock/photos/photo (5).jpg' },
	{ id: 6, link: '/mock/photos/photo (6).jpg' },
]

const photos = photosRaw.map((photo) => new Photo(photo.id, photo))

export default class PhotoRepository {
	static async getPhotos(){
		return photos
	}
}
