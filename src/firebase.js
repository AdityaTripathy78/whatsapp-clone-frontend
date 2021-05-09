import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYNsVs4Gd-c-EwY-M0yX9krJLzn5WEFEg",
    authDomain: "whatsapp-mern-de00b.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-de00b.web.app/",
    projectId: "whatsapp-mern-de00b",
    storageBucket: "whatsapp-mern-de00b.appspot.com",
    messagingSenderId: "937078409713",
    appId: "1:937078409713:web:26e33c906b13603813dc50"
  };

const initializeApp = firebase.initializeApp(firebaseConfig);
const db = initializeApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default { db, auth, storage };

