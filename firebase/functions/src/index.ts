import * as admin from 'firebase-admin'
admin.initializeApp()

// Auth Triggers
import { authUserCreated } from './auth/onCreate'
import { authUserDeleted } from './auth/onDelete'
export { authUserCreated, authUserDeleted }

//On call
import { createContactMessage } from './onCall/createContactMessage'
import { createFeedback } from './onCall/createFeedback'
import { createTestimony } from './onCall/createTestimony'
import { createPrayerRequest } from './onCall/createPrayerRequest'
import { subscribeToMailingList } from './onCall/subscribeToMailingList'
export {
	createContactMessage, createFeedback, createTestimony,
	createPrayerRequest, subscribeToMailingList
}
