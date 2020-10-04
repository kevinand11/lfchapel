import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const authUserCreated = functions.auth.user().onCreate(async (user) => {
	const data: any = {
		bio: { email: user.email, image: {}, name: '' },
		roles: { isAdmin: false },
		dates:{ registeredAt: admin.firestore.FieldValue.serverTimestamp() }
	}

	if(user.displayName) data.bio.name = user.displayName
	if(user.photoURL) data.bio.image.link = user.photoURL

	await admin.firestore().collection('users').doc(user.uid)
		.set(data, { merge: true })
})
