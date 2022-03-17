import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAusVefSFH7pEqWLclTEDyEYFSlpMrzubk",
  authDomain: "zacharyc.site",
  databaseURL: "https://zacharycsite-default-rtdb.firebaseio.com",
  projectId: "zacharycsite",
  storageBucket: "zacharycsite.appspot.com",
  messagingSenderId: "18418783539",
  appId: "1:18418783539:web:904df4549700d037dc9a46",
  measurementId: "G-7TQEN9M9FK"
};
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);