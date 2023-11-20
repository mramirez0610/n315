import {
  createAccount,
  signIn,
  changePage,
  connectToStorage,
  editRecipe,
  deleteRecipe,
  form,
} from "../dist/model/model.js";

//routing logic
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

function initListeners() {
  connectToStorage();
  signIn();
  createAccount();
  form();
  editRecipe();
  deleteRecipe();
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
