
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,set,ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBk3_gASrNiG-eegN-fNV07MI6K46--QXA",
  authDomain: "rujoybarai-2ea7b.firebaseapp.com",
  projectId: "rujoybarai-2ea7b",
  storageBucket: "rujoybarai-2ea7b.firebasestorage.app",
  messagingSenderId: "629661408096",
  appId: "1:629661408096:web:5721b1ee33f0eb4c195c05",
  measurementId: "G-623WCC17XR",
  databaseURL:'https://rujoybarai-2ea7b-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




  const DataBase = getDatabase(app);
  const currentTime = new Date().toLocaleString();

  export const  PutMassage = async (ShowMassage)=>{
  if(ShowMassage !==null){
        try {
    await set(ref(DataBase, `Massage/${ShowMassage.Name}`), {
      Name: ShowMassage.Name,
      Email: ShowMassage.Email,
      Massage: ShowMassage.Mass,
      timestamp: currentTime, 
    });
    
  } catch (error) {
    
  }
  }
  

  }

