function initListeners() {
    $("nav a").on("click", (e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        btnID == "get" ? getUser() : addUser(); 
    });
};

function addUser() {
    let userObj = {
        fName: "Fat",
        lName: "Albert",
    }

    localStorage.setItem('Classes', JSON.stringify(userObj));
}

function getUser() {
    console.log(localStorage.getItem('Classes'));
}

function connectToStorage() {
    let classes = localStorage.getItem('Classes');
    
    if (classes) {
        console.log("already there");
    } else {
        localStorage.setItem('Classes', "[]");
    }
}
 
$(document).ready(function () { 
    initListeners(); 
    connectToStorage();
});