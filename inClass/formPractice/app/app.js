var initialDescCount = 3;
var initialInstrCount = 3;
var recipes = [];

function initListeners() {
  $(".descAddBtn").on("click", (e) => {
    initialDescCount++;

    $(".formDesc").append(
      `<input type="text" placeholder="Description ${initialDescCount}" id="desc${
        initialDescCount - 1
      }" />`
    );
  });

  $(".instrAddBtn").on("click", (e) => {
    initialInstrCount++;

    $(".formInstr").append(
      `<input type="text" placeholder="Instruction ${initialInstrCount}" id="desc${
        initialInstrCount - 1
      }" />`
    );
  });

  $(".submit").on("click", (e) => {
    console.log("submit");
    let newItemObj = {};

    let imagePath = $("#imagePath").val();
    let itemName = $("#itemName").val();

    newItemObj.imagePath = imagePath;
    newItemObj.itemName = itemName;

    newItemObj.descriptions = [];
    // jquery;
    $(".formDesc input").each(function (index, data) {
      var value = $(this).val();
      console.log("desc " + value);

      if (value !== "") {
        let keyName = "desc" + index;
        let descObj = {};
        descObj[keyName] = value;

        // basically the same thing, the above allows for
        // a variable to be used as a key
        //   let newDesc = {
        //     idx: index,
        //     test: value,
        //   };

        newItemObj.descriptions.push(descObj);
      } else alert("Please fill out all fields");
    });

    newItemObj.instructions = [];

    $(".formInstr input").each(function (index, data) {
      var value = $(this).val();

      if (value !== "") {
        let keyName = "instr" + index;
        let instrObj = {};
        instrObj[keyName] = value;

        console.log("instru " + value);
        newItemObj.instructions.push(instrObj);
      } else alert("Please fill out all fields");
    });

    recipes.push(newItemObj);
    console.log(recipes);
  });
}

$(document).ready(function () {
  initListeners();
});
