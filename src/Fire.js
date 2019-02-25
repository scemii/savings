import firebase from "firebase";

const DB_CONFIG = {
  apiKey: "AIzaSyBEqwJbPOz8WO1kbYpp38ts-YNdW3ixkZU",
  authDomain: "savings-d44ee.firebaseapp.com",
  databaseURL: "https://savings-d44ee.firebaseio.com",
  projectId: "savings-d44ee",
  storageBucket: "savings-d44ee.appspot.com",
  messagingSenderId: "779200930232"
};

const fire = firebase.initializeApp(DB_CONFIG);
export default fire;
