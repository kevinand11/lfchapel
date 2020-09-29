import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const createContactMessage = functions.https.onCall(async ({ message }) => {
	const data = {
		name: message.name,
		email: message.email,
		subject: message.subject,
		message: message.message,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('contact-messages').add(data)
})
