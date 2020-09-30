import firebase from 'firebase'
import { Media } from '@modules/core/data/models/base'

export interface VideoFromModel {
	id: string
	title: string
	description: string
	preview: Media
	video: Media
	userId: string
	dates: {
		createdAt: firebase.firestore.Timestamp
	}
}

export interface VideoToModel {
	title: string
	description: string
	preview: Media
	video: Media
	userId: string
}
