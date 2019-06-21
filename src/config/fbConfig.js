  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC4ntjVnPfnxSY_GrT1dGOMUMHa78mE_Fs",
    authDomain: "marioplan-ced80.firebaseapp.com",
    databaseURL: "https://marioplan-ced80.firebaseio.com",
    projectId: "marioplan-ced80",
    storageBucket: "",
    messagingSenderId: "1061508313178",
    appId: "1:1061508313178:web:df16d2a0e8f807b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;