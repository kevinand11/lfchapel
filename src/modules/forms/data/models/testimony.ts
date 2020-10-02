import firebase from 'firebase'

export interface TestimonyFromModel {
	id: string
	name: string
	email: string
	message: string
	public: boolean
	attendedTo: boolean
	dates: {
		createdAt: firebase.firestore.Timestamp
	}
}

export interface TestimonyToModel {
	name: string
	email: string
	message: string
	public: boolean
	attendedTo: boolean
}
