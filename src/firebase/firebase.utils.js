import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCYeokZcGPi299WiZSLME9VtXRisE7mcrs",
  authDomain: "e-commerce-a69ab.firebaseapp.com",
  projectId: "e-commerce-a69ab",
  storageBucket: "e-commerce-a69ab.appspot.com",
  messagingSenderId: "1012793882156",
  appId: "1:1012793882156:web:1166836b28b00627b7c389",
  measurementId: "G-8T9WDH3YKG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
