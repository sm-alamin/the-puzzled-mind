import { createContext, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from "../firebase/firebase.config";
// Create a new context for the authentication state
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
     // Functions for creating a new user account, signing in, and logging out
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      
    );
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }
  // Combine the state variables and functions into a single object
  const authInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
  };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;