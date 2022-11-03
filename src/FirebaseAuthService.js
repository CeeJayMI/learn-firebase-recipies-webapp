import firebase from "./FirebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signOut,
	sendPasswordResetEmail,
	signInWithPopup,
	onAuthStateChanged
} from 'firebase/auth';


const auth = firebase.auth;

const registerUser = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
}

const logoutUser = () => {
	return signOut(auth);
}

const loginWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	return signInWithPopup(auth, provider);
}

const subscribeToAuthChanges = (handleAuthChanges) => {
	onAuthStateChanged(auth, (user) => {
		handleAuthChanges(user);
	})
}

const FirebaseAuthService = {
	registerUser,
	loginUser,
	logoutUser,
	sendPasswordResetEmail: (email) => {
		return sendPasswordResetEmail(auth, email)
	},
	loginWithGoogle,
	subscribeToAuthChanges
}

export default FirebaseAuthService;