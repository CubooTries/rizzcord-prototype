import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC5NopSGNdNbK4kDWmNdZ6sfTfCzLz4X3I",
  authDomain: "chat-room-e243a.firebaseapp.com",
  databaseURL: "https://chat-room-e243a-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
