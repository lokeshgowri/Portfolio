document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll Navigation
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // adjust for sticky nav
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight current section in nav
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-blue-400");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("text-blue-400");
      }
    });
  });

  // Animate skill tags on hover
  const skillTags = document.querySelectorAll(".skill-tag");
  skillTags.forEach(tag => {
    tag.style.transition = "transform 0.3s ease";
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "scale(1.1)";
    });
    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "scale(1)";
    });
  });

  // Animate project cards on hover
  const projectCards = document.querySelectorAll("#projects .card");
  projectCards.forEach(card => {
    card.style.transition = "transform 0.3s ease";
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Dynamic copyright
  const year = new Date().getFullYear();
  const footerText = document.querySelector("footer p");
  if (footerText) {
    footerText.textContent = `© ${year} G Lokeswara Reddy. All rights reserved.`;
  }

  // Back to Top Button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.className =
    "fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 z-50";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0");
      backToTopBtn.classList.add("opacity-100");
    } else {
      backToTopBtn.classList.remove("opacity-100");
      backToTopBtn.classList.add("opacity-0");
    }
  });
});
