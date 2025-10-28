
javascript
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDsDB8jt6lrrKOA487YDA3ksmGUFd7wExE",
  authDomain: "doctinova-97d7d.firebaseapp.com",
  projectId: "doctinova-97d7d",
  messagingSenderId: "327373809245",
  appId: "1:327373809245:web:f0958c1bbd5c5c32d34fb4"
});

const messaging = firebase.messaging();
