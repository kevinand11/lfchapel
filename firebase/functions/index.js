const admin = require('firebase-admin')
admin.initializeApp()

exports.createTestimony = require('./onCall/createTestimony')
exports.createPrayerRequest = require('./onCall/createPrayerRequest')
exports.createFeedback = require('./onCall/createFeedback')
exports.subscribeToMailingList = require('./onCall/subscribeToMailingList')
