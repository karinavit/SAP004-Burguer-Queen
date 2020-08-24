import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDuphqz4dewO2Kg34iASXAA3CHRztQoF8g",
  authDomain: "mandalanchos-3e943.firebaseapp.com",
  databaseURL: "https://mandalanchos-3e943.firebaseio.com",
  projectId: "mandalanchos-3e943",
  storageBucket: "mandalanchos-3e943.appspot.com",
  messagingSenderId: "402641111014",
  appId: "1:402641111014:web:ece4195baacdae23447827"
};

firebase.initializeApp(firebaseConfig);

export default firebase;