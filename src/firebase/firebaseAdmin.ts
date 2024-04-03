'use server'
import * as admin from "firebase-admin"

const serviceAccount = require('../../random-video-users-firebase-adminsdk-a15qx-d26cba14a1.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export default admin