const themeStorageKey = "theme-preference";
const body = document.body;
const toggle = document.getElementById("dark-mode-toggle");
const header = document.querySelector("header");

function updateToggle(theme) {
    if (!toggle) {
        return;
    }

    const isDark = theme === "dark";
    const icon = isDark ? "☀" : "☾";

    toggle.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${icon}</span>`;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("dark-mode", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    updateToggle(theme);
}

function getInitialTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);

    if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

function updateHeaderOnScroll() {
    if (!header) {
        return;
    }

    header.classList.toggle("header-scrolled", window.scrollY > 12);
}

if (toggle) {
    toggle.addEventListener("click", () => {
        const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem(themeStorageKey, nextTheme);
    });
}

updateHeaderOnScroll();
window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
