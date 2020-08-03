const functions = require('firebase-functions')
const admin = require('firebase-admin')

module.exports.subscribeToMailchimpList = functions.https.onCall( async (data) => {
	const email = data.email
	const user = await admin.firestore().collection('subscribers').add({ email })
	return user.id
})
