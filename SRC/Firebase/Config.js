// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAPPm1AboLayK_e6zEsi1F60Di0vbEkes",
  authDomain: "clitter-d325a.firebaseapp.com",
  projectId: "clitter-d325a",
  storageBucket: "clitter-d325a.appspot.com",
  messagingSenderId: "1033179331011",
  appId: "1:1033179331011:web:7e6e361510232e08e56576",
  measurementId: "G-8W6368CLER",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
