import { useEffect, useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
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
import { auth } from '../components/Login/Firebase/Firebase.init'; // استيراد auth من ملف التهيئة

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
  const [isLoading, setIsLoading] = useState(true);

  // Google sign-in مع تتبع أخطاء مفصل
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => {
        console.error("Google SignIn Error:", error.code, error.message, error.customData);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Facebook sign-in
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

  // GitHub sign-in
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

  // مراقبة حالة المصادقة (تغيير حالة المستخدم)
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

  // تسجيل الخروج
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

  // التعامل مع التسجيل أو تسجيل الدخول (من فورم)
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

  // تسجيل مستخدم جديد
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

  // تحديث اسم المستخدم المعروض
  const updateUserName = () => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: userName
      }).catch(error => setError(error.message));
    }
  };

  // تسجيل الدخول لمستخدم موجود
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => setError(error.message));
  };

  // إرسال رسالة تحقق بالبريد الإلكتروني
  const verifyUserMail = () => {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser)
        .then(() => setError('Verification email has been sent to your mail.'));
    }
  };

  // تحديث قيم الإدخال في الفورم
  const handleUserName = (e) => setUserName(e.target.value);
  const handleEmail = (e) => setMail(e.target.value);
  const handlePass = (e) => setPass(e.target.value);

  // التحقق من تطابق كلمة المرور
  const handleConfirmPass = (e) => {
    const confirmPass = e.target.value;
    if (password === confirmPass) {
      setError('');
    } else {
      setError('Password is not matched');
    }
  };

  // تبديل بين تسجيل الدخول والتسجيل
  const toggleLogin = (value) => setIsLogin(value);

  // إعادة تعيين كلمة المرور
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
    signInUsingGoogle,
    signInUsingFacebook,
    signInUsingGithub,
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
