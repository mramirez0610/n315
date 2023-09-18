let loggedInOut = false;
let homeContent = `<h1>Home page</h1>`;
let aboutContent = `<h1>About page</h1>`;
let productsContent = `<h1>Products page</h1>`;
let contactContent = `<h1>Contact page</h1>`;

export function addPageContent(pageName){
    let pageContentName = pageName + "Content";
    $("#app").html(eval(pageContentName));
}

function setLoggedInOut(){
    if(loggedInOut == true){
        loggedInOut = false;
        $("nav .log span").html("Log In");
    }else{
        loggedInOut = true;
        $("nav .log span").html("Log Out");
    }
}

function getLoggedInOut(){
    return loggedInOut;
}

export {setLoggedInOut, getLoggedInOut};