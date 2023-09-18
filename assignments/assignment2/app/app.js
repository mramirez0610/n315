import { changePageContent } from "../model/model.js";

function initListeners() {
  $("nav a").on("click", (event) => {
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
    console.log(pageContentID);
  });
}

$(document).ready(function () {
  changePageContent("homeRoute");
  initListeners();
});
