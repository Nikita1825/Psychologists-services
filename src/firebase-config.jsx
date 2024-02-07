import { getDatabase,ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBSK_WCyiowNHxy1XxZR6oKyePwuRBsxjU",
    authDomain: "psychologists-services.firebaseapp.com",
    projectId: "psychologists-services",
    storageBucket: "psychologists-services.appspot.com",
    messagingSenderId: "244648336906",
    appId: "1:244648336906:web:120bade0d078e1655cc9f3"
  }

  export const app = initializeApp(firebaseConfig);
export const database = ref(getDatabase(app));
export const auth = getAuth(app);
 