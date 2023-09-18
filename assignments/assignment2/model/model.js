const homeRoute = `<div class="home">

<div class="content">
  <h1>Home Content</h1>
  <p>
    Ea voluptate excepteur veniam velit reprehenderit Lorem aute exercitation quis irure laborum Lorem ut mollit. Ex do et ipsum enim ullamco do officia elit velit ipsum minim. Nisi dolor ea ipsum mollit veniam ullamco consectetur sit ea ut. Et cupidatat non exercitation laboris dolore cupidatat qui irure commodo amet. Pariatur quis proident ut laboris consequat velit nostrud. Et eu nostrud officia est.
  </p>
  
  <div class="img home"></div>
  <h2>Lorem Ipsum</h2>
  <p>
    Est non consequat Lorem pariatur minim consequat qui sunt velit ipsum voluptate culpa aute fugiat. Culpa laborum do aliquip veniam occaecat duis deserunt labore. Dolore nostrud anim aliquip laborum non cupidatat officia tempor adipisicing fugiat nisi aliquip. Velit labore amet laborum ut eu. Est id eiusmod aliquip officia ipsum nulla laborum ex commodo.
  </p>
  <h3>Lorem Ipsum</h3>
  <p>
    Enim do sint aute in Lorem. Anim laborum sunt duis et velit est esse sit id veniam cillum. Non esse cupidatat nisi irure. Nostrud excepteur esse officia dolore dolor do quis culpa. Adipisicing reprehenderit voluptate ea consequat exercitation consequat. Amet labore aliquip fugiat commodo. Laboris tempor commodo ullamco in ut nisi.
  </p>
</div>
</div>`;

const aboutRoute = `<div class="about">
<div class="content">
  <h1>About Us:</h1>
  <p>
    Sit anim elit officia duis in ut officia. Esse est dolore magna laboris occaecat exercitation velit deserunt in ut in commodo. Veniam mollit nulla aute incididunt consequat exercitation ex consectetur do. Aute aute dolore in duis voluptate magna.
  </p>
  <p>
    Sunt esse tempor tempor dolore proident labore est laborum do id labore ea veniam qui. Anim consequat cupidatat reprehenderit aliqua laboris voluptate et sit fugiat exercitation. Elit aliqua sint proident consequat id mollit dolore ut est sit.
  </p>
  <h2>Established in 2010</h2>
  <p>
    Reprehenderit dolore laborum adipisicing reprehenderit. Consequat non qui duis duis ex. Qui commodo laborum dolor excepteur ea laborum duis commodo anim pariatur minim. Nostrud dolore fugiat esse et proident commodo.
  </p>
</div>
</div>`;

const contactRoute = `<div class="contact">
<div class="hero contactHero"></div>

<div class="content">
  <h1>Get in contact with us!</h1>
  <p>
    Dolore ad dolor adipisicing cillum. Amet incididunt excepteur laborum exercitation dolore labore sint. Veniam aliquip dolor nostrud incididunt labore eu. Aliquip id cupidatat amet cupidatat non sint labore elit laborum eu amet.
  </p>
  <ul>
    <li>222 Street Road Drive, 46555, IN</li>
    <li>Sint culpa Lorem excepteur Lorem occaecat qui ad elit id enim voluptate.</li>
    <li>Dolor do nostrud quis velit dolor ex et id ea commodo nulla dolore culpa id.</li>
  </ul>
  <p>
    Elit id voluptate ea aute ea. Aliqua id id cillum tempor. Adipisicing laborum consectetur cillum tempor nostrud culpa qui.
  </p>
  <p>
    Pariatur velit fugiat commodo id. Sit adipisicing cillum est est laboris veniam veniam culpa irure commodo aliqua sint dolore. Excepteur anim consectetur adipisicing labore nisi elit eu irure elit proident enim Lorem proident. Do excepteur veniam non nulla voluptate esse labore ea excepteur pariatur incididunt nulla cupidatat in. Elit proident sint ea nulla ea culpa in occaecat esse non magna Lorem ad adipisicing. Occaecat dolore et eiusmod nulla pariatur dolor pariatur.
  </p>
</div>
</div>`;

const faqRoute = `<div class="faq">
<div class="content">
<h1>Frequently Asked Questions</h1>
<p>
  Aliqua nisi laboris do esse deserunt voluptate consequat amet dolor deserunt nostrud. Officia Lorem Lorem aliquip adipisicing qui amet pariatur reprehenderit exercitation et dolore ut. Cupidatat anim exercitation sunt aute Lorem non irure amet labore sit veniam quis adipisicing elit.
</p>
<ul>
  <li>Cillum aliqua adipisicing id reprehenderit minim magna sunt nostrud in voluptate aute incididunt velit.</li>
  <li>Adipisicing mollit fugiat sit cupidatat dolore amet nisi amet occaecat commodo labore.</li>
  <li>Enim aliqua cillum enim deserunt esse eiusmod ut minim ut.</li>
</ul>
<h2>Ullamco incididunt esse occaecat magna officia dolor.</h2>
<p>
  Lorem et duis laborum consectetur aliqua dolore. Consequat dolor deserunt do dolore est mollit proident velit Lorem ad ea sint amet. Consequat culpa pariatur dolore sit voluptate consequat sit ipsum officia esse ea. Consectetur consectetur eiusmod eu laborum magna sunt eu quis elit nostrud qui cupidatat. Sint irure qui ipsum veniam commodo adipisicing velit anim. Voluptate culpa eu dolor ut exercitation irure. Sint qui sint elit cupidatat aliquip et occaecat amet proident ex.
</p>
<p>
  Magna nisi adipisicing dolor aute occaecat officia. Cillum id consectetur proident aliqua dolore. Labore consequat dolore nulla consequat cillum enim cupidatat. Culpa amet velit sunt veniam do sint eiusmod sit officia et ex. Consequat amet do reprehenderit excepteur labore culpa excepteur adipisicing elit minim ea labore occaecat. Occaecat duis laborum duis magna irure culpa enim consequat.
</p>
</div>

</div>`;

export function changePageContent(pageContentVarName) {
  $("#app").html(eval(pageContentVarName));
}
