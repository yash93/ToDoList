import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXLR6bIDMh_5C334ChCbaDzcmpSolPPkY",
    authDomain: "login-todo-list-122a0.firebaseapp.com",
    databaseURL: "https://login-todo-list-122a0-default-rtdb.firebaseio.com",
    projectId: "login-todo-list-122a0",
    storageBucket: "login-todo-list-122a0.appspot.com",
    messagingSenderId: "915802717108",
    appId: "1:915802717108:web:f776228e510f48259ad0e1"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;