import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj_cPgQHtW4LUgLvCyo6TFZAOkgj4B3nY",
  authDomain: "whatsapp-clone-78952.firebaseapp.com",
  projectId: "whatsapp-clone-78952",
  storageBucket: "whatsapp-clone-78952.appspot.com",
  messagingSenderId: "1034559684714",
  appId: "1:1034559684714:web:14eb700411ca9db0b08a13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider };
export default db;