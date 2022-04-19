import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDwXayLI0y9Wd76rAxPoFd2MjIG4d55t7w",
  authDomain: "netflix-clone-98012.firebaseapp.com",
  databaseURL: "https://netflix-clone-98012-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-98012",
  storageBucket: "netflix-clone-98012.appspot.com",
  messagingSenderId: "779270312598",
  appId: "1:779270312598:web:758d56688eacdb43eee8b7",
  measurementId: "G-9CCB8BJS9X"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
