const slider = document.getElementById("slider");

window.addEventListener("load", () => {
  for (let i = 1; i <= 10; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.style.setProperty("--position", i);

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("card-img");

    imageDiv.style.backgroundColor = getRandomColor();

    cardDiv.appendChild(imageDiv);

    slider.appendChild(cardDiv);
  }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let mousePressed = false;
let sliderGrabXVal = 0;

let allowSlideFromRight = false;
let allowSlideFromLeft = true;

slider.addEventListener("mousedown", () => {
  mousePressed = true;

  sliderGrabXVal = event.offsetX;

  console.log(`down ${mousePressed}`);
});

slider.addEventListener("mousemove", (event) => {
  if (!mousePressed) {
    return;
  } else {
    let xVal = event.clientX;

    if (xVal - sliderGrabXVal <= -10 && xVal - sliderGrabXVal >= -1400) {
      slider.style.left = `${xVal - sliderGrabXVal}px`;
    }
  }
});

slider.addEventListener("mouseup", () => {
  mousePressed = false;
  sliderGrabXVal = 0;
  console.log(`up ${mousePressed}`);
});
