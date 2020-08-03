const functions = require('firebase-functions')
const admin = require('firebase-admin')

module.exports = functions.https.onCall(async (data) => {
	const request = {
		name: data.request.name,
		email: data.request.email,
		message: data.request.message,
		public: data.request.public,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('requests').add(request)
})
