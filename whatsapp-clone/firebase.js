import firebase from "firebase";

const firebaseConfig = {
  apiKey: "<api key>",
  authDomain: "<auth domain>",
  projectId: "<Project id>",
  storageBucket: "<Bucket Name>",
  messagingSenderId: "<Sender id>",
  appId: "<app id>",
  measurementId: "<measurement id>",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
