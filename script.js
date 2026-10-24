const themeToggle = document.getElementById("theme-toggle");
const currentYear = document.getElementById("year");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    themeToggle.textContent = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
});

currentYear.textContent = new Date().getFullYear();
