const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});



function openForm(packageName) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first");
    openLogin();
    return;
  }

  document.getElementById("bookingForm").style.display = "flex";
  document.getElementById("packageName").value = packageName;
}

function closeForm() {
  document.getElementById("bookingForm").style.display = "none";
}


function openLogin() {
  document.getElementById("loginForm").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginForm").style.display = "none";
}


function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "user@gmail.com" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful");
    closeLogin();
    updateUI();
  } else {
    alert("Invalid credentials");
  }
}

function handleLoginClick() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    localStorage.removeItem("isLoggedIn");
    updateUI();
  } else {
    openLogin();
  }
}


function updateUI() {
  const btn = document.getElementById("loginBtn");

  if (localStorage.getItem("isLoggedIn") === "true") {
    btn.innerText = "LOGOUT";
  } else {
    btn.innerText = "LOGIN";
  }
}


updateUI();