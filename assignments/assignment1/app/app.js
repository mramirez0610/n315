const homeRoute = `<div class="home">
<div class="hero homeHero"></div>

<div class="content">
  <h1>Our Campus</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
    aliquam sit quas accusantium delectus, fuga consequuntur iusto
    repudiandae ducimus? Veniam, sapiente? Debitis est deleniti quae esse
    perspiciatis aperiam ipsa ad.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    laboriosam, hic perferendis quas consequatur, quos dolor, porro in
    doloribus quidem adipisci illum maiores cumque fugit? Expedita magni
    optio ullam molestias.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
    quis ipsam repudiandae libero recusandae fuga consequatur ex tempora
    asperiores facere atque. Cum eaque quo, odio animi at necessitatibus?
    Sint, dignissimos!
  </p>
</div>
</div>`;

const aboutRoute = `<div class="about">
<div class="hero aboutHero"></div>

<div class="content">
  <h1>About Us:</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
    distinctio voluptatibus ut, delectus tempore totam sit vitae alias
    consequatur accusantium nemo eveniet at veritatis quia quos! Vel,
    ullam. Sed, voluptatum?
  </p>
  <p>
    Tenetur, minima. Quibusdam quod eaque iure ducimus culpa ut adipisci
    magnam optio quam? At molestiae animi consectetur eum, itaque iste
    laborum sapiente sit! Cupiditate sit amet temporibus libero nihil
    magnam!
  </p>
  <h1>Established in 2010</h1>
  <p>
    Officiis ad dignissimos, in minima unde exercitationem ab nesciunt
    harum culpa vel? Nobis sapiente mollitia ratione possimus repellat sed
    repudiandae. Laboriosam possimus voluptatem magnam ea optio reiciendis
    facere eos fuga.
  </p>
</div>
</div>`;

const contactRoute = `<div class="contact">
<div class="hero contactHero"></div>

<div class="content">
  <h1>Get in contact with us!</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
    aliquam sit quas accusantium delectus, fuga consequuntur iusto
    repudiandae ducimus? Veniam, sapiente? Debitis est deleniti quae esse
    perspiciatis aperiam ipsa ad.
  </p>
  <ul>
    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
  </ul>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    laboriosam, hic perferendis quas consequatur, quos dolor, porro in
    doloribus quidem adipisci illum maiores cumque fugit? Expedita magni
    optio ullam molestias.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
    quis ipsam repudiandae libero recusandae fuga consequatur ex tempora
    asperiores facere atque. Cum eaque quo, odio animi at necessitatibus?
    Sint, dignissimos!
  </p>
</div>
</div>`;

const galleryRoute = `<div class="gallery">
<div class="content">
  <h1>Gallery</h1>
  <h3>Shhh.... just imagine these are photos...</h3>
</div>
<div class="photoGrid">
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
  <div class="photo"></div>
</div>

</div>`;

function initListeners() {
  $("nav a").on("click", (event) => {
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
    console.log(pageContentID);
  });
}

function changePageContent(pageContentVarName) {
  $("#app").html(eval(pageContentVarName));
}

$(document).ready(function () {
  changePageContent("homeRoute");
  initListeners();
});
