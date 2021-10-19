import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile, 
    sendPasswordResetEmail, 
    sendEmailVerification,
    signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../pages/Login/Firebase/firebase.init";

//call the initialize auth
initializeAuth();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //google login
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            }).catch(error=> {
                console.log(error.message);
            })
            .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return unsubscribed;
    },[]);

    //create new User registration
    const handleUserRegistration = (email,password,userName, userImg) => {
        setIsLoading(true);
        createUserWithEmailAndPassword (auth, email, password)
            .then(result => {
                // console.log(result.user);
                handleUserInfo(userName, userImg);
                emailVerification();
                setUser(result.user);
            }).catch(error=> {
                console.log(error.message);
            }).finally(() => setIsLoading(false))
    };

    //login with email password method
    const handleUserLogin = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            }).catch(error=> {
                console.log(error.message);
            }).finally(() => setIsLoading(false))
    }

    //update user info
    const handleUserInfo = (userName) => {
        updateProfile(auth.currentUser, {displayName: userName})
            .then(()=>{

            }).catch(error=> {
                console.log(error.message);
            })
    }

    //password reset link 
    const handlePasswordReset = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(()=> {
                alert('sent email for reset password');
            }).catch(error=>{
                console.log(error.message);
            }) ; 
    }

    //verify email
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(()=>{
                alert('Send email for verification');
            }).catch(error=>{
                console.log(error.message);
            });
    }

    //signout method
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(()=> {
            setUser({});
        }).catch(error=> {
            console.log(error.message);
        }).finally(()=>setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        handleUserRegistration,
        handleUserLogin,
        handlePasswordReset,
        logOut
    }
}

export default useFirebase;