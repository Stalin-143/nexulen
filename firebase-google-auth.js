// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0srpcLeNF8nR6DF_fP7_FsemKY4--4wU",
  authDomain: "nexulen-f8790.firebaseapp.com",
  projectId: "nexulen-f8790",
  storageBucket: "nexulen-f8790.appspot.com", // Fixed incorrect URL
  messagingSenderId: "718749886008",
  appId: "1:718749886008:web:df0563c31aaff0c2e628cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign-In provider
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-In
document.getElementById('googleSignInButton').addEventListener('click', async () => {
  try {
    // Sign in with Google using a popup window
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Display the user information in the status message
    document.getElementById('statusMessage').innerHTML = `
      Welcome, ${user.displayName}!<br>
      Email: ${user.email}
    `;
    document.getElementById('statusMessage').style.color = 'green';
  } catch (error) {
    // Handle any error
    document.getElementById('statusMessage').innerHTML = `Error: ${error.message}`;
    document.getElementById('statusMessage').style.color = 'red';
  }
});
