// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
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
const auth = getAuth();
const db = getFirestore();

// Function to display messages
function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
    messageDiv.style.display = "none";
  }, 5000);
}

// Sign-up logic
const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get form values
  const email = document.getElementById('rEmail').value;
  const password = document.getElementById('rPassword').value;
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;

  try {
    // Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data to Firestore
    const userData = { email, firstName, lastName };
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, userData);

    // Show success message
    showMessage("Account created successfully. Redirecting to login...", "signUpMessage");

    // Redirect to login page after 3 seconds
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 3000);
  } catch (error) {
    const errorCode = error.code;

    // Show appropriate error message
    if (errorCode === 'auth/email-already-in-use') {
      showMessage("Email address already exists!", "signUpMessage");
    } else {
      showMessage("Error creating account. Please try again.", "signUpMessage");
    }
  }
});

// Sign-in logic
const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Sign in user with Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user ID to localStorage
    localStorage.setItem('loggedInUserId', user.uid);

    // Show success message
    showMessage("Login successful. Redirecting to homepage...", "signInMessage");

    // Redirect to homepage after 3 seconds
    setTimeout(() => {
      window.location.href = 'homepage.html';
    }, 3000);
  } catch (error) {
    const errorCode = error.code;

    // Show appropriate error message
    if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
      showMessage("Incorrect email or password. Please try again.", "signInMessage");
    } else {
      showMessage("An error occurred during login. Please try again.", "signInMessage");
    }
  }
});
