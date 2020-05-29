import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQQjCnKGRn-zsruIvLoa8kVNd62ZkBfrI",
  authDomain: "riquisimo-a99cc.firebaseapp.com",
  databaseURL: "https://riquisimo-a99cc.firebaseio.com",
  projectId: "riquisimo-a99cc",
  storageBucket: "riquisimo-a99cc.appspot.com",
  messagingSenderId: "440742034649",
  appId: "1:440742034649:web:be27a85cdf201d622bd2c8",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
