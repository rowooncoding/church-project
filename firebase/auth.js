import firebaseApp from './firebaseApp'
import { getAuth } from 'firebase/auth'

const auth = getAuth( firebase );

export default auth;

