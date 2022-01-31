import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLGyEhgrpajjgb5Xx9ZuOSgWDB27OW4o8",
    authDomain: "view-auth-be66a.firebaseapp.com",
    projectId: "view-auth-be66a",
    storageBucket: "view-auth-be66a.appspot.com",
    messagingSenderId: "282289465890",
    appId: "1:282289465890:web:daefcee7d798bc6833b87b",
    measurementId: "G-J0MJ25E9GY"
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });