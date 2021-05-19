import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABtyl1tu0lZLaS3uh1UwHTkpcdXksgFps",
    authDomain: "challenge-72221.firebaseapp.com",
    projectId: "challenge-72221",
    storageBucket: "challenge-72221.appspot.com",
    messagingSenderId: "889761441747",
    appId: "1:889761441747:web:c263c6dd14aef7cca43126",
    measurementId: "G-NKTYCNEM9G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };