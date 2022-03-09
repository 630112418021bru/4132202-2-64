importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDADa4ghEDwimr-gDIZ3nTPZk8mq0ZqjFY",
  authDomain: "fcm-react-e8e13.firebaseapp.com",
  projectId: "fcm-react-e8e13",
  storageBucket: "fcm-react-e8e13.appspot.com",
  messagingSenderId: "363960071437",
  appId: "1:363960071437:web:f0630ae2d39cf96cdbac44",
  measurementId: "G-4V9HN3KEY3"
});

firebase.messaging();