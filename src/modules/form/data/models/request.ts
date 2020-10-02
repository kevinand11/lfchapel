import firebase from 'firebase'

export interface RequestFromModel {
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

export interface RequestToModel {
	name: string
	email: string
	message: string
	public: boolean
	attendedTo: boolean
}
