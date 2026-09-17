const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
    body.classList.toggle('nav-open', !open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      body.classList.remove('nav-open');
    }
  });
}

document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
  });
});

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add('is-visible'));
}

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('a[href*="instagram.com/ladyjajaphotography"]').forEach(link => {
  link.href = 'https://www.instagram.com/ladyjajaphotography?igshid=pebsprfggkbb';
  link.classList.add('instagram-link');
  if (!link.querySelector('svg')) {
    link.insertAdjacentHTML('afterbegin', '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>');
  }
});

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
let returnFocus = null;

function openLightbox(button) {
  if (!lightbox || !lightboxImage) return;
  const image = button.querySelector('img');
  returnFocus = button;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
  lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  body.classList.remove('modal-open');
  returnFocus?.focus();
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-lightbox]');
  if (trigger) openLightbox(trigger);
  if (event.target === lightbox || event.target.closest('.lightbox-close')) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox?.classList.contains('is-open')) closeLightbox();
});
