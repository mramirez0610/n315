/* 

YE OLD TABLE OF CONTENTS 

0. Global
1. Firebase
2. Browse
3. Form
4. Your Recipes
5. Editing and Deleting
6. Routing

*/

/* 0. Global */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";

export function connectToStorage() {
  let recipes = localStorage.getItem("Recipes");

  if (recipes) {
    null;
  } else {
    localStorage.setItem("Recipes", "[]");
  }
}

/* 1. Firebase */

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
    $("#login").text("Logout");
    login.on("click", signOutListener);
    changePage("browse");
    $(`<a href="#recipes">Your Recipes</a>`).insertBefore("#login");
  } else {
    $("#login").text("Login");
    login.off("click", signOutListener);
    changePage("home");
  }
});

//creating account logic
export async function createAccount() {
  let fName = $("#fName").val();
  let lName = $("#lName").val();

  $(document).on("click", "#signUpBtn", (e) => {
    e.preventDefault();

    let emailS = $("#email2").val();
    let passS = $("#pass2").val();

    createUserWithEmailAndPassword(auth, emailS, passS)
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

export async function signIn() {
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

/* 2. Browse */

function populateSamples() {
  let sampleRecipes = [
    {
      imgPath: "../assets/imgs/recipe-pizza.jpg",
      name: "Supreme Pizza",
      desc: "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
      time: "1h 24min",
      servings: "4 servings",
    },
    {
      imgPath: "../assets/imgs/recipe-burger.jpg",
      name: "Classic Burger",
      desc: "Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.",
      time: "30 min",
      servings: "4 servings",
    },
    {
      imgPath: "../assets/imgs/recipe-pilaf.jpg",
      name: "Chicken Biryani",
      desc: "Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.",
      time: "1h 15min",
      servings: "6 servings",
    },
    {
      imgPath: "../assets/imgs/recipe-chowmein.jpg",
      name: "Ch. Chow Mein",
      desc: "A great Chow Mein comes down to the sauce, it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice.",
      time: "20 min",
      servings: "4 servings",
    },
  ];

  sampleRecipes.forEach((recipe) => {
    $("#samples").append(`
      <div class="card">
        <img class="recipe-img" src=${recipe.imgPath} alt="RecipeCover"/>
        <div class="recipe-info">
          <div class="container">
            <h3>${recipe.name}</h3>
            <p>${recipe.desc}</p>
            <div class="recipe-details">
              <span class="info"><img src="../assets/imgs/time.svg" class="icon"></img> ${recipe.time}</span>
              <span class="info"><img src="../assets/imgs/servings.svg" class="icon"></img> ${recipe.servings}</span>
            </div>  
          </div>
        </div>
      </div>
    `);
  });
}

function browse(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    if (pageID === "browse") {
      populateSamples();
    }
  });
}

/* 3. Form */

var initialIngCount = 3;
var initialInstrCount = 3;

export function form() {
  $(document).on("click", ".ing-add-btn", (e) => {
    initialIngCount++;

    $(".form-ing").append(
      `<input type="text" placeholder="Ingredient ${initialIngCount}" id="ing${
        initialIngCount - 1
      }" />`
    );
  });

  $(document).on("click", ".instr-add-btn", (e) => {
    initialInstrCount++;

    $(".form-instr").append(
      `<input type="text" placeholder="Instruction ${initialInstrCount}" id="desc${
        initialInstrCount - 1
      }" />`
    );
  });

  let idCount = 0;

  $(document).on("click", ".submit", (e) => {
    let newItemObj = {};

    let recipeImg = $("#imagePath").val();
    let recipeName = $("#recipeName").val();
    let recipeDesc = $("#recipeDesc").val();
    let recipeTime = $("#recipeTime").val();
    let recipeServings = $("#recipeServings").val();

    newItemObj.id = idCount++;
    newItemObj.recipeImg = recipeImg;
    newItemObj.recipeName = recipeName;
    newItemObj.recipeDesc = recipeDesc;
    newItemObj.recipeTime = recipeTime;
    newItemObj.recipeServings = recipeServings;

    newItemObj.ingredients = [];

    $(".form-ing input").each(function (index, data) {
      var value = $(this).val();

      if (value !== "") {
        let keyName = "ing" + index;
        let ingObj = {};
        ingObj[keyName] = value;

        newItemObj.ingredients.push(ingObj);
      }
    });

    newItemObj.instructions = [];

    $(".form-instr input").each(function (index, data) {
      var value = $(this).val();

      if (value !== "") {
        let keyName = "instr" + index;
        let instrObj = {};
        instrObj[keyName] = value;
        newItemObj.instructions.push(instrObj);
      }
    });
    addRecipe(newItemObj);
    changePage("recipes");
  });
}

function addRecipe(recipeObj) {
  let recipes = JSON.parse(localStorage.getItem("Recipes"));
  localStorage.setItem("Recipe", JSON.stringify(recipeObj));
  recipes.push(recipeObj);
  localStorage.setItem("Recipes", JSON.stringify(recipes));
}

/* 4. Your Recipes */
function populateRecipes() {
  let localRecipes = JSON.parse(localStorage.getItem("Recipes"));

  localRecipes.forEach((recipe) => {
    $("#recipes").append(`
      <div class="recipe-card" id=${recipe.id}>
        <div class="card">
          <img class="recipe-img" src=${recipe.recipeImg} alt="RecipeCover"/>
          <div class="recipe-info">
            <div class="container">
              <h3>${recipe.recipeName}</h3>
              <p>${recipe.recipeDesc}</p>
              <div class="recipe-details">
                <span class="info"><img src="../assets/imgs/time.svg" class="icon"></img> ${recipe.recipeTime}</span>
                <span class="info"><img src="../assets/imgs/servings.svg" class="icon"></img> ${recipe.recipeServings}</span>
              </div>  
            </div>
          </div>
        </div>
        <div class="options">
          <button id="edit" class="edit-btn">Edit Recipe</button>
          <button id="delete" class="delete-btn">Delete</button>
        </div>  
      </div>
    `);
  });
}

function recipe(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    if (pageID === "recipes") {
      populateRecipes();
    }
  });
}

