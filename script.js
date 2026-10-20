document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreAbout = document.getElementById("moreAbout");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const currentYear = document.getElementById("currentYear");
    const activityFourBtn = document.getElementById("activityFourBtn");

    // Automatically update the copyright year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Dark mode
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
        });
    }

    // Read More button
    if (readMoreBtn && moreAbout) {
        readMoreBtn.addEventListener("click", function () {
            const isHidden = moreAbout.classList.toggle("hidden");

            readMoreBtn.textContent = isHidden ? "Read More" : "Read Less";
        });
    }

    // Mobile navigation menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            const isOpen = navLinks.classList.contains("show");
            menuToggle.textContent = isOpen ? "✕" : "☰";
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Open navigation");
            });
        });
    }

    // Highlight the navigation link for the current section
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 130;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        links.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Activity 4: remind you to add your actual activity URL
    if (activityFourBtn) {
        activityFourBtn.addEventListener("click", function () {
            alert(
                "Open index.html and add your Activity 4 URL to the button's link."
            );
        });
    }
});
