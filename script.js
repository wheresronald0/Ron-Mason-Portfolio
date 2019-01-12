$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
  $('[data-toggle="popover"]').popover();
});

// $(function() {
//   $("#myCarousel").carousel(1);
// });

function animateCarousel() {}

//

//VERY WET
function animateCarousel() {
  if (!document.getElementById("reactLogo")) {
    //adding footer
    footerAdd = document.getElementById("projectCarousel");
    let footer = document.createElement("footer");
    footerAdd.appendChild(footer);

    //adding animation to carousel
    let carouselParent = document.getElementById("cItem1");
    let carouselAnchorTag = document.createElement("a");
    carouselAnchorTag.setAttribute("href", "#");
    carouselAnchorTag.setAttribute("data-toggle", "modal");
    carouselAnchorTag.setAttribute("data-target", "#crescentCityDonutsModal");
    let projectImg = document.createElement("img");
    projectImg.setAttribute("src", "assets/Crescent-City.png");
    projectImg.setAttribute("class", "d-block w-100");
    carouselAnchorTag.appendChild(projectImg);
    carouselParent.appendChild(carouselAnchorTag);
    document
      .getElementById("projectCarousel")
      .setAttribute("class", "container animated bounceInUp delay-0s");

    //others on carousel
    let carouselParent2 = document.getElementById("cItem2");
    let carouselAnchorTag2 = document.createElement("a");
    carouselAnchorTag2.setAttribute("href", "#");
    carouselAnchorTag2.setAttribute("data-toggle", "modal");
    carouselAnchorTag2.setAttribute("data-target", "#giftRunModal");
    let projectImg2 = document.createElement("img");
    projectImg2.setAttribute("src", "assets/Gift-Run.png");
    projectImg2.setAttribute("class", "d-block w-100");
    carouselAnchorTag2.appendChild(projectImg2);
    carouselParent2.appendChild(carouselAnchorTag2);

    let carouselParent3 = document.getElementById("cItem3");
    let carouselAnchorTag3 = document.createElement("a");
    carouselAnchorTag3.setAttribute("href", "#");
    carouselAnchorTag3.setAttribute("data-toggle", "modal");
    carouselAnchorTag3.setAttribute("data-target", "#piqShareModal");
    let projectImg3 = document.createElement("img");
    projectImg3.setAttribute("src", "assets/PIQ-Share.png");
    projectImg3.setAttribute("class", "d-block w-100");
    carouselAnchorTag3.appendChild(projectImg3);
    carouselParent3.appendChild(carouselAnchorTag3);

    let carouselParent4 = document.getElementById("cItem4");
    let carouselAnchorTag4 = document.createElement("a");
    carouselAnchorTag4.setAttribute("href", "#");
    carouselAnchorTag4.setAttribute("data-toggle", "modal");
    carouselAnchorTag4.setAttribute("data-target", "#movieSearchModal");
    let projectImg4 = document.createElement("img");
    projectImg4.setAttribute("src", "assets/Movie-Search.png");
    projectImg4.setAttribute("class", "d-block w-100");
    carouselAnchorTag4.appendChild(projectImg4);
    carouselParent4.appendChild(carouselAnchorTag4);

    let carouselParent5 = document.getElementById("cItem5");
    let carouselAnchorTag5 = document.createElement("a");
    carouselAnchorTag5.setAttribute("href", "#");
    carouselAnchorTag5.setAttribute("data-toggle", "modal");
    carouselAnchorTag5.setAttribute("data-target", "#seinfeldSimonModal");
    let projectImg5 = document.createElement("img");
    projectImg5.setAttribute("src", "assets/Seinfeld-Simpn.png");
    projectImg5.setAttribute("class", "d-block w-100");
    carouselAnchorTag5.appendChild(projectImg5);
    carouselParent5.appendChild(carouselAnchorTag5);

    let carouselParent6 = document.getElementById("cItem6");
    let carouselAnchorTag6 = document.createElement("a");
    carouselAnchorTag6.setAttribute("href", "#");
    carouselAnchorTag6.setAttribute("data-toggle", "modal");
    carouselAnchorTag6.setAttribute("data-target", "#seinfeldSimonModal");
    let projectImg6 = document.createElement("img");
    projectImg6.setAttribute("src", "assets/Fortnite-Character-Selector.png");
    projectImg6.setAttribute("class", "d-block w-100");
    carouselAnchorTag6.appendChild(projectImg6);
    carouselParent6.appendChild(carouselAnchorTag6);

    for (var i = 0; i <= 5; i++) {
      let names = [
        "Crescent City Donuts",
        "Gift-RUN",
        "PiQ Share",
        "Movie Search",
        "Seinfeld-Simon",
        "Fortnite Characters"
      ];
      let projectImageLocations = [
        "assets/react_logo.png",
        "assets/react_logo.png",
        "assets/react_logo.png",
        "assets/react_logo.png",
        "assets/react_logo.png",
        "assets/react_logo.png"
      ];

      let projectImages = [
        "assets/Crescent-City.png",
        "assets/Gift-Run.png",
        "assets/PIQ-Share.png",
        "assets/Movie-Search.png",
        "assets/Seinfeld-Simpn.png",
        "assets/Fortnite-Character-Selector.png"
      ];

      //creat project titles and logos
      let thumbParent = document.getElementById("projectSelector");
      let div1 = document.createElement("div");
      div1.setAttribute(
        "class",
        "d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2 animated bounceInDown delay-0s"
      );

      let anchorTag = document.createElement("a");
      anchorTag.setAttribute("data-target", "#carouselExampleIndicators");
      anchorTag.setAttribute("data-slide-to", i);

      let div2 = document.createElement("div");

      let aPara = document.createElement("p");
      aPara.innerHTML = names[i];

      let div3 = document.createElement("div");
      div3.setAttribute("class", "imgC");

      let thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", projectImageLocations[i]);
      thumbImg.setAttribute("id", "reactLogo");
      thumbImg.setAttribute("class", "animated rubberBand delay-1s");

      div3.appendChild(thumbImg);
      div2.appendChild(aPara);

      anchorTag.appendChild(div2);
      anchorTag.appendChild(div3);

      div1.appendChild(anchorTag);
      thumbParent.appendChild(div1);
    }
  }
}

