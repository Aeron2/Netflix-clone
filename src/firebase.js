import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDzPi8-BGNYljXIr843CvTj6Z1nf-uShuw",
  authDomain: "netflix-clone-2c4e5.firebaseapp.com",
  projectId: "netflix-clone-2c4e5",
  storageBucket: "netflix-clone-2c4e5.appspot.com",
  messagingSenderId: "161059185258",
  appId: "1:161059185258:web:1ca29ff0dd8da572522013",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;