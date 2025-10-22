// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Hent alle sektioner og nav-links
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".main-nav a");

  // Skjul alle sektioner undtagen hero ved start
  sections.forEach((section, i) => {
    if (i !== 0) section.style.display = "none";
  });

  // Når man klikker på et link i navigationen
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Fjern aktiv styling fra alle links
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Skjul alle sektioner
      sections.forEach(sec => sec.style.display = "none");

      // Find målsektionen via href="#id"
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Vis målsektionen
      if (targetSection) {
        targetSection.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
});
