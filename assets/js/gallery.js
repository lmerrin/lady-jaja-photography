const grid = document.querySelector('[data-gallery-grid]');
const status = document.querySelector('[data-gallery-status]');
const filterButtons = document.querySelectorAll('[data-filter]');

const categoryLabels = {
  maternity: 'Maternity', weddings: 'Weddings & Engagements', events: 'Events',
  seniors: 'Senior Portraits', kids: 'Kids', portraits: 'Individual Portraits',
  family: 'Family Portraits', creative: 'Creative & Landscape',
  'family-stories': 'Family Stories', home: 'Featured Work'
};

function altText(item, index) {
  const label = categoryLabels[item.category] || 'Photography';
  return `${label} photograph by Lady Jaja Photography on Oʻahu, image ${index + 1}`;
}

async function loadGallery() {
  if (!grid) return;
  try {
    const response = await fetch('assets/images/manifest.json');
    if (!response.ok) throw new Error('Gallery manifest did not load');
    const items = (await response.json()).filter(item => !item.file.endsWith('.png'));
    grid.innerHTML = items.map((item, index) => `
      <button class="gallery-item" type="button" data-category="${item.category}" data-lightbox aria-label="Enlarge ${categoryLabels[item.category] || 'portfolio'} image ${index + 1}">
        <img src="${item.file}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" alt="${altText(item, index)}">
      </button>`).join('');
    showCategory('all');
    document.dispatchEvent(new Event('gallery:loaded'));
  } catch (error) {
    grid.innerHTML = '<p>The portfolio could not be loaded. Please refresh the page or contact Jaja directly.</p>';
    if (status) status.textContent = '';
  }
}

function showCategory(category) {
  const items = [...grid.querySelectorAll('.gallery-item')];
  let count = 0;
  items.forEach(item => {
    const visible = category === 'all' || item.dataset.category === category;
    item.hidden = !visible;
    if (visible) count += 1;
  });
  if (status) status.textContent = `Showing ${count} photographs`;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    showCategory(button.dataset.filter);
  });
});

loadGallery();
