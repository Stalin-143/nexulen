// Import the required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0srpcLeNF8nR6DF_fP7_FsemKY4--4wU",
  authDomain: "nexulen-f8790.firebaseapp.com",
  projectId: "nexulen-f8790",
  storageBucket: "nexulen-f8790.appspot.com",
  messagingSenderId: "718749886008",
  appId: "1:718749886008:web:df0563c31aaff0c2e628cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get references to the elements
const emailInput = document.getElementById("emailInput");
const resetButton = document.getElementById("resetButton");
const statusMessage = document.getElementById("statusMessage");

// Add event listener for password reset
resetButton.addEventListener("click", function() {
  const email = emailInput.value;

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        statusMessage.textContent = "Password reset email sent. Please check your inbox.";
        statusMessage.style.color = "green";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        statusMessage.textContent = `Error: ${errorMessage}`;
        statusMessage.style.color = "red";
      });
  } else {
    statusMessage.textContent = "Please enter a valid email address.";
    statusMessage.style.color = "red";
  }
});
