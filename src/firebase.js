// see: https://firebase.google.com/docs/web/setup

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

//
// FIREBASE AUTH APP CONFIG
//
// https://firebase.google.com/docs/web/setup
// https://firebase.google.com/docs/reference/js/firebase
// https://firebase.google.com/docs/reference/js/firebase.auth

const app = firebase.initializeApp(firebaseConfig)

export default app

//
// FIRESTORE DATABASE CONFIG
//
// https://firebase.google.com/docs/reference/js/firebase
// https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore
// https://firebase.google.com/docs/firestore/quickstart

const db = firebase.firestore(app)

export async function fetchProducts() {
    console.log("FETCHING PRODUCTS...")

    // https://googleapis.dev/nodejs/firestore/latest/CollectionReference.html#get
    // https://googleapis.dev/nodejs/firestore/latest/QuerySnapshot.html
    const docs = await db.collection("products").get()
    console.log("DOCS:", docs.size)

    var products = [] // Array.from(docs)
    docs.forEach((doc) => {
        console.log("DOC ID:", doc.id, "DATA", doc.data())
        var product = doc.data()
        product["id"] = doc.id
        products.push(product)
    })
    console.log("PRODUCTS:", products.length)
    return products
}
