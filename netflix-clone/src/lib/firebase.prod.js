import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDFnoXB1Gk2VIqwdvswlcqLlyvRc6_BuLA',
  authDomain: 'netflix-clone-8647c.firebaseapp.com',
  projectId: 'netflix-clone-8647c',
  storageBucket: 'netflix-clone-8647c.appspot.com',
  messagingSenderId: '165444494917',
  appId: '1:165444494917:web:2726e7c021001408ede52c',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
