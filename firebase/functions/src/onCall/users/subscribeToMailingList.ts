import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const subscribeToMailingList = functions.https.onCall( async ({ email }) => {
	const user = await admin.firestore().collection('subscribers').add({ email })
	return user.id
})
