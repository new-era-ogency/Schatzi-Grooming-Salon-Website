const header = document.querySelector("[data-elevate]");
const slides = [...document.querySelectorAll(".hero-slide")];
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const tabPanels = [...document.querySelectorAll("[data-panel]")];
const accordions = [...document.querySelectorAll(".accordion")];
const comparison = document.querySelector("[data-comparison]");
const cursorGlow = document.querySelector(".cursor-glow");
const heroTitle = document.querySelector("#hero-title");
const careQuiz = document.querySelector("[data-care-quiz]");
const quizResult = document.querySelector("[data-quiz-result]");
const cookieNotice = document.querySelector("[data-cookie-notice]");
const cookieEssential = document.querySelector("[data-cookie-essential]");
const cookieAll = document.querySelector("[data-cookie-all]");
const revealTargets = [...document.querySelectorAll(".section, .footer, .contact-section")];

let activeSlide = 0;
function scheduleWork(task) {
  requestAnimationFrame(() => {
    if (navigator.scheduling?.isInputPending?.()) {
      requestAnimationFrame(task);
      return;
    }

    task();
  });
}

function elevateHeader() {
  scheduleWork(() => {
    header?.classList.toggle("is-elevated", window.scrollY > 24);
  });
}

function showSlide(index) {
  scheduleWork(() => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
  });
}

function cycleHero() {
  if (slides.length < 2) return;
  activeSlide = (activeSlide + 1) % slides.length;
  showSlide(activeSlide);
}

function activateTab(tabName) {
  scheduleWork(() => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabName;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
}

function toggleAccordion(accordion) {
  scheduleWork(() => {
    const trigger = accordion.querySelector(".accordion-trigger");
    const willOpen = !accordion.classList.contains("is-open");

    accordion.classList.toggle("is-open", willOpen);
    trigger?.setAttribute("aria-expanded", String(willOpen));
  });
}

function setComparison(value) {
  scheduleWork(() => {
    const after = comparison?.querySelector("[data-after]");
    const handle = comparison?.querySelector("[data-handle]");

    if (!after || !handle) return;

    after.style.width = `${value}%`;
    handle.style.left = `${value}%`;
  });
}

function moveCursorGlow(event) {
  if (!cursorGlow) return;

  scheduleWork(() => {
    cursorGlow.style.transform = `translate3d(${event.clientX - 176}px, ${event.clientY - 176}px, 0)`;
  });
}

function personalizeHero() {
  if (!heroTitle) return;

  const hour = new Date().getHours();

  if (hour >= 18 || hour < 5) {
    heroTitle.textContent = "Добрый вечер! Запишите питомца на утренний SPA-ритуал.";
    return;
  }

  if (hour < 12) {
    heroTitle.textContent = "Доброе утро! Начните день с calm grooming ritual.";
  }
}

function updateQuizRecommendation() {
  if (!careQuiz || !quizResult) return;

  const formData = new FormData(careQuiz);
  const petType = formData.get("petType");
  const breedSize = formData.get("breedSize");
  const goal = formData.get("goal");

  const recommendations = {
    hygiene: "Гигиенический уход: купание, когти, ушки, лапки и деликатный финиш.",
    haircut: "Стрижка и форма: breed-conscious trim + консультация мастера по силуэту.",
    spa: "SPA-восстановление: маска, увлажнение, блеск шерсти и анти-фриз финиш.",
    sensitive: "Sensitive Ritual: мягкое очищение, спокойная сушка и продукты без лишней отдушки.",
  };

  const sizeNote = breedSize === "large" ? " Для крупной породы заложим больше времени на сушку и вычес." : "";
  const catNote = petType === "cat" ? " Для кошки мастер подберет максимально спокойный темп без лишнего стресса." : "";

  scheduleWork(() => {
    quizResult.textContent = `Рекомендация: ${recommendations[goal] || recommendations.hygiene}${sizeNote}${catNote}`;
  });
}

function setCookieChoice(choice) {
  try {
    localStorage.setItem("schatzi-cookie-choice", choice);
  } catch {
    // If storage is blocked, keep the notice dismissible for this session.
  }
  cookieNotice.hidden = true;
}

function setupCookieNotice() {
  if (!cookieNotice) return;

  let storedChoice = "";

  try {
    storedChoice = localStorage.getItem("schatzi-cookie-choice");
  } catch {
    storedChoice = "";
  }

  cookieNotice.hidden = Boolean(storedChoice);
}

function setupRevealAnimations() {
  revealTargets.forEach((target) => target.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

window.addEventListener("scroll", elevateHeader, { passive: true });
window.addEventListener("pointermove", moveCursorGlow, { passive: true });

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion-trigger");
  trigger?.addEventListener("click", () => toggleAccordion(accordion));
});

if (comparison) {
  const range = comparison.querySelector("[data-range]");
  range?.addEventListener("input", (event) => setComparison(event.target.value));
  setComparison(range?.value || 50);
}

careQuiz?.addEventListener("input", updateQuizRecommendation, { passive: true });
cookieEssential?.addEventListener("click", () => setCookieChoice("essential"));
cookieAll?.addEventListener("click", () => setCookieChoice("all"));

personalizeHero();
updateQuizRecommendation();
setupCookieNotice();
setupRevealAnimations();
elevateHeader();
showSlide(activeSlide);
setInterval(cycleHero, 5200);
