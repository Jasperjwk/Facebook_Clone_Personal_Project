import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCwuRJGN3pAp-RmJ4dixWHSY09bAe-lVDo",
    authDomain: "facebook-clone-c8d31.firebaseapp.com",
    projectId: "facebook-clone-c8d31",
    storageBucket: "facebook-clone-c8d31.appspot.com",
    messagingSenderId: "634636591058",
    appId: "1:634636591058:web:fa24bb7faf546603e7f20b",
    measurementId: "G-FCQXEPZ0R2"
  };

  // Connect to our react front end to our fire base back end
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Access to database
  const db = firebaseApp.firestore();

  //Set up authentication
  const auth = firebase.auth();

  //We need to tell provider and get something called a provider 
  const provider = new firebase.auth.GoogleAuthProvider();

  // Explicit export which is auth and provider
  export {auth , provider};

  //Default export which is db that i will be using more often
  export default db;