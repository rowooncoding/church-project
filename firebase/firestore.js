import firebase from './firebasedb';
import { getFirestore } from 'firebase/firestore';

const fireStore = getFirestore(firebase);
export default fireStore;