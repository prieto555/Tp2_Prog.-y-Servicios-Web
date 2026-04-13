const themeStorageKey = "theme-preference";
const body = document.body;
const toggle = document.getElementById("dark-mode-toggle");
const header = document.querySelector("header");
const lucideIcons = {
    moon: `
        <svg class="theme-toggle-svg lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
        </svg>
    `,
    sun: `
        <svg class="theme-toggle-svg lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    `
};

function updateToggle(theme) {
    if (!toggle) {
        return;
    }

    const isDark = theme === "dark";
    const icon = isDark ? lucideIcons.sun : lucideIcons.moon;

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
