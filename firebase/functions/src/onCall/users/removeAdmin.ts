import * as functions from 'firebase-functions'
import * as admin from'firebase-admin'

export const removeAdmin = functions.https.onCall(async ({ id }, context) => {
	if (!context.auth) {
		throw new functions.https.HttpsError('unauthenticated', 'Only authenticated users can manage user accounts')
	}
	if (!context.auth?.token.isAdmin) {
		throw new functions.https.HttpsError('failed-precondition', 'Only admins can manage user accounts')
	}
	if (context.auth?.uid === id) {
		throw new functions.https.HttpsError('failed-precondition', 'You cannot change your own role')
	}
	try{
		await admin.auth().setCustomUserClaims(id, { isAdmin: false })

		await admin
			.firestore()
			.collection('users')
			.doc(id)
			.set({
				roles: { isAdmin: false }
			}, { merge: true })
		return true
	}catch(error){
		throw new functions.https.HttpsError('unknown', error.message)
	}
})
