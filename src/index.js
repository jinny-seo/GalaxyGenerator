import "../styles/main.css";
document.getElementById("app").innerHTML = `
<div class="container">
  <div class="container-stars">
  </div>
  <div class="grid">
    <button id="add-star-button"><strong><span>+</span></strong></button>
  </div>
</div>
`;

// javascript starts here

var button = document.getElementById("button");
var addStarButton = document.getElementById("add-star-button");

function generateStar() {
  var star = document.createElement("div");
  var starMarginLeft = Math.floor(Math.random() * 100);
  var starMarginTop = Math.floor(Math.random() * 95);
  var starNumber = Math.random();
  var starSize = Math.floor(starNumber * 4.5) * 2;
  var pulseTime = Math.max(900, starNumber * 4000);
  var shadowBlur = Math.max(10, starNumber * 30) - Math.random() * 5;
  var shadowSpread = Math.max(1, starNumber * 5) - Math.random() * 3;

  star.classList.add("circle");

  Object.assign(star.style, {
    height: starSize + "px",
    width: starSize + "px",
    left: starMarginLeft + "%",
    top: starMarginTop + "%",
    "background-color": "white",
    "box-shadow":
      "0px 0px " +
      shadowBlur +
      "px " +
      shadowSpread +
      "px rgba(255,255,255,.8)",
    "border-radius": "50%/50%",
    animation: "pulse " + pulseTime + "ms ease-in-out infinite",
    position: "absolute"
  });

  // document.styleSheets[0].insertRule(
  //   "@keyframes pulse {\
  //     0 % {background-color: white; box-shadow: 0 0 14px #ffffff 0 %;}\
  //     50 % {background-color: white; box-shadow: 0 0 14px #ffffff 100%;}\
  //     100 % {background-color: white; box-shadow: 0 0 14px #fff 0 %;}",
  //   3
  // );

  document.getElementsByClassName("container-stars")[0].appendChild(star);
}

addStarButton.addEventListener("click", function() {
  var i = 0;
  while (i < Math.floor(Math.random() * 12)) {
    generateStar();
    i++;
  }
});
