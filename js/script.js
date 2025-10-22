// Smooth scroll for navigation links
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active section link
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '0.5rem 0.7rem';
scrollBtn.style.fontSize = '1.2rem';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '0.5rem';
scrollBtn.style.backgroundColor = '#333';
scrollBtn.style.color = 'white';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Contact form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});

// ---------------- LANGUAGE SWITCHER ----------------
const translations = {
  en: {
    home: "Home",
    tour: "On tour",
    books: "Books",
    contact: "Contact",
    newRelease: "NEW RELEASE",
    heroTitle: "Advanced PHP: From Zero to Hero",
    heroPublisher: "© 2023 KEA Publishing",

    // TOUR
    tourHeading: "On tour",
    tourRole: "Speaker",
    tourSubtitle: "Meet Tristan live at one of the events below:",

    // BOOKS
    booksHeading: "Books",
    booksSubtitle: "Explore Tristan's publications",

    // CONTACT
    contactHeading: "Contact",
    contactSubtitle: "Get in touch with Tristan",
    contactFormTitle: "Request booking or send message",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactBtn: "Send",

    // FOOTER
    footerAbout: "About Tristan",
    footerFollow: "Follow",
    footerRights: "All rights reserved"
  },

  da: {
    home: "Forside",
    tour: "På turné",
    books: "Bøger",
    contact: "Kontakt",
    newRelease: "NY UDGIVELSE",
    heroTitle: "Avanceret PHP: Fra Begynder til Mester",
    heroPublisher: "© 2023 KEA Forlag",

    // TOUR
    tourHeading: "På turné",
    tourRole: "Foredragsholder",
    tourSubtitle: "Mød Tristan live ved et af nedenstående events:",

    // BOOKS
    booksHeading: "Bøger",
    booksSubtitle: "Udforsk Tristans udgivelser",

    // CONTACT
    contactHeading: "Kontakt",
    contactSubtitle: "Kom i kontakt med Tristan",
    contactFormTitle: "Anmod om booking eller send besked",
    contactName: "Navn",
    contactEmail: "Email",
    contactMessage: "Besked",
    contactBtn: "Send",

    // FOOTER
    footerAbout: "Om Tristan",
    footerFollow: "Følg med",
    footerRights: "Alle rettigheder forbeholdes"
  }
};

const languageSwitcher = document.getElementById("languageSwitcher");

languageSwitcher.addEventListener("change", e => {
  const lang = e.target.value;
  const t = translations[lang];

  // NAVIGATION
  document.querySelector('.nav-list li:nth-child(1) a').textContent = t.home;
  document.querySelector('.nav-list li:nth-child(2) a').textContent = t.tour;
  document.querySelector('.nav-list li:nth-child(3) a').textContent = t.books;
  document.querySelector('.nav-list li:nth-child(4) a').textContent = t.contact;

  // HERO
  document.getElementById("newReleaseBtn").textContent = t.newRelease;
  document.querySelector(".book-title").textContent = t.heroTitle;
  document.querySelector(".hero-inner small").textContent = t.heroPublisher;

  // TOUR SECTION
  const tourHeading = document.querySelector(".tour h3");
  if (tourHeading) tourHeading.textContent = t.tourHeading;
  const tourSubtitle = document.querySelector(".tour .subtitle");
  if (tourSubtitle) tourSubtitle.textContent = t.tourSubtitle;

  // BOOKS SECTION
  const booksHeading = document.querySelector(".books h3");
  if (booksHeading) booksHeading.textContent = t.booksHeading;
  const booksSubtitle = document.querySelector(".books .subtitle");
  if (booksSubtitle) booksSubtitle.textContent = t.booksSubtitle;

  // CONTACT SECTION
  const contactHeading = document.querySelector(".contact h3");
  if (contactHeading) contactHeading.textContent = t.contactHeading;
  const contactSubtitle = document.querySelector(".contact .subtitle");
  if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;
  const contactFormTitle = document.querySelector(".request-booking");
  if (contactFormTitle) contactFormTitle.textContent = t.contactFormTitle;
  const nameLabel = document.querySelector('label[for="name"]');
  if (nameLabel) nameLabel.textContent = t.contactName;
  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = t.contactEmail;
  const messageLabel = document.querySelector('label[for="message"]');
  if (messageLabel) messageLabel.textContent = t.contactMessage;
  const submitBtn = document.querySelector(".btn-submit");
  if (submitBtn) submitBtn.textContent = t.contactBtn;

  // FOOTER
  const footerAbout = document.querySelector(".footer-col.left h4");
  if (footerAbout) footerAbout.textContent = t.footerAbout;
  const footerFollow = document.querySelector(".footer-col.left .mobile span");
  if (footerFollow) footerFollow.textContent = t.footerFollow;
  const footerRights = document.querySelector(".footer-bottom");
  if (footerRights) footerRights.textContent = t.footerRights;
});



// ---------------- NEW RELEASE BUTTON ----------------
const newReleaseBtn = document.getElementById("newReleaseBtn");

newReleaseBtn.addEventListener("click", () => {
  const booksSection = document.querySelector("#books");
  if (booksSection) {
    booksSection.scrollIntoView({ behavior: "smooth" });
  }
});
