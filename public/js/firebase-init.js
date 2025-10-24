// public/js/firebase-init.js
var firebaseConfig = {
  apiKey: "AIzaSyAqc4aPdhxE71BBndKoqZzljXxmvTg7Jn8",
  authDomain: "studenttimetracker-bc2e1.firebaseapp.com",
  projectId: "studenttimetracker-bc2e1",
  storageBucket: "studenttimetracker-bc2e1.firebasestorage.app",
  messagingSenderId: "784603815038",
  appId: "1:784603815038:web:caaacdac4c3a52c75c8c2f",
  measurementId: "G-K7YPBCX09D"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

