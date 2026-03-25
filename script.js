const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  },
);

document
  .querySelectorAll(".section-heading, .value-card, .timeline-item, .project-card, .skills-panel, .education-panel, .contact-card")
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

const updateActiveLink = () => {
  const current = sections.findLast((section) => window.scrollY + 160 >= section.offsetTop);
  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("active", Boolean(isActive));
  });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("load", updateActiveLink);
