import { changePage, signIn, addToCart } from "../dist/model/model";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

function initListener() {
  signIn();
  addToCart();
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initListener();
  initURLListener();
});
