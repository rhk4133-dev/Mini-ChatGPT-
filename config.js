const firebaseConfig = {
  apiKey: "AIzaSyBND3n2ag9qGZG5SJPOKNVYr2dHNLwoD7Y",
  authDomain: "rhk-music-24bbc.firebaseapp.com",
  databaseURL: "https://rhk-music-24bbc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rhk-music-24bbc",
  storageBucket: "rhk-music-24bbc.firebasestorage.app",
  messagingSenderId: "571438674805",
  appId: "1:571438674805:web:bcfe7856316b638d08193c",
  measurementId: "G-RF4GEDGP9N"
};

const CLOUDINARY_CLOUD = "nhy9lfkt";
const CLOUDINARY_PRESET = "rhk_upload";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
