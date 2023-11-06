const homeRoute = `
<main class="home-hero">
    <div class="main-bubble">
        <div class="content">
            <h1>The Jungle Cook</h1>
            <p>
            The home to various recipes of your choice. Add your own recipe
            today and fill the world with joy!
            </p>
        </div>
    </div>
    <div class="sub-bubble">
        <div class="content">
            <p>Want to be a Jungle Cook? Go ahead and the kitchen is yours!</p>
        </div>
    </div>
</main>`;

const browseRoute = `
`;

const recipeRoute = ``;

const loginRoute = `
<main class="login">
    <div class="acco">
        <div class="login-sign">
            <h2 id="banner">Login Here!</h2>
            <input id="email1" type="text" placeholder="Email Adress:" />
            <input id="pass1" type="password" placeholder="Password:" />
            <div class="log">
                <input type="button" value="Login" id="loginBtn" />
            </div>
        </div>
        <div class="login-sign">
            <p>don't have an account?</p>
            <h2>Sign Up!</h2>
            <input id="fName" type="text" placeholder="First Name:" />
            <input id="lName" type="text" placeholder="Last Name:" />
            <input id="email2" type="text" placeholder="Email Adress:" />
            <input id="pass2" type="password" placeholder="Password:" />
            <div class="log">
                <input type="button" value="Sign Up" id="signUpBtn" />
            </div>
        </div>
    </div>
</main>`;

export function changePageContent(pageContentVarName) {
  $("#app").html(eval(pageContentVarName));
}