/* 5. Editing and Deleting */
export function editRecipe() {
  let recipes = JSON.parse(localStorage.getItem("Recipes"));
  $(document).on("click", "#edit", (e) => {
    e.preventDefault();
    let recipeID = $(e.target).parent().parent().attr("id");
    let index = recipes.findIndex((recipe) => recipe.id == recipeID);
    let recipe = recipes[index];
    localStorage.setItem("editRecipe", JSON.stringify(recipe));
    changePage("edit");
  });
}

export function deleteRecipe() {
  let recipes = JSON.parse(localStorage.getItem("Recipes"));

  $(document).on("click", "#delete", (e) => {
    e.preventDefault();
    let recipeID = $(e.target).parent().parent().attr("id");
    let index = recipes.findIndex((recipe) => recipe.id == recipeID);

    // If the recipe was found, remove it from the array
    if (index !== -1) {
      recipes.splice(index, 1);
    }

    // Save the updated recipes array back to localStorage
    localStorage.setItem("Recipes", JSON.stringify(recipes));
    $("#" + recipeID).remove();

    console.log(recipeID);
  });
}

function edit(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    if (pageID === "edit") {
      updateRecipe();
    }
  });
}

export function updateRecipe() {
  let recipeToUpdate = JSON.parse(localStorage.getItem("editRecipe"));

  $("#imagePath").val(recipeToUpdate.recipeImg);
  $("#recipeName").val(recipeToUpdate.recipeName);
  $("#recipeDesc").val(recipeToUpdate.recipeDesc);
  $("#recipeTime").val(recipeToUpdate.recipeTime);
  $("#recipeServings").val(recipeToUpdate.recipeServings);

  recipeToUpdate.ingredients.forEach((ingredient, i) => {
    $(`#ing${i}`).val(ingredient[`ing${i}`]);
  });

  recipeToUpdate.instructions.forEach((instruction, i) => {
    $(`#instr${i}`).val(instruction[`instr${i}`]);
  });

  // Attach the submit event to the form
  $(document).on("click", "#update", (e) => {
    e.preventDefault();

    // Retrieve the array of recipes and the recipe to be updated from localStorage
    let recipes = JSON.parse(localStorage.getItem("Recipes"));

    // Get the updated data from the form fields
    let updatedImg = $("#imagePath").val();
    let updatedName = $("#recipeName").val();
    let updatedDesc = $("#recipeDesc").val();
    let updatedTime = $("#recipeTime").val();
    let updatedServings = $("#recipeServings").val();

    // Get the updated ingredients and instructions
    let updatedIngredients = [];
    let ingredientIndex = 0;
    while ($("#ing" + ingredientIndex).length) {
      updatedIngredients.push($("#ing" + ingredientIndex).val());
      ingredientIndex++;
    }

    // Get the updated instructions
    let updatedInstructions = [];
    let instructionIndex = 0;
    while ($("#instr" + instructionIndex).length) {
      updatedInstructions.push($("#instr" + instructionIndex).val());
      instructionIndex++;
    }

    // Update the recipe object with the new data
    recipeToUpdate.recipeImg = updatedImg;
    recipeToUpdate.recipeName = updatedName;
    recipeToUpdate.recipeDesc = updatedDesc;
    recipeToUpdate.recipeTime = updatedTime;
    recipeToUpdate.recipeServings = updatedServings;

    recipeToUpdate.ingredients = updatedIngredients;
    recipeToUpdate.instructions = updatedInstructions;

    // Find the index of the recipe to be updated in the recipes array
    let index = recipes.findIndex((recipe) => recipe.id == recipeToUpdate.id);

    // replacing
    if (index !== -1) {
      recipes[index] = recipeToUpdate;
    }
    localStorage.removeItem("editRecipe");
    localStorage.removeItem("Recipe");
    console.log(recipes);
    // save the updated array of recipes back to localStorage
    localStorage.setItem("Recipes", JSON.stringify(recipes));
    changePage("recipes");
  });
}

/* 6. Routing */

function changeToHome() {
  $.get(`pages/home.html`, function (data) {
    $("#app").html(data);
  });
}

function route(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    localStorage.removeItem("editRecipe");
  }).fail((error) => {
    console.log("error", error);
    changeToHome();
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
    case "browse":
      browse(pageID);
      break;
    case "login":
      route(pageID);
      break;
    case "create":
      route(pageID);
      break;
    case "recipes":
      recipe(pageID);
      break;
    case "edit":
      edit(pageID);
      break;
    default:
      route(pageID);
      break;
  }
}
