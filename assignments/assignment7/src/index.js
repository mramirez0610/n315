import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
import { changePageContent } from "../dist/model/model.js";
import { async } from "@firebase/util";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC_etnvNv4tedSpGgYGqCsB4HtYBNJ4TDU",
  authDomain: "jungle-cook-691b1.firebaseapp.com",
  projectId: "jungle-cook-691b1",
  storageBucket: "jungle-cook-691b1.appspot.com",
  messagingSenderId: "880594414943",
  appId: "1:880594414943:web:21a6f69d563946c097daea",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const students = collection(db, "Students");
const snapshot = await getDocs(students);

//logout logic
async function logout() {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
}

function signOutListener(e) {
  e.preventDefault();
  logout();
}

onAuthStateChanged(auth, (user) => {
  const login = $("#login");

  if (user != null) {
    console.log("logged in");
    $("#login").text("Logout");
    login.on("click", signOutListener);
  } else {
    console.log("No user");
    $("#login").text("Login");
    login.off("click", signOutListener);
  }
});

//creating account logic
async function createAccount() {
  let fName = $("#fName").val();
  let lName = $("#lName").val();

  $(document).on("click", "#signUpBtn", (e) => {
    e.preventDefault();

    let emailS = $("#email2").val();
    let passS = $("#pass2").val();

    console.log("sfasdf");

    createUserWithEmailAndPassword(auth, emailS, passS)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(emailS);
        console.log(passS);
      });
  });
}

async function signIn() {
  $(document).on("click", "#loginBtn", (e) => {
    e.preventDefault();
    let email = $("#email1").val();
    let pass = $("#pass1").val();

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}

$(".hamburger-icon").on("click", () => {
  $(".hamburger-icon").toggleClass("open");
});

function initListeners() {
  routing();
  signIn();
  createAccount();
}

$(document).ready(function () {
  initListeners();
  changePageContent("homeRoute");
});

const routing = () => {
  $("nav a").on("click", (event) => {
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
  });
};
