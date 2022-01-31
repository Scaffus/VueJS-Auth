import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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
// const db = getFiretore(app);

// const auth = getAuth(app);

// function registerUser(email, password) {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             return user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             return errorCode, errorMessage;
//             // ..
//         });
// }

// function loginUser(email, password) {
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             return user
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             return errorCode, errorMessage
//         });
// }



// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         return uid
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });

// export default {loginUser, registerUser}