function route(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
  }).fail((error) => {
    console.log("error", error);
    changeToHome();
  });
}

function changeToHome() {
  $.get(`pages/home.html`, function (data) {
    $("#app").html(data);
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
      break;
  }
}
