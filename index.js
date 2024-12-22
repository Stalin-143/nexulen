import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0srpcLeNF8nR6DF_fP7_FsemKY4--4wU",
  authDomain: "nexulen-f8790.firebaseapp.com",
  projectId: "nexulen-f8790",
  storageBucket: "nexulen-f8790.appspot.com", // Fixed incorrect URL
  messagingSenderId: "718749886008",
  appId: "1:718749886008:web:df0563c31aaff0c2e628cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Monitor Authentication State
onAuthStateChanged(auth, (user) => {
  if (user) {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
      const docRef = doc(db, "users", loggedInUserId);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            document.getElementById('loggedUserFName').innerText = userData.firstName || "N/A";
            document.getElementById('loggedUserEmail').innerText = userData.email || "N/A";
            document.getElementById('loggedUserLName').innerText = userData.lastName || "N/A"; // Fixed typo
          } else {
            console.error("No document found matching the provided user ID.");
          }
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
        });
    } else {
      console.error("User ID not found in localStorage.");
    }
  } else {
    console.log("No user is signed in.");
  }
});

// Logout Functionality
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('loggedInUserId');
  signOut(auth)
    .then(() => {
      window.location.href = 'login.html'; // Changed to local login page
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});
