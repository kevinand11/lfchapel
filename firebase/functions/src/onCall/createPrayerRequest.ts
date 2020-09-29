import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const createPrayerRequest = functions.https.onCall(async ({ request }) => {
	const data = {
		name: request.name,
		email: request.email,
		message: request.message,
		public: request.public,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('requests').add(data)
})
