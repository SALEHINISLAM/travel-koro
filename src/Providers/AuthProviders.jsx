import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import  {app, db } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = async(email, password,name) => {
    setLoading(true);
    try{
      const userCredential=await createUserWithEmailAndPassword(auth, email,password);
      const user=userCredential.user;
      await updateProfile(user,{
        displayName: name,
      });
      await setDoc(doc(db,'users',user.uid),{
        name: name,
        email: email,
      });
      setUser(user);
      setLoading(false);
      return userCredential;
    }
    catch(error){
      setLoading(false);
      throw error;
    }
  };
  const signIn = async(email, password) => {
    setLoading(true);
    try{
      const userCredential=await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setLoading(false);
      return userCredential;
    }catch(err){
      setLoading(false);
      throw err;
    }
  };
  const signInWithGoogle=async()=>{
    setLoading(true);
    const googleProvider=new GoogleAuthProvider();
    try{
      const result=await signInWithPopup(auth,googleProvider);
      setUser(result.user);
      setLoading(false);
      return result.user;
    }
    catch(error){
      setLoading(false);
      throw error;
    }
    // const googleProvider=new GoogleAuthProvider();
    // signInWithPopup(auth, googleProvider)
    // .then(result=>{
    //     console.log(result.user);
    //     return result.user;
    // })
    // .catch(error=>{
    //     console.log(error.message);
    //     return;
    // })
  }
  const LogOut=async()=>{ 
    setLoading(true);
    try{
      await signOut(auth);
      setUser(null);
      setLoading(false);
    }
    catch(error){
      setLoading(false);
      throw error;
    }
    // signOut(auth)
    // .then(()=>{
    //     console.log('sign out success');
    // })
    // .catch(error=>{
    //     console.log('error ocurred',error); 
    // })
    // return;
  }
  useEffect(
    ()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log('user in auth changed');
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[auth])
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        LogOut
    }
  return <div>

<AuthContext.Provider value={authInfo}>
    {
        children
    }
</AuthContext.Provider>

  </div>;
};

AuthProviders.propTypes = {
  children:PropTypes.object,
};

export default AuthProviders;
