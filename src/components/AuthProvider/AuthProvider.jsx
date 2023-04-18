import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase Config/firebase.config';

export const AuthContext = createContext(null);

const auth= getAuth(app);
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
      const [user, setUser]= useState(null)
      const [loading, setLoading]= useState(true)

      const register=(email,password)=>{
           
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password);
      }

      const logIn=(email,password)=>{
            setLoading(true)
         
            return signInWithEmailAndPassword(auth, email, password);
      }

      const logOut= ()=>{
            return signOut(auth)
      }

      const googleSignIn=()=>{
            return signInWithPopup(auth,googleProvider);
      }


      useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                  setUser(currentUser);
                  setLoading(false)
            })

            return ()=>{
                 return unsubscribe();
            }

      },[])
      const authinfo = {
            register,
            logIn,
            logOut,
            user,
            loading,
            googleSignIn
            
      }

      return (
            <>
                  <AuthContext.Provider value={authinfo}>
                        {children}

                  </AuthContext.Provider>
            </>
      );
};

export default AuthProvider;