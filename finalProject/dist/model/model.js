import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebase = initializeApp({
  apiKey: "AIzaSyC_etnvNv4tedSpGgYGqCsB4HtYBNJ4TDU",
  authDomain: "jungle-cook-691b1.firebaseapp.com",
  projectId: "jungle-cook-691b1",
  storageBucket: "jungle-cook-691b1.appspot.com",
  messagingSenderId: "880594414943",
  appId: "1:880594414943:web:21a6f69d563946c097daea",
});

const auth = getAuth(firebase);
var coffeeMakers = [];

export async function signIn() {
  $(document).on("click", "#loginBtn", (e) => {
    e.preventDefault();
    let email = $("#email").val();
    let pass = $("#password").val();

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

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
    $(".status").html("Logged in");
  } else {
    console.log("No user");
  }
});

export function getData() {
  fetch("./data/data.json").then((response) => {
    response.json().then((data) => {
      let output = "";
      coffeeMakers = data.coffeeMakers;
      // let jsonData = data.coffeeMakers;
      console.log("coffee", coffeeMakers);
      coffeeMakers.forEach((item, idx) => {
        output += `
    <div class="coffee-maker" id=${item.id} data-name=${item.name} data-photo=${item.imgpath}>
        <img src="${item.imgpath}" alt="Coffee Maker" />
        <div class="coffee-maker-info">
          <h4>${item.name}</h4>
          <span>${item.price}</span>
          <div class="rating-container">
            <div class="stars">
              <img src="../assets/icons8-star-filled-48.png" alt="Star" />
              <img src="../assets/icons8-star-filled-48.png" alt="Star" />
              <img src="../assets/icons8-star-filled-48.png" alt="Star" />
              <img src="../assets/icons8-star-filled-48.png" alt="Star" />
            </div>
            <div class="rating">
              <span>${item.rating} | (220)</span>
            </div>
          </div>
          <span>Free Shipping</span>
          <button id="${idx}" class="buyBtn">Buy Now</button>
        </div>
      </div>
    </div>
        `;
      });
      $("#coffee").html(output);
    });
  });
}

export function addToCart() {
  let cartArray = [];
  $(document).on("click", ".buyBtn", (e) => {
    e.preventDefault();
    console.log("current target", coffeeMakers[e.currentTarget.id]);
    let newObj = {};
    newObj = coffeeMakers[e.currentTarget.id];

    $("#amount").html(cartArray.length + 1);

    cartArray.push(newObj);
    localStorage.setItem("cart", JSON.stringify(cartArray));
    console.log(localStorage.getItem("cart"));
  });
}

export function cart() {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let output = "";
  $("#cartItems").html("");
  cart.forEach((item, idx) => {
    $("#cartItems").append(`
    <div class="cart-item" id=${idx}>
      <div class="item-img">
        <img
          src=${item.imgpath}
          alt="Coffee Maker"
        />
      </div>
      <div class="item-info">
        <div class="title">
          <h4>Keurig</h4>
          <h2>${item.name}</h2>
        </div>
        <div class="pricing">
          <span>${item.price}</span>
          <span>Free Shipping</span>
        </div>
      </div>
    </div>
    `);
  });
  console.log(output);
  // $("#cartItems").html(output);
}

function route(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    if (pageID === "cart") {
      cart();
    }
  }).fail((error) => {
    console.log("error", error);
    changeToHome();
  });
}

function changeToHome() {
  $.get(`pages/home.html`, function (data) {
    $("#app").html(data);
    getData();
  });
}

export function changePage(pageID) {
  switch (pageID) {
    case "":
      changeToHome();
      break;
    case "home":
      changeToHome();
      break;
    case "cart":
      route(pageID);
      // cart();
      break;
  }
}
