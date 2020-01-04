import Rebase from "re-base";
import firebase from "firebase";

//this is the firebase application (the database) we created in firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnmJB9NgLEWHtc1sZXLTmm4EEz-RFGlAY",
  authDomain: "catch-of-the-day-au.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-au.firebaseio.com",
  projectId: "catch-of-the-day-au",
  storageBucket: "catch-of-the-day-au.appspot.com",
  messagingSenderId: "913119599322",
  appId: "1:913119599322:web:ac0e35fb16b7f7aed223e3",
  measurementId: "G-KKP7F7WY6X"
});

//with this the database is binded to react
const base = Rebase.createClass(firebaseApp.database());

//end we export this with a named export (only this function is exported with it):
export { firebaseApp };

//end the default export to allow it to bring it into an other file:
export default base;
