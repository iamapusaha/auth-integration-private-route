import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [lodder, setLodder] = useState(true)

    const createUser = (email, password) => {
        setLodder(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        setLodder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLodder(true)
        return signOut(auth)
    }
    const authinfo = { user, createUser, signInUser, logOut, lodder }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLodder(false)
            console.log(' from useEffect', currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );

};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;