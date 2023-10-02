const homeRoute = `<div class="hero home"></div>
<div class="content">
  <h1 id="greeting">Hello, Guest!</h1>
  <h2>Lorem ipsum dolor sit amet. Lorem ipsum dolor.</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur quibusdam libero cumque ex,
    cupiditate, fuga eos voluptate excepturi neque eaque saepe veniam esse iste vel sapiente odio ipsam, labore aut.
    Libero eos minima, incidunt tempora eaque cumque voluptatibus error perferendis doloremque cum facilis quisquam,
    esse impedit architecto vel possimus.</p>
  <h2>Lorem ipsum dolor.</h2>  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, officia voluptatibus dolorum est
    deleniti ea itaque in ex! Totam consequatur numquam ea iste, laborum excepturi asperiores aut, corporis repellat,
    sit in. Aliquid dolorum doloremque obcaecati enim deleniti. Voluptatibus, eius hic illo repellendus odio illum.
    Vitae officiis culpa sint vero corporis rem recusandae doloremque nam autem quis placeat tenetur hic illo quidem
    consectetur consequuntur temporibus numquam odio, sapiente similique voluptate vel at. Animi, quisquam quia.</p>
</div>`;

const aboutRoute = `<div class="hero about"></div>
<div class="content">
  <h1>About Us</h1>
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur quibusdam libero cumque ex,
    cupiditate, fuga eos voluptate excepturi neque eaque saepe veniam esse iste vel sapiente odio ipsam, labore aut.
    Libero eos minima, incidunt tempora eaque cumque voluptatibus error perferendis doloremque cum facilis quisquam,
    esse impedit architecto vel possimus.</p>
  <h2>Lorem ipsum dolor sit.</h2>  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus, officia voluptatibus dolorum est
    deleniti ea itaque in ex! Totam consequatur numquam ea iste, laborum excepturi asperiores aut, corporis repellat,
    sit in. Aliquid dolorum doloremque obcaecati enim deleniti. Voluptatibus, eius hic illo repellendus odio illum.
    Vitae officiis culpa sint vero corporis rem recusandae doloremque nam autem quis placeat tenetur hic illo quidem
    consectetur consequuntur temporibus numquam odio, sapiente similique voluptate vel at. Animi, quisquam quia.</p>
</div>`;

export function changePageContent(pageContentVarName) {
    $("#app").html(eval(pageContentVarName));
}