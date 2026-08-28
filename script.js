// Navbar toggle (mobile)
let menuBtn = document.getElementById("menu-btn");
let nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// Smooth scroll (for nav links)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    let targetId = this.getAttribute("href");
    let targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    // mobile menu close after click
    nav.classList.remove("active");
  });
});


// Scroll to top button
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Hero image pop animation (delay effect)
window.addEventListener("load", () => {
  let circle = document.querySelector(".circle");

  circle.style.opacity = "0";
  circle.style.transform = "scale(0.5)";

  setTimeout(() => {
    circle.style.opacity = "1";
    circle.style.transform = "scale(1)";
  }, 300);
});

const roles = ["Web Developer", "Frontend Designer", "Programmer"];
let index = 0;
let charIndex = 0;
let typingText = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typingText.innerHTML += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.innerHTML = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

window.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});


let toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggle.innerText = "☀";
  } else {
    toggle.innerText = "🌙";
  }
});

window.addEventListener("load", () => {
  let loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

const text = ["Web Developer", "Full Stack Developer", "Coder"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.getElementById("typing").innerHTML = currentText;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({
    behavior:"smooth"
});
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};

// INIT EMAILJS
(function () {
  emailjs.init("pao_p0b3RdYnE987a");
})();

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function (e) {

  e.preventDefault();

  const form = e.target;

  const templateParams = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    message: form.elements["message"].value
  };

  console.log("Sending:", templateParams);

  emailjs.send(
    "service_od7el2g",
    "template_2bo79be",
    templateParams
  )
  .then(function (response) {

    console.log("SUCCESS:", response);

    alert("Message Sent Successfully ✅");

    form.reset();

  })
  .catch(function (error) {

    console.log("EMAILJS FAILED:", error);

    alert("Failed to send ❌");
  });

});