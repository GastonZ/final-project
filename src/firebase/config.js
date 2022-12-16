
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyBnim0IuYrenP4CE8KIo4p9IjS9E_E36H0",
  authDomain: "motor-x-firebase.firebaseapp.com",
  projectId: "motor-x-firebase",
  storageBucket: "motor-x-firebase.appspot.com",
  messagingSenderId: "992937042089",
  appId: "1:992937042089:web:b82b8c6de5f7ed893d49b8",
  measurementId: "G-4RNLVB5B6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);

export function uploadProfileImage(file) {
    const storageRef = ref(storage, v4)
    uploadBytes(storageRef, file).then(snapshot => {
        console.log(snapshot);
    })
}