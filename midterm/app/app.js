import { changePageContent } from "../model/model.js";

function initListeners() {
  routing();
}

$(document).ready(function () {
  initListeners();
  changePageContent("homeRoute");
});

const routing = () => {
  $("nav a").on("click", (event) => {
    event.preventDefault();
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
  });
}

$(".mobile-icon").on("click", () => {
  $(".mobile-icon").toggleClass("open");
})