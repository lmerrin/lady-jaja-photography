const portfolio = document.querySelector('[data-portfolio-groups]');

const categoryLabels = {
  maternity: 'Maternity', weddings: 'Weddings & Engagements', events: 'Events',
  seniors: 'Senior Portraits', kids: 'Kids', portraits: 'Individual Portraits',
  family: 'Family Portraits', creative: 'Creative & Landscape',
  'family-stories': 'Family Stories', home: 'Featured Work'
};

const portfolioGroups = [
  {
    id: 'family-maternity',
    eyebrow: 'Family, maternity & keiki',
    title: 'The people who make life feel like home.',
    description: 'Family connection, growing seasons, childhood energy and the beautifully unscripted moments in between.',
    categories: ['family', 'family-stories', 'maternity', 'kids', 'home']
  },
  {
    id: 'couples-weddings',
    eyebrow: 'Couples, engagements & weddings',
    title: 'Connection worth celebrating.',
    description: 'Warm, natural photographs for proposals, engagements, couples and intimate wedding days.',
    categories: ['weddings']
  },
  {
    id: 'portraits-seniors',
    eyebrow: 'Portraits & seniors',
    title: 'A season that deserves to be seen.',
    description: 'Expressive individual, graduation and senior portraits with personality and ease.',
    categories: ['portraits', 'seniors']
  },
  {
    id: 'events',
    eyebrow: 'Events & celebrations',
    title: 'The energy, the details, the people.',
    description: 'Story-driven coverage of parties, gatherings and meaningful celebrations across Oʻahu.',
    categories: ['events']
  },
  {
    id: 'creative',
    eyebrow: 'Creative work',
    title: 'A little room to play.',
    description: 'Creative portraits, landscapes and visual experiments from Jaja’s wider body of work.',
    categories: ['creative']
  }
];

function altText(item, index) {
  const label = categoryLabels[item.category] || 'Photography';
  return `${label} photograph by Lady Jaja Photography on Oʻahu, image ${index + 1}`;
}

async function loadGallery() {
  if (!portfolio) return;
  try {
    const response = await fetch('assets/images/manifest.json');
    if (!response.ok) throw new Error('Gallery manifest did not load');
    const items = (await response.json()).filter(item => !item.file.endsWith('.png'));
    portfolio.innerHTML = portfolioGroups.map(group => {
      const groupItems = items.filter(item => group.categories.includes(item.category));
      return `
        <section class="portfolio-category" id="${group.id}" aria-labelledby="${group.id}-title">
          <div class="portfolio-category__heading reveal is-visible">
            <div><p class="eyebrow">${group.eyebrow}</p><h2 id="${group.id}-title">${group.title}</h2></div>
            <p>${group.description}</p>
          </div>
          <div class="gallery-grid">
            ${groupItems.map((item, index) => `
              <button class="gallery-item" type="button" data-lightbox aria-label="Enlarge ${categoryLabels[item.category] || 'portfolio'} image ${index + 1}">
                <img src="${item.file}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" alt="${altText(item, index)}">
              </button>`).join('')}
          </div>
        </section>`;
    }).join('');
    const categories = portfolio.querySelectorAll('.portfolio-category');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const categoryObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-arrived');
            categoryObserver.unobserve(entry.target);
          }
        });
      }, { threshold: .08, rootMargin: '0px 0px -8% 0px' });
      categories.forEach(category => categoryObserver.observe(category));
    } else {
      categories.forEach(category => category.classList.add('is-arrived'));
    }
    document.dispatchEvent(new Event('gallery:loaded'));
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }));
    }
  } catch (error) {
    portfolio.innerHTML = '<p>The portfolio could not be loaded. Please refresh the page or contact Jaja directly.</p>';
  }
}

loadGallery();
