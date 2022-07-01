import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

// firestore

const userCollectionRef = collection(db, "user");
class userDataService {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  getUser = (id) => {
    const userDoc = doc(db, "user", id);
    return getDoc(userDoc);
  };
}

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
