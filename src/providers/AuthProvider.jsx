import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase/firebase.config";
// Create a new context for the authentication state
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
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

  // Combine the state variables and functions into a single object
  const authInfo = {
    user,
    createUser,
    signIn,
  };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;