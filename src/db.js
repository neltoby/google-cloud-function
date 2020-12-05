const Firestore = require('@google-cloud/firestore')

const PROJECTID = 'bossbusserverless'
const COLLECTION_NAME = 'users'
const firestore = new Firestore({
    projectId: PROJECTID,
    timestampsInSnapshots: true,
})
const db = firestore.collection(COLLECTION_NAME)

module.exports = {
    db
}