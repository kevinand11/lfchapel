const functions = require('firebase-functions')
const admin = require('firebase-admin')

module.exports = functions.https.onCall(async (data) => {
	const feedback = {
		name: data.feedback.name,
		email: data.feedback.email,
		message: data.feedback.message,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('feedbacks').add(feedback)
})
