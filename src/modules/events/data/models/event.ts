import firebase from 'firebase'

export interface EventFromModel {
	id: string
	title: string
	description: string
	start: firebase.firestore.Timestamp
	end: firebase.firestore.Timestamp
	userId: string
	dates: {
		createdAt: firebase.firestore.Timestamp
	}
}

export interface EventToModel {
	title: string
	description: string
	start: firebase.firestore.Timestamp
	end: firebase.firestore.Timestamp
	userId: string
}
