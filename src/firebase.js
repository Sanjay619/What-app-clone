import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBjk1PVrGanhzccC3kbMQJ-Vz3xdyiGCNo",
    authDomain: "whats-app-clone-4ee92.firebaseapp.com",
    databaseURL: "https://whats-app-clone-4ee92.firebaseio.com",
    projectId: "whats-app-clone-4ee92",
    storageBucket: "whats-app-clone-4ee92.appspot.com",
    messagingSenderId: "609748386683",
    appId: "1:609748386683:web:fcd97815e9316eab2ef3de",
    measurementId: "G-X0D9JQPL15"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GithubAuthProvider();
  export{auth , provider};
  export default db;