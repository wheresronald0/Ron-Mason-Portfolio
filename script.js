$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// $(function() {
//   $("#myCarousel").carousel(1);
// });

function animateCarousel() {
  if (!document.getElementById("reactLogo")) {
    var parent = document.getElementById("cItem");
    var img = document.createElement("img");
    img.setAttribute("src", "assets/Crescent-City.png");
    img.setAttribute("class", "d-block w-100");
    parent.appendChild(img);
    document
      .getElementById("projectCarousel")
      .setAttribute("class", "container animated bounceInUp delay-0s");

    //creat project titles and logos
    var thumbParent = document.getElementById("projectSelector");
    var div1 = document.createElement("div");
    div1.setAttribute(
      "class",
      "d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2 animated bounceInDown delay-0s"
    );

    var anchorTag = document.createElement("a");
    anchorTag.setAttribute("data-target", "#carouselExampleIndicators");
    anchorTag.setAttribute("data-slide-to", "0");

    var div2 = document.createElement("div");

    var aPara = document.createElement("p");
    aPara.innerHTML = "Crescent City Donuts";

    var div3 = document.createElement("div");
    div3.setAttribute("class", "imgC");

    var thumbImg = document.createElement("img");
    thumbImg.setAttribute("src", "assets/react_logo.png");
    thumbImg.setAttribute("id", "reactLogo");
    thumbImg.setAttribute("class", "animated pulse delay-1s");

    div3.appendChild(thumbImg);
    div2.appendChild(aPara);

    anchorTag.appendChild(div2);
    anchorTag.appendChild(div3);

    div1.appendChild(anchorTag);
    thumbParent.appendChild(div1);
  }
}

// function createThumbs() {
//   var thumbParent = document.getElementById("projectSelector");
//   var div1 = document.createElement("div");
//   div1.setAttribute(
//     "class",
//     "d-flex flex-column flex-direction: column justify-content-between col-sm-6 col-md-4 col-lg-2"
//   );

//   var anchorTag = document.createElement("a");
//   anchorTag.setAttribute("data-target", "#carouselExampleIndicators");
//   anchorTag.setAttribute("data-slide-to", "0");

//   var div2 = document.createElement("div");

//   var aPara = document.createElement("p");
//   aPara.innerHTML = "Crescent City Donuts";

//   var div3 = document.createElement("div");
//   div3.setAttribute("class", "imgC");

//   var thumbImg = document.createElement("img");
//   thumbImg.setAttribute("src", "assets/react_logo.png");
//   thumbImg.setAttribute("id", "reactLogo");
//   thumbImg.setAttribute("class", "animated flip delay-0s");

//   div3.appendChild(thumbImg);
//   div2.appendChild(aPara);

//   anchorTag.appendChild(div2);
//   anchorTag.appendChild(div3);

//   div1.appendChild(anchorTag);
//   thumbParent.appendChild(div1);
// }

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
