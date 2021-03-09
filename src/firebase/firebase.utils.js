import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDS-w2-Xap-EfA6P-zbBNHPBzjDcMb_Ld0",
    authDomain: "crwn-db-194c7.firebaseapp.com",
    projectId: "crwn-db-194c7",
    storageBucket: "crwn-db-194c7.appspot.com",
    messagingSenderId: "1023447251586",
    appId: "1:1023447251586:web:c80d85292a20e265b0d29b",
    measurementId: "G-TPHCDN61BM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select-account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;