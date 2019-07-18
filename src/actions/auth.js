import { firebase } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (values) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(() => {
      alert("Incorrect email and/or password!")
    });
  };
};

export const startSignup = (values) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(() => {
      alert("Email already exists!")
    });
  }
}

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}