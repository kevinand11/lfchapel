const functions = require('firebase-functions')
const admin = require('firebase-admin')

module.exports = functions.https.onCall(async (data) => {
	const message = {
		name: data.message.name,
		email: data.message.email,
		subject: data.message.subject,
		message: data.message.message,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('contact-messages').add(message)
})
