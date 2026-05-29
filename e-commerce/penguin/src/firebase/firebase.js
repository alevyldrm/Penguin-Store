import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAYZRmXJYf4wvudPm_cpiM_isYRIHND1ag",
  authDomain: "penguin-ecommerce.firebaseapp.com",
  projectId: "penguin-ecommerce",
  storageBucket: "penguin-ecommerce.firebasestorage.app",
  messagingSenderId: "380379027251",
  appId: "1:380379027251:web:42da15be73b2cac47bd046"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);