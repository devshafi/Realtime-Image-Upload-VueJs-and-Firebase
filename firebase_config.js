// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADhqSa4TzbgXCq-Jlw0ang-VMAwqUA6lI",
    authDomain: "image-server-65bbd.firebaseapp.com",
    databaseURL: "https://image-server-65bbd.firebaseio.com",
    projectId: "image-server-65bbd",
    storageBucket: "image-server-65bbd.appspot.com",
    messagingSenderId: "815465575804",
    appId: "1:815465575804:web:d3a68c03a1703a470fe0f9",
    measurementId: "G-28HPQ7FZBF"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const storage = firebase.storage();