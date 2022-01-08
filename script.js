let isModelOpen = false;
let isAboutOpen = false;
let contrastToggle = false;

var slideIndex = 1;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"

  } else {
    document.body.classList.remove("dark-theme")
  }
}


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.model__overlay--loading');
  const success = document.querySelector('.model__overlay--success');
  loading.classList += " model__overlay--visible"
  emailjs
    .sendForm(
      'service_i37lleq',
      'template_g3o7jc6',
      event.target,
      'user_hWvLrmHqw4gG9NX2HMToy'
    ).then(() => {
      loading.classList.remove("model__overlay--visible");
      success.classList += " model__overlay--visible";
    }).catch(() => {
      console.log('Catch', event);
      loading.classList.remove("model__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on ericwang7398@gmail.com"
      );
    })
}

function toggleModel() {
  if (isModelOpen) {
    isModelOpen = false;
    return document.body.classList.remove("model--open")
  }
  isModelOpen = true;
  document.body.classList += " model--open"
}
function toggleAbout() {
  if (isAboutOpen) {
    isAboutOpen = false;
    return document.body.classList.remove("about--open")
  }
  isAboutOpen = true;
  document.body.classList += " about--open"
  showSlides(slideIndex);
}



showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}