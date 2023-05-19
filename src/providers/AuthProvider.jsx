import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser} from 'firebase/auth'
import app from "../firebase/firebase.config";
// Create a new context for the authentication state
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  // Initialize state variables
  const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
     // Functions for creating a new user account, signing in, and logging out
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      
    );
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateInfo = (displayName, photoURL) => {
    setLoading(true);
    return updateCurrentUser(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  // Use an effect to update the user state when the authentication state changes
  useEffect(() => {
    // Create a listener for changes to the authentication state
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("loggedin user:", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  // Combine the state variables and functions into a single object
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateInfo
  };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;