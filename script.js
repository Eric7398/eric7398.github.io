let isModelOpen = false;
let contrastToggle = false;

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
