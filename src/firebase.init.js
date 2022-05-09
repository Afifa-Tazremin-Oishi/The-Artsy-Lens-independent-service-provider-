// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkfuAlH6MO6oXi1wMICu_lqWr7UFxa7Rg",
  authDomain: "the-artsy-lens-ed44e.firebaseapp.com",
  projectId: "the-artsy-lens-ed44e",
  storageBucket: "the-artsy-lens-ed44e.appspot.com",
  messagingSenderId: "52090432725",
  appId: "1:52090432725:web:200635ef0254e129a3465c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;