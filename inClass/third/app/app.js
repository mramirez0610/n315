import { addPageContent, setLoggedInOut } from "../model/model.js";

function initListeners() {
  $("nav .links a").on("click", (e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    addPageContent(btnID);
    // practice ternary
    // btnID == "home" ? addPageContent() : null;
  });

  $("nav .log span").on("click", (e) => {
    e.preventDefault();
    setLoggedInOut();
  });
}

$(document).ready(function () {
  initListeners();
  addPageContent("home");
});
