
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_api_Key,
  authDomain: import.meta.env.VITE_auth_Domain,
  projectId: import.meta.env.VITE_project_Id,
  storageBucket: import.meta.env.VITE_storage_Bucket,
  messagingSenderId: import.meta.env.VITE_messaging_Sender_Id,
  appId: import.meta.env.VITE_app_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;