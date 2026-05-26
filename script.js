const header = document.querySelector("[data-elevate]");
const slides = [...document.querySelectorAll(".hero-slide")];
const tabButtons = [...document.querySelectorAll("[data-tab]")];
const tabPanels = [...document.querySelectorAll("[data-panel]")];
const accordions = [...document.querySelectorAll(".accordion")];
const comparison = document.querySelector("[data-comparison]");
const cursorGlow = document.querySelector(".cursor-glow");
const bookingModal = document.querySelector("[data-booking-modal]");
const bookingOpeners = [...document.querySelectorAll("[data-booking-open]")];
const bookingClosers = [...document.querySelectorAll("[data-booking-close]")];
const bookingForm = document.querySelector("[data-booking-form]");
const serviceSelect = document.querySelector("[data-service-select]");
const bookingNote = document.querySelector("[data-booking-note]");

let activeSlide = 0;
let lastFocusedElement = null;

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

function openBookingModal(service) {
  if (!bookingModal) return;

  lastFocusedElement = document.activeElement;
  bookingModal.hidden = false;
  document.body.classList.add("modal-open");

  if (service && serviceSelect) {
    serviceSelect.value = service;
  }

  if (bookingNote) {
    bookingNote.textContent = "";
  }
  bookingModal.querySelector(".modal-close")?.focus();
}

function closeBookingModal() {
  if (!bookingModal) return;

  bookingModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
}

window.addEventListener("scroll", elevateHeader, { passive: true });
window.addEventListener("pointermove", moveCursorGlow, { passive: true });
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bookingModal && !bookingModal.hidden) {
    closeBookingModal();
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion-trigger");
  trigger?.addEventListener("click", () => toggleAccordion(accordion));
});

bookingOpeners.forEach((opener) => {
  opener.addEventListener("click", () => openBookingModal(opener.dataset.service));
});

bookingClosers.forEach((closer) => {
  closer.addEventListener("click", closeBookingModal);
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (bookingNote) {
    bookingNote.textContent = "Request saved locally. Connect the CRM widget to complete real-time booking.";
  }
});

if (comparison) {
  const range = comparison.querySelector("[data-range]");
  range?.addEventListener("input", (event) => setComparison(event.target.value));
  setComparison(range?.value || 50);
}

elevateHeader();
showSlide(activeSlide);
setInterval(cycleHero, 5200);
