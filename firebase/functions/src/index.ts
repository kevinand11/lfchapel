import * as admin from 'firebase-admin'
admin.initializeApp()

// Auth Triggers
import { authUserCreated } from './auth/onCreate'
import { authUserDeleted } from './auth/onDelete'
export { authUserCreated, authUserDeleted }


//On call
import { makeAdmin } from './onCall/users/makeAdmin'
import { removeAdmin } from './onCall/users/removeAdmin'
import { subscribeToMailingList } from './onCall/users/subscribeToMailingList'
export { makeAdmin, removeAdmin, subscribeToMailingList }


// Request Triggers
import { requestMakeAdmin } from './requests/makeAdmin'
export { requestMakeAdmin }
