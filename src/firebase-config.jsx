import { getDatabase,ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBCeS_XYInrZkAV4gtKQ9cbM6oPuS5-fyc",
  authDomain: "psychologists-services-607b5.firebaseapp.com",
  projectId: "psychologists-services-607b5",
  storageBucket: "psychologists-services-607b5.appspot.com",
  messagingSenderId: "978722823419",
  appId: "1:978722823419:web:8c9736d2d2d16dbc41245e"
};

export const app = initializeApp(firebaseConfig);
export const database = ref(getDatabase(app));
export const auth = getAuth(app);
 