const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Theme Toggle Function
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  // Update background color of Home, About, and Contact sections based on the theme
  const sections = document.querySelectorAll("#home, #about, #contact");
  sections.forEach(section => {
    section.style.transition = "background-color 0.5s ease"; // Add transition effect
    section.style.backgroundColor = getComputedStyle(body).getPropertyValue("--bg-color");
  });
});

// Check if the current theme is dark or light
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeIcon.src = "images/sun-regular.svg"; // Change icon to sun if dark theme
  } else {
    themeIcon.src = "images/moon-regular.svg"; // Change icon to moon if light theme
  }
}

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Change icon based on the new theme
  if (newTheme === "dark") {
    themeIcon.src = "images/sun-regular.svg";
  } else {
    themeIcon.src = "images/moon-regular.svg";
  }
});

// Smooth scrolling for navbar links
const navbarLinks = document.querySelectorAll(".navbar-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});