// Import React and necessary hooks/components
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'
import { ClipLoader } from "react-spinners";

// Define a private route component that checks for authentication
const PrivateRoute = ({children}) => {
    // Get the user and loading status from the authentication context
    const {user, loading} = useContext(AuthContext);

    // Get the current location using the React Router hook
    const location = useLocation();

// If the authentication status is still loading, show a spinner
    if(loading){
        return <div className="absolute inset-0 flex justify-center items-center h-screen z-50">
        <ClipLoader color="#36d7b7" />
      </div>
    }

   // If the user is authenticated, render the children components
    if(user){
        return children
    }
    // If the user is not authenticated, redirect to the login page and pass the current location as a state parameter
    return <Navigate state={{from: location}} to= '/login' replace></Navigate>
};

export default PrivateRoute;