//every time a new document gets created in the users collection
//modify the document to add timestamp to document (not override)
import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";

export const setTimeStamp = functions.firestore //exporting Firebase Cloud Function setTimeStamp
  .document('users/{docId}') //selects any document in users
  .onCreate(async (snapshot) => { //anytime a document is created
    const documentRef = snapshot.ref; //refer to the snapshot of the document
    await documentRef.set({timeCreated:firestore.Timestamp.now()},{merge:true}); //create time stamp of current date/time and add it to the document
});