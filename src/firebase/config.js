import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyCFRHQYLpI0DoHI_iE1h_rEAlyLt8sxTvQ",
  authDomain: "motorx-firebase.firebaseapp.com",
  projectId: "motorx-firebase",
  storageBucket: "motorx-firebase.appspot.com",
  messagingSenderId: "763666453970",
  appId: "1:763666453970:web:03cfe48c27eb7146eb640b",
  measurementId: "G-3YJBKVC39L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
  try {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  } catch (error) {
    alert('internal error')
  }

}

/* const analytics = getAnalytics(app); */