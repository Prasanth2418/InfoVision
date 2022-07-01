import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeFFeaA1QPTypA1PCChwaT5dEe-eLfBYE",
  authDomain: "loginforinfoeat.firebaseapp.com",
  projectId: "loginforinfoeat",
  storageBucket: "loginforinfoeat.appspot.com",
  messagingSenderId: "460789709313",
  appId: "1:460789709313:web:9ff32296383c5bf2ac5e00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);
// export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.doc(`user/${user.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { Email } = user;
    const { Password } = user;
    const { FirstName } = user;
    const { LastName } = user;
    const { EmployeeID } = user;
    const { displayName } = additionalData;

    try {
      userRef.set(
        Email,
        Password,
        FirstName,
        LastName,
        EmployeeID,
        displayName
      );
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};
