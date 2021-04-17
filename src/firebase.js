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
    const docs = await db.collection("products").get()
    console.log("DOCS:", docs.size)

    // https://googleapis.dev/nodejs/firestore/latest/QuerySnapshot.html
    // instead of returning the products as documents with separate ids and data
    // let's create a single object with both the id and the data
    // to make them easier to process and loop through later
    var products = []
    docs.forEach((doc) => {
        //console.log("DOC ID:", doc.id, "DATA", doc.data())
        var product = doc.data() // create a new object with the product info
        product["id"] = doc.id // merge the id with the object
        products.push(product)
    })
    //console.log("PRODUCTS:", products.length)
    return products
}

export async function orderProduct(user, product) {
    //console.log("ORDERING PRODUCT")
    //console.log("USER:", user.uid, user.email)
    //console.log("PRODUCT:", product.id, product.name, product.price)

    //var newOrder = {
    //    "productId": product.id,
    //    "userUid": user.uid,
    //    "orderAt": Date.now().toFixed()
    //} // consider saving the entire user and product info (more convenient, but less efficient from a storage standpoint)

    var newOrder = {
        "userUid": user.uid,
        "userEmail": user.email,
        "productId": product.id,
        "productName": product.name,
        "productPrice": product.price,
        "orderAt": Date.now().toFixed()
    }
    console.log("NEW ORDER", newOrder)

    // https://firebase.google.com/docs/database/admin/save-data
    // https://googleapis.dev/nodejs/firestore/latest/CollectionReference.html

    var ordersRef = db.collection("orders")
    //console.log("ORDERS COLLECTION", ordersRef)

    await ordersRef.add(newOrder)

    return newOrder
}
