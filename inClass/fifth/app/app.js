function initListeners() {
  openModal();
  closeModal();
}

$(document).ready(function () {
  initListeners();
});

const openModal = () => {
  $("#home").on("click", () => {
    $("#modal").toggle();
  });
};

const closeModal = () => {
  $(".close").on("click", (e) => {
    $("#modal").toggle();
  });
};
