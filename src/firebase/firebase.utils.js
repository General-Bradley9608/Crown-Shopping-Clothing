import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAhpwX7WNhR3tsQy8zG9L4kAvYqHhmNogI',
  authDomain: 'crwn-db-57ebc.firebaseapp.com',
  databaseURL: 'https://crwn-db-57ebc.firebaseio.com',
  projectId: 'crwn-db-57ebc',
  storageBucket: 'crwn-db-57ebc.appspot.com',
  messagingSenderId: '1054309994460',
  appId: '1:1054309994460:web:971bff80eb79e844a8c919',
  measurementId: 'G-P3HR79ZBL8',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
