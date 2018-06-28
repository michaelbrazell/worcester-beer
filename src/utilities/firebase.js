import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDIRAEGHAHrXJhdDbgYU2HBY9zhztl13pM",
    authDomain: "worcester-beer-1529615617737.firebaseapp.com",
    databaseURL: "https://worcester-beer-1529615617737.firebaseio.com",
    projectId: "worcester-beer-1529615617737",
    storageBucket: "worcester-beer-1529615617737.appspot.com",
    messagingSenderId: "277148845634"
};
var fire = firebase.initializeApp(config);
export default firebase;