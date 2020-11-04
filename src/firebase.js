import firebase from 'firebase/app';
import 'firebase/auth';
require('dotenv').config()
// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_TO
// })

const app = firebase.initializeApp({
    apiKey: "AIzaSyCY3c8l797FdRvAErDkN0UAPo6JqhlAcIw",
    authDomain: "auth-development-5fdb9.firebaseapp.com",
    databaseURL: "https://auth-development-5fdb9.firebaseio.com",
    projectId: "auth-development-5fdb9",
    storageBucket: "auth-development-5fdb9.appspot.com",
    messagingSenderId: "1063996804223",
    appId: "1:1063996804223:web:76929168e794f130c5c34a"
})
export const auth = app.auth();
export default app