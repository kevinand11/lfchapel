import firebase from 'firebase'

export interface MessageFromModel {
	id: string
	name: string
	email: string
	subject: string
	message: string
	attendedTo: boolean
	dates: {
		createdAt: firebase.firestore.Timestamp
	}
}

export interface MessageToModel {
	name: string
	email: string
	subject: string
	message: string
	attendedTo: boolean
}
