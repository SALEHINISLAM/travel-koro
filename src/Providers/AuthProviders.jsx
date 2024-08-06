import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle=()=>{
    const googleProvider=new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        console.log(result.user);
        return;
    })
    .catch(error=>{
        console.log(error.message);
        return;
    })
  }
  const signOut=()=>{
    signOut(auth)
    .then(()=>{
        console.log('sign out success');
        
    })
    .catch(error=>{
        console.log('error ocurred',error);
        
    })
  }
  useEffect(
    ()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user in auth changed');
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>unSubscribe();
    },[auth])
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signOut
    }
  return <div>

<AuthContext.Provider value={authInfo}>
    {
        children
    }
</AuthContext.Provider>

  </div>;
};

AuthProviders.propTypes = {};

export default AuthProviders;
