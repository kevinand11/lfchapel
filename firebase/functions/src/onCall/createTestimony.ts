import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const createTestimony = functions.https.onCall(async ({ testimony }) => {
	const data = {
		name: testimony.name,
		email: testimony.email,
		message: testimony.message,
		public: testimony.public,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('testimonies').add(data)
})
