const admin = require('firebase-admin')
admin.initializeApp()

exports.createContactMessage = require('./onCall/createContactMessage')
exports.createTestimony = require('./onCall/createTestimony')
exports.createPrayerRequest = require('./onCall/createPrayerRequest')
exports.createFeedback = require('./onCall/createFeedback')
exports.subscribeToMailingList = require('./onCall/subscribeToMailingList')