{
  /* <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="90000">
            <img
              src="assets/Crescent-City.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Crecesnt City Donuts</h5>
              <p>
                Crescent City Donuts is a factitious New Orleans staple serving
                amazing fried confections since 1967. Located in the Garden
                District, and serving the local community, Crescent City Donuts
                is a Big Easy tradition.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <img src="assets/Gift-Run.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Gift-RUN</h5>
              <p>
                Crescent City Donuts is a factitious New Orleans staple serving
                amazing fried confections since 1967. Located in the Garden
                District, and serving the local community, Crescent City Donuts
                is a Big Easy tradition.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <img src="assets/PIQ-Share.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>PiQ Share</h5>
              <p>
                Crescent City Donuts is a factitious New Orleans staple serving
                amazing fried confections since 1967. Located in the Garden
                District, and serving the local community, Crescent City Donuts
                is a Big Easy tradition.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <img
              src="assets/Movie-Search.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Movie-Search</h5>
              <p>
                Crescent City Donuts is a factitious New Orleans staple serving
                amazing fried confections since 1967. Located in the Garden
                District, and serving the local community, Crescent City Donuts
                is a Big Easy tradition.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <img
              src="assets/Seinfeld-Simpn.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Seinfeld-Simon</h5>
              <p>
                Crescent City Donuts is a factitious New Orleans staple serving
                amazing fried confections since 1967. Located in the Garden
                District, and serving the local community, Crescent City Donuts
                is a Big Easy tradition.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <img
              src="assets/Fortnite-Character-Selector.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Fortnite Character Selector</h5>
              <p>
                Crescent City Donuts is a factitious New Orleans staple serving
                amazing fried confections since 1967. Located in the Garden
                District, and serving the local community, Crescent City Donuts
                is a Big Easy tradition.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */
}

//titles and logos

{
  /* <div
class="d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
>
<a data-target="#carouselExampleIndicators" data-slide-to="0">
  <div><p>Crescent City Donuts</p></div>

  <div class="imgC">
    <img
      src="assets/react_logo.png"
      id="reactLogo"
      class="animated flip delay-3s"
    />
  </div>
</a>
</div>
<div
class="d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
>
<a data-target="#carouselExampleIndicators" data-slide-to="1">
  <div><p>Gift-RUN</p></div>

  <div class="imgC">
    <img
      src="assets/react_logo.png"
      id="reactLogo"
      class="animated flip delay-3s"
    />
  </div>
</a>
</div>
<div
class="d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
>
<a data-target="#carouselExampleIndicators" data-slide-to="2">
  <div><p>PiQ Share</p></div>

  <div class="imgC">
    <img
      src="assets/react_logo.png"
      id="reactLogo"
      class="animated flip delay-3s"
    />
  </div>
</a>
</div>
<div
class="d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
>
<a data-target="#carouselExampleIndicators" data-slide-to="3">
  <div><p>Movie-Search</p></div>

  <div class="imgC">
    <img
      src="assets/react_logo.png"
      id="reactLogo"
      class="animated flip delay-3s"
    />
  </div>
</a>
</div>
<div
class="d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
>
<a data-target="#carouselExampleIndicators" data-slide-to="4">
  <div><p>Seinfeld-Simon</p></div>

  <div class="imgC">
    <img
      src="assets/react_logo.png"
      id="reactLogo"
      class="animated flip delay-3s"
    />
  </div>
</a>
</div>
<div
class="d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
>
<a data-target="#carouselExampleIndicators" data-slide-to="5">
  <div><p>Fortnite Character</p></div>

  <div class="imgC">
    <img
      src="assets/react_logo.png"
      id="reactLogo"
      class="animated flip delay-3s"
    />
  </div>
</a>
</div> 
 */
}
