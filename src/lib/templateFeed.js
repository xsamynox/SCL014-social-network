const feed = () => {
  const divFeed = document.createElement('div');
  const viewFeed = `
  <header>
    <div class="container-logo">
      <i class="fas fa-chevron-left flecha"></i>
      <img class="logo-header" src="./img/iconos/LOGO.jpg">
    </div>
    <div class="container-icon">
      <a href="#/post"><i class="fas fa-plus icon-feed"></i></a>
      <i class="fas fa-search icon-feed"></i>
      <i class="fas fa-user icon-feed"></i>
      <i class="fas fa-filter icon-feed"></i>
    </div>
  </header>
  <section>
    <div class="imagesFeed">
      <img class="images" src="./img/Img-recetas/rapido-y-facil.jpg" alt="">
      <img class="images" src="./img/Img-recetas/comida-saludable.jpg" alt="">
      <img class="images" src="./img/Img-recetas/comida-vegana.jpg" alt="">
    </div>
    <div class="btn-feed">
      <button class="btn">Rápido y facil</button>
      <button class="btn">Saludable</button>
      <button class="btn">Vegano</button>
    </div>

    <div class="Post">
      <h2>| Publicaciones recientes</h2>
    </div>

    <div class="container2">
      <div>
        <img class="img-post" src="./img/Img-recetas/1.jpg" alt="">
      </div>
      <div>
        <h5>Brocoli gratinado</h5>
        <div>
          <i class="far fa-heart icon-feed2"></i>
        </div>
        <div>
          <i class="fas fa-user icon-feed2"></i>
        </div>
      </div>
    </div>

    <div class="container2">
      <div>
        <img class="img-post" src="./img/Img-recetas/arroz-frito-con-huevo.jpg" alt="">
      </div>
      <div class="container-hijo">
        <h5>Arroz con huevo</h5>
        <div>
          <i class="far fa-heart icon-feed2"></i>
        </div>
        <div>
          <i class="fas fa-user icon-feed2"></i>
        </div>
      </div>
    </div>

    <div class="container2">
      <div>
        <img class="img-post" src="./img/Img-recetas/arroz-con-salsa.jpg" alt="">
      </div>
      <div>
        <h5>Arroz con salsa</h5>
        <div>
          <i class="far fa-heart icon-feed2"></i>
        </div>
        <div>
          <i class="fas fa-user icon-feed2"></i>
        </div>
      </div>
    </div>
  </section> `;
  divFeed.innerHTML = viewFeed;
  return divFeed;
};

export { feed };
