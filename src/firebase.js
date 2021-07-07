import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC02M3EXWtVG8RXJAmOuWJTVWk8ilYLhqg",
    authDomain: "ideator-4f754.firebaseapp.com",
    projectId: "ideator-4f754",
    storageBucket: "ideator-4f754.appspot.com",
    messagingSenderId: "659192949117",
    appId: "1:659192949117:web:583b0a392554692a164414",
    measurementId: "G-GRKLL11NWW"
};

console.log('initialize firebase app')
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const questionsRef = firestore.collection('questions');
export const editorsRef = firestore.collection('editors');
export const provider = new firebase.auth.GoogleAuthProvider();
export const userDoc = (uid) => { return firestore.doc('users/' + uid) };