const header = document.querySelector("[data-elevate]");
const slides = [...document.querySelectorAll(".hero-slide")];
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const tabPanels = [...document.querySelectorAll("[data-panel]")];
const accordions = [...document.querySelectorAll(".accordion")];
const comparison = document.querySelector("[data-comparison]");
const cursorGlow = document.querySelector(".cursor-glow");

let activeSlide = 0;

function elevateHeader() {
  header?.classList.toggle("is-elevated", window.scrollY > 24);
}

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });
}

function cycleHero() {
  if (slides.length < 2) return;
  activeSlide = (activeSlide + 1) % slides.length;
  showSlide(activeSlide);
}

function activateTab(tabName) {
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
}

function toggleAccordion(accordion) {
  const trigger = accordion.querySelector(".accordion-trigger");
  const willOpen = !accordion.classList.contains("is-open");

  accordion.classList.toggle("is-open", willOpen);
  trigger?.setAttribute("aria-expanded", String(willOpen));
}

function setComparison(value) {
  const after = comparison?.querySelector("[data-after]");
  const handle = comparison?.querySelector("[data-handle]");

  if (!after || !handle) return;

  after.style.width = `${value}%`;
  handle.style.left = `${value}%`;
}

function moveCursorGlow(event) {
  if (!cursorGlow) return;

  cursorGlow.style.transform = `translate3d(${event.clientX - 176}px, ${event.clientY - 176}px, 0)`;
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

elevateHeader();
showSlide(activeSlide);
setInterval(cycleHero, 5200);
