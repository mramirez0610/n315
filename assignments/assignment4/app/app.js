import { changePageContent } from "../model/model.js";

function initListeners() {
  modalRules();
  login();
  routing(home);
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
}

const modalRules = () => {
  $("#modal").hide();

  $("#login").on("click", () => {
    $("#modal").toggle();
  });

  $(".close").on("click", (e) => {
    $("#modal").toggle();
    $("#banner").html("Login");
  });
};

const closeModal = () => {
  $("#modal").toggle();
};

const login = () => {
  let status = false;
  let greeting = $("#greeting").html();

  $("#loginButton").on("click", (e) => {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    clearInputs();

    if (username == "admin" || password == "admin") {
      console.log("Login successful");
      closeModal();
      status = true;
    } else {
      console.log("Login failed");
      $("#banner").html("Login failed");
    }

    status == true ? $("#greeting").html("Hello, Admin!") : null;
  });
}

const clearInputs = () => {
  $("#username").val("");
  $("#password").val("");
}