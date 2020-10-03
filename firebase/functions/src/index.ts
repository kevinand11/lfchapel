import * as admin from 'firebase-admin'
admin.initializeApp()

// Auth Triggers
import { authUserCreated } from './auth/onCreate'
import { authUserDeleted } from './auth/onDelete'
export { authUserCreated, authUserDeleted }


//On call
import { createContactMessage } from './onCall/createContactMessage'
import { createFeedback } from './onCall/createFeedback'
import { subscribeToMailingList } from './onCall/subscribeToMailingList'
export { createContactMessage, createFeedback, subscribeToMailingList }

import { makeAdmin } from './onCall/users/makeAdmin'
import { removeAdmin } from './onCall/users/removeAdmin'
export { makeAdmin, removeAdmin }


// Request Triggers
import { requestMakeAdmin } from './requests/makeAdmin'
export { requestMakeAdmin }
