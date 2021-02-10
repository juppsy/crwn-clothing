import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC-p9UeLzCDHdB6SrsF4MzovsjOIgSbEzY',
	authDomain: 'crwn-clothing-9e9b6.firebaseapp.com',
	projectId: 'crwn-clothing-9e9b6',
	storageBucket: 'crwn-clothing-9e9b6.appspot.com',
	messagingSenderId: '278259777683',
	appId: '1:278259777683:web:8494d478245adde59f0d66',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
