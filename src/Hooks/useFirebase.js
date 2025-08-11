import { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import { auth } from '../components/Login/Firebase/Firebase.init'; 

const useFirebase = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
      setIsLogin(true);
    });
    return () => unsubscribe();
  }, []);

  
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };
 
  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError('Password should be minimum 6 characters, at least one letter and one number');
      return;
    }

    if (isLogin) {
      loginUser(mail, password);
    } else {
      registerUser(mail, password);
    }
  };

   
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        verifyUserMail();
        updateUserName();
        setError('');
      })
      .catch(error => setError(error.message));
  };

   
  const updateUserName = () => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: userName
      }).catch(error => setError(error.message));
    }
  };

   
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message));
  };

   
  const verifyUserMail = () => {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser)
        .then(() => setError('Verification email has been sent to your mail.'));
    }
  };

   
  const handleUserName = (e) => setUserName(e.target.value);
  const handleEmail = (e) => setMail(e.target.value);
  const handlePass = (e) => setPass(e.target.value);

 
  const handleConfirmPass = (e) => {
    const confirmPass = e.target.value;
    if (password === confirmPass) {
      setError('');
    } else {
      setError('Password is not matched');
    }
  };

   
  const toggleLogin = (value) => setIsLogin(value);

 
  const handlePasswordReset = () => {
    if (!mail) {
      setError('Please enter your email for password reset.');
      return;
    }
    sendPasswordResetEmail(auth, mail)
      .then(() => setError('Password reset email sent.'))
      .catch(error => setError(error.message));
  };

  return {
    userName,
     
    user,
    setUser,
    isLogin,
    logout,
    handleRegister,
    handlePasswordReset,
    handleUserName,
    handleEmail,
    handlePass,
    error,
    setError,
    loginUser,
    handleConfirmPass,
    toggleLogin,
    isLoading,
    setIsLoading,
    mail,
  };
};

export default useFirebase;
