    // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
     // TODO: Add SDKs for Firebase products that you want to use
      import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js"
     // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSA4o5iFp3Lxehc1ivLL_iNaF5uqW8vUQ",
    authDomain: "testen-2285a.firebaseapp.com",
    projectId: "testen-2285a",
    storageBucket: "testen-2285a.firebasestorage.app",
    messagingSenderId: "1048631539230",
    appId: "1:1048631539230:web:77169d2813549018da600f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();



  

  


async function displayData() {
    // Henter alle dokumentene fra "elever"-samlingen
    const querySnapshot = await getDocs(collection(db, "elever"));
 
    // Henter referansen til <div>-elementet
    const dataDisplay = document.getElementById("dataDisplay");
 
    // Looper gjennom hvert dokument i samlingen
    querySnapshot.forEach((doc) => {
        const data = doc.data();
 
        // Legger til HTML-innhold for hvert dokument
        dataDisplay.innerHTML += `  
            
    `;
    });
}
 
displayData();



