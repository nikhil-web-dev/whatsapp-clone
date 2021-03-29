import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG8X_p5OdHjU9rxpXP1F5oqRzv0lm8wPs",
  authDomain: "whatsapp-clone-c0713.firebaseapp.com",
  projectId: "whatsapp-clone-c0713",
  storageBucket: "whatsapp-clone-c0713.appspot.com",
  messagingSenderId: "236424908575",
  appId: "1:236424908575:web:f98c61dff549a2ad816a2a",
  measurementId: "G-910D4HWWMJ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
