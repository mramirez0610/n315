const homeRoute = `<div class="hero home"></div>
<main>
  <h1>Welcome!</h1>
  <h2>Lorem Ipsum.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
    aspernatur neque possimus aut, odio iure optio quis. Tenetur, rem
    dignissimos.
  </p>
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam
    repudiandae officia et consequatur nobis sunt quia, excepturi repellat
    voluptatibus laboriosam sapiente sequi. Adipisci perspiciatis reiciendis
    hic illum aliquid autem, saepe maiores, id iste dolorem doloribus
    provident placeat voluptate amet ducimus, sequi similique qui pariatur?
  </p>
</main>`

const aboutRoute = `<div class="hero about"></div>
<main>
  <h1>About Us</h1>
  <h2>Lorem Ipsum.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
    aspernatur neque possimus aut, odio iure optio quis. Tenetur, rem
    dignissimos.
  </p>
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam
    repudiandae officia et consequatur nobis sunt quia, excepturi repellat
    voluptatibus laboriosam sapiente sequi. Adipisci perspiciatis reiciendis
    hic illum aliquid autem, saepe maiores, id iste dolorem doloribus
    provident placeat voluptate amet ducimus, sequi similique qui pariatur?
  </p>
</main>`

const contactRoute = `<div class="hero contact"></div>
<main>
  <h1>Contact Us</h1>
  <h2>Lorem Ipsum.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
    aspernatur neque possimus aut, odio iure optio quis. Tenetur, rem
    dignissimos.
  </p>
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam
    repudiandae officia et consequatur nobis sunt quia, excepturi repellat
    voluptatibus laboriosam sapiente sequi. Adipisci perspiciatis reiciendis
    hic illum aliquid autem, saepe maiores, id iste dolorem doloribus
    provident placeat voluptate amet ducimus, sequi similique qui pariatur?
  </p>
</main>`

const faqRoute = `<div class="hero faq"></div>
<main>
  <h1>Faq</h1>
  <h2>Lorem Ipsum.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
    aspernatur neque possimus aut, odio iure optio quis. Tenetur, rem
    dignissimos.
  </p>
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam
    repudiandae officia et consequatur nobis sunt quia, excepturi repellat
    voluptatibus laboriosam sapiente sequi. Adipisci perspiciatis reiciendis
    hic illum aliquid autem, saepe maiores, id iste dolorem doloribus
    provident placeat voluptate amet ducimus, sequi similique qui pariatur?
  </p>
</main>`

export function changePageContent(pageContentVarName) {
    $("#app").html(eval(pageContentVarName));
}