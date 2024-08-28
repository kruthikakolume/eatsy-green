import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-DIArL_oqJS-4i_bJq04DBE_7JgcaoTo",
    authDomain: "eatsy-green.firebaseapp.com",
    projectId: "eatsy-green",
    storageBucket: "eatsy-green.appspot.com",
    messagingSenderId: "851265077053",
    appId: "1:851265077053:web:f04ed437f4805d4b54cf54",
    measurementId: "G-GSV7GXN37X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = {
    EatsyGreen: 'EatsyGreen',

    formatedDoc: doc => {
        return { id: doc.id, ...doc.data() }
    },
    getCurrentTimeStamp: serverTimestamp,
}