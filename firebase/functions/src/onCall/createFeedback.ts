import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const createFeedback = functions.https.onCall(async ({ feedback }) => {
	const data = {
		name: feedback.name,
		email: feedback.email,
		message: feedback.message,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('feedbacks').add(data)
})
