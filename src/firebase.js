import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import "firebase/compat/auth"




const firebaseConfig = {
  apiKey: "AIzaSyAoZfgSiOBaVf9uA4VYMVBgPr8VkGdVJ3I",
  authDomain: "infoeat-bdc23.firebaseapp.com",
  projectId: "infoeat-bdc23",
  storageBucket: "infoeat-bdc23.appspot.com",
  messagingSenderId: "907882855299",
  appId: "1:907882855299:web:68b6e8bc43bbe75ebc54b6"
};



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth =firebase.auth();



export {auth}

  export default db
