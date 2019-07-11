 import firebase from 'firebase/app'
 import 'firebase/auth'
 import 'firebase/firestore'


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAKlKERfQ2pxfS6deE5Rbg9ytGohlJJyQU",
    authDomain: "reactproject-6a831.firebaseapp.com",
    databaseURL: "https://reactproject-6a831.firebaseio.com",
    projectId: "reactproject-6a831",
    storageBucket: "",
    messagingSenderId: "271952437721",
    appId: "1:271952437721:web:da3682eea8f4d41a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;
