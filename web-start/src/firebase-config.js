/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCA9eL5vzwTk8wPDAO1gsm1I4fNJo-Kk9Q",
  authDomain: "friendlychat-a1ff2.firebaseapp.com",
  projectId: "friendlychat-a1ff2",
  storageBucket: "friendlychat-a1ff2.appspot.com",
  messagingSenderId: "884161894519",
  appId: "1:884161894519:web:fe9831b9e936f2e5d0ce72",
  measurementId: "G-ZPW8HRRMPM"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}