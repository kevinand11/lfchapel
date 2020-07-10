import Photo from '@/data/entities/photos'

const photosRaw = [
	{ id: 1, link: '/img/mock/articles/article (1).jpg'},
	{ id: 2, link: '/img/mock/articles/article (2).jpg' },
	{ id: 3, link: '/img/mock/articles/article (3).jpg' },
	{ id: 4, link: '/img/mock/articles/article (4).jpg' },
	{ id: 5, link: '/img/mock/articles/article (5).jpg' },
	{ id: 6, link: '/img/mock/articles/article (6).jpg' },
]

const photos = photosRaw.map((photo) => new Photo(photo.id, photo))

export default class PhotoRepository {
	static async getPhotos(){
		return photos
	}
}
