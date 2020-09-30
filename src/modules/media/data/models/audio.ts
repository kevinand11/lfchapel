import firebase from 'firebase'
import { Media } from '@modules/core/data/models/base'

export interface AudioFromModel {
	id: string
	title: string
	description: string
	audio: Media
	userId: string
	dates: {
		createdAt: firebase.firestore.Timestamp
	}
}

export interface AudioToModel {
	title: string
	description: string
	audio: Media
	userId: string
}
