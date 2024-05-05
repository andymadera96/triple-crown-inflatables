const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

document.querySelectorALL(`.slider img`).forEach((image) => {
  image.onclick = () => {
    document.querySelector(`.popup-image`).style.display = `block`;
    document.querySelector(`.popup-image img`).src = image.getAttribute(`src`);
  };
});

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  //   document.getElementsByClassName("mySlides").style.width = "100%";
  //   document.getElementsByClassName("mySlides").style.height = "550px";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//purple modal javascript//
function openPurple() {
  document.getElementById("purple").style.display = "block";
}

function closePurple() {
  document.getElementById("purple").style.display = "none";
}

var purpleSlideIndex = 1;
showPurpleSlides(purpleSlideIndex);

//next/previous controls
function plusSlidesPurple(n) {
  showPurpleSlides((purpleSlideIndex += n));
}

//thumbnail image controls
function currentSlidePurple(n) {
  showPurpleSlides((purpleSlideIndex = n));
}

function showPurpleSlides(n) {
  var purple;
  var purpleSlides = document.getElementsByClassName("myPurpleSlides");
  var purpleDots = document.getElementsByClassName("demoPurple");
  if (n > purpleSlides.length) {
    purpleSlideIndex = 1;
  }
  if (n < 1) {
    purpleSlideIndex = purpleSlides.length;
  }
  for (purple = 0; purple < purpleSlides.length; purple++) {
    purpleSlides[purple].style.display = "none";
  }
  for (purple = 0; purple < purpleDots.length; purple++) {
    purpleDots[purple].className = purpleDots[purple].className.replace(
      "active",
      ""
    );
  }
  purpleSlides[purpleSlideIndex - 1].style.display = "block";
  purpleDots[purpleSlideIndex - 1].className += "active";
}

// blue javascript//
function openBlue() {
  document.getElementById("blue").style.display = "block";
}

function closeBlue() {
  document.getElementById("blue").style.display = "none";
}

var blueSlideIndex = 1;
showBlueSlides(blueSlideIndex);

function plusSlidesBlue(n) {
  showBlueSlides((blueSlideIndex += n));
}

//thumbnail image controls
function currentSlideBlue(n) {
  showBlueSlides((blueSlideIndex = n));
}

function showBlueSlides(n) {
  var blue;
  var blueSlides = document.getElementsByClassName("myBlueSlides");
  var blueDots = document.getElementsByClassName("demoBlue");
  if (n > blueSlides.length) {
    blueSlideIndex = 1;
  }
  if (n < 1) {
    blueSlideIndex = blueSlides.length;
  }
  for (blue = 0; blue < blueSlides.length; blue++) {
    blueSlides[blue].style.display = "none";
  }
  for (blue = 0; blue < blueDots.length; blue++) {
    blueDots[blue].className = blueDots[blue].className.replace("active", "");
  }
  blueSlides[blueSlideIndex - 1].style.display = "block";
  blueDots[blueSlideIndex - 1].className += "active";
}
// Fun javascript//
function openFun() {
  document.getElementById("fun").style.display = "block";
}

function closeFun() {
  document.getElementById("fun").style.display = "none";
}

var funSlideIndex = 1;
showFunSlides(funSlideIndex);

function plusSlidesFun(n) {
  showFunSlides((funSlideIndex += n));
}

//thumbnail image controls
function currentSlideFun(n) {
  showFunSlides((funSlideIndex = n));
}

function showFunSlides(n) {
  var fun;
  var funSlides = document.getElementsByClassName("myFunSlides");
  var funDots = document.getElementsByClassName("demoFun");
  if (n > funSlides.length) {
    funSlideIndex = 1;
  }
  if (n < 1) {
    funSlideIndex = funSlides.length;
  }
  for (fun = 0; fun < funSlides.length; fun++) {
    funSlides[fun].style.display = "none";
  }
  for (fun = 0; fun < funDots.length; fun++) {
    funDots[fun].className = funDots[fun].className.replace("active", "");
  }
  funSlides[funSlideIndex - 1].style.display = "block";
  funDots[funSlideIndex - 1].className += "active";
}
// USA javascript//
function openUsa() {
  document.getElementById("usa").style.display = "block";
}

function closeUsa() {
  document.getElementById("usa").style.display = "none";
}

var usaSlideIndex = 1;
showUsaSlides(usaSlideIndex);

function plusSlidesUsa(n) {
  showUsaSlides((usaSlideIndex += n));
}

//thumbnail image controls
function currentSlideUsa(n) {
  showUsaSlides((usaSlideIndex = n));
}

function showUsaSlides(n) {
  var usa;
  var usaSlides = document.getElementsByClassName("myUsaSlides");
  var usaDots = document.getElementsByClassName("demoUsa");
  if (n > usaSlides.length) {
    usaSlideIndex = 1;
  }
  if (n < 1) {
    usaSlideIndex = usaSlides.length;
  }
  for (usa = 0; usa < usaSlides.length; usa++) {
    usaSlides[usa].style.display = "none";
  }
  for (usa = 0; usa < usaDots.length; usa++) {
    usaDots[usa].className = usaDots[usa].className.replace("active", "");
  }
  usaSlides[usaSlideIndex - 1].style.display = "block";
  usaDots[usaSlideIndex - 1].className += "active";
}
// Purple Wave javascript//
function openWave() {
  document.getElementById("wave").style.display = "block";
}

function closeWave() {
  document.getElementById("wave").style.display = "none";
}

var waveSlideIndex = 1;
showWaveSlides(waveSlideIndex);

function plusSlidesWave(n) {
  showWaveSlides((waveSlideIndex += n));
}

//thumbnail image controls
function currentSlideWave(n) {
  showWaveSlides((waveSlideIndex = n));
}

function showWaveSlides(n) {
  var wave;
  var waveSlides = document.getElementsByClassName("myWaveSlides");
  var waveDots = document.getElementsByClassName("demoWave");
  if (n > waveSlides.length) {
    waveSlideIndex = 1;
  }
  if (n < 1) {
    waveSlideIndex = waveSlides.length;
  }
  for (wave = 0; wave < waveSlides.length; wave++) {
    waveSlides[wave].style.display = "none";
  }
  for (wave = 0; wave < waveDots.length; wave++) {
    waveDots[wave].className = waveDots[wave].className.replace("active", "");
  }
  waveSlides[waveSlideIndex - 1].style.display = "block";
  waveDots[waveSlideIndex - 1].className += "active";
}

// contact page
const form = document.querySelector("form");
{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("required") != -1 ||
        response.indexOf("valid") != -1 ||
        response.indexOf("failed") != -1
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
}

