import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/config.firebase";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const profilePhoto = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => console.log("user profile updated"))
      .catch((error) => {
        console.log(error);
      });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // get and set token
      if (currentUser) {
        axios
          .post("https://mini-motors-server-robiul1hossen.vercel.app//jwt", { email: currentUser.email })
          .then((data) => {
            // console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { user, loading, createUser, loginUser, logOut, profilePhoto, handleGoogle, handleGithub };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
