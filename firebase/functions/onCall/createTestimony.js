const functions = require('firebase-functions')
const admin = require('firebase-admin')

module.exports = functions.https.onCall(async (data) => {
	const testimony = {
		name: data.testimony.name,
		email: data.testimony.email,
		message: data.testimony.message,
		public: data.testimony.public,
		created: admin.firestore.FieldValue.serverTimestamp()
	}
	await admin.firestore().collection('testimonies').add(testimony)
})
