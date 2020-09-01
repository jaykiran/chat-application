import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyC0_lvTd7IZt9YXSH6W2h7lj7_K099_ETM",
    authDomain: "react-slack-clone-6d341.firebaseapp.com",
    databaseURL: "https://react-slack-clone-6d341.firebaseio.com",
    projectId: "react-slack-clone-6d341",
    storageBucket: "react-slack-clone-6d341.appspot.com",
    messagingSenderId: "604557612682",
    appId: "1:604557612682:web:272a29e9821bbe4bdcbf73"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;