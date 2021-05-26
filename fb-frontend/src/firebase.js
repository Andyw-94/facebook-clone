import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPgl5TYT53I3FKQdBTPbGwAnh9lRXdv5E",
  authDomain: "fb-mern-f91b9.firebaseapp.com",
  projectId: "fb-mern-f91b9",
  storageBucket: "fb-mern-f91b9.appspot.com",
  messagingSenderId: "280419999506",
  appId: "1:280419999506:web:5d43b8d7c57535dfe7ddcb",
  measurementId: "G-HJREZ7D6PS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
