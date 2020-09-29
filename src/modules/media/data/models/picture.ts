import firebase from 'firebase'
import { Media } from '@modules/core/data/models/base'

export interface PictureFromModel {
	id: string
	title: string
	description: string
	image: Media
	userId: string
	dates: {
		createdAt: firebase.firestore.Timestamp
	}
}

export interface PictureToModel {
	title: string
	description: string
	image: Media
	userId: string
}
