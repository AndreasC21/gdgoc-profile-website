document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  const body = document.body;
  body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  const lightIcon = document.querySelector(".light");
  const darkIcon = document.querySelector(".dark");
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";

  const profileLight = document.querySelector("#lightPFP");
  const profileDark = document.querySelector("#darkPFP");
  profileLight.classList.remove("active");
  profileDark.classList.add("active");

  const mobileLightIcon = document.querySelector(".nav-mobile-item .light");
  const mobileDarkIcon = document.querySelector(".nav-mobile-item .dark");
  mobileLightIcon.style.display = "block";
  mobileDarkIcon.style.display = "none";
}

function lightMode() {
  const body = document.body;

  body.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");

  const lightIcon = document.querySelector(".light");
  const darkIcon = document.querySelector(".dark");
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";

  const profileLight = document.querySelector("#lightPFP");
  const profileDark = document.querySelector("#darkPFP");
  profileLight.classList.add("active");
  profileDark.classList.remove("active");

  const mobileLightIcon = document.querySelector(".nav-mobile-item .light");
  const mobileDarkIcon = document.querySelector(".nav-mobile-item .dark");
  mobileLightIcon.style.display = "none";
  mobileDarkIcon.style.display = "block";
}

function openNavMobile() {
  const nav = document.querySelector(".nav-mobile");
  nav.style.display = "flex";
}

function closeNavMobile() {
  const nav = document.querySelector(".nav-mobile");
  nav.style.display = "none";
}
