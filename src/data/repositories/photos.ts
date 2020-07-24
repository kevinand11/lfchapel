import Photo from '@/data/entities/photos'

const photosRaw: Media[] = [
	{ id: 1, link: '/mock/photos/photo (1).jpg', title: null, description: null },
	{ id: 2, link: '/mock/photos/photo (2).jpg', title: null, description: null },
	{ id: 3, link: '/mock/photos/photo (3).jpg', title: null, description: null },
	{ id: 4, link: '/mock/photos/photo (4).jpg', title: null, description: null },
	{ id: 5, link: '/mock/photos/photo (5).jpg', title: null, description: null },
	{ id: 6, link: '/mock/photos/photo (6).jpg', title: null, description: null },
]

const photos: Photo[] = photosRaw.map((photo) => new Photo(photo))

export default class PhotoRepository {
	static async getPhotos(): Promise<Photo[]>{
		return photos
	}
}
