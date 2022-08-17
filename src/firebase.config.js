import {getApp,getApps,initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCQHip5whbcjHdh44PrelWSttfeCtiggJA",
    authDomain: "restaurantapp-aab9f.firebaseapp.com",
    databaseURL: "https://restaurantapp-aab9f-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-aab9f",
    storageBucket: "restaurantapp-aab9f.appspot.com",
    messagingSenderId: "61163628172",
    appId: "1:61163628172:web:5ab02a8813f508f506fda9",
  };
const app=getApps.length >0 ?getApp() :initializeApp(firebaseConfig)

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };