import React from 'react'
import usersCollection, { db } from './firebase'
import { collection, addDoc, DocumentReference } from "firebase/firestore";

const docRef = async () => {
    console.log('inuuf')
    try {
        const doc = await addDoc(collection(db, "Users"), {
            username: "mangeshjj",
            password: "uinc",
            uniqueId: "415267",
            fcmToken: "74kjcuaj3zasdfgalbhfadc2154adf",
            profilePic: ""
        });
        console.log("Document written with ID in async: ", doc.id);
    } catch (e) {
        console.log(e);
    }
}



export default docRef;