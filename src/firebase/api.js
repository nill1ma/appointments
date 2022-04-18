import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import config from "./config";

const firebaseApp = firebase.initializeApp(config);
// const db = firebaseApp.fireStore();
const googleSignIn = async () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	let result = await firebase.auth().signInWithPopup(provider);
	return result;
};
export { googleSignIn };
