import { useEffect, useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  FacebookAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const signInUsingFacebook = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const signInUsingGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
      setIsLoading(false);
      setIsLogin(true);
    });
    return () => unsubscribed();
  }, [auth]);

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

  const handleRegister = e => {
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
      loginRegisterUser(mail, password);
    } else {
      registerUser(mail, password);
    }
  };

  const registerUser = (email, pass) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then(result => {
        setUser(result.user);
        verifyUserMail();
        updateUserName();
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const updateUserName = () => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, { displayName: userName })
        .catch(error => setError(error.message));
    }
  };

  const loginRegisterUser = (email, pass) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const verifyUserMail = () => {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser)
        .then(() => setError('Verification mail has been sent to your email.'));
    }
  };

  const handleUserName = e => setUserName(e.target.value);
  const handleEmail = e => setMail(e.target.value);
  const handlePass = e => setPass(e.target.value);

  const handleConfirmPass = e => {
    const confirmPass = e.target.value;
    if (password !== confirmPass) {
      setError('Password is not matched');
    } else {
      setError('');
    }
  };

  const toggleLogin = (val) => setIsLogin(val);

  const handlePasswordReset = () => {
    if (!mail) {
      setError('Please enter your email first');
      return;
    }
    sendPasswordResetEmail(auth, mail)
      .then(() => setError('Password reset mail sent'))
      .catch(error => setError(error.message));
  };

  return {
    signInUsingGoogle,
    signInUsingFacebook,
    signInUsingGithub,
    user,
    setUser,
    isLogin,
    setIsLogin,
    logout,
    handleRegister,
    handlePasswordReset,
    handleUserName,
    handleEmail,
    handlePass,
    error,
    setError,
    loginRegisterUser,
    handleConfirmPass,
    toggleLogin,
    isLoading,
  };
};

export default useFirebase;
