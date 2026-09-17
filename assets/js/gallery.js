const portfolio = document.querySelector("[data-portfolio-groups]");

const categoryLabels = {
  family: "Family Portrait",
  newborn: "Newborn",
  kids: "Kids",
  portraits: "Self Portrait",
  maternity: "Maternity",
  seniors: "Senior Portraits",
  weddings: "Wedding",
  events: "Events",
  landscape: "Landscape",
};

const newbornFiles = new Set([
  "assets/images/kids-02.webp",
  "assets/images/kids-03.webp",
  "assets/images/kids-06.webp",
  "assets/images/kids-09.webp",
  "assets/images/kids-13.webp",
  "assets/images/home-05.webp",
]);
const kidsFromFamily = new Set([
  "assets/images/family-stories-08.webp",
  "assets/images/family-stories-11.webp",
]);

function displayCategory(item) {
  if (newbornFiles.has(item.file)) return "newborn";
  if (kidsFromFamily.has(item.file)) return "kids";
  if (item.category === "family-stories" || item.category === "family")
    return "family";
  if (item.category === "portraits") return "portraits";
  if (item.category === "creative") return "landscape";
  if (item.category === "home") {
    if (
      item.file.endsWith("home-01.webp") ||
      item.file.endsWith("home-04.webp")
    )
      return "family";
    if (
      item.file.endsWith("home-03.png") ||
      item.file.endsWith("home-06.webp") ||
      item.file.endsWith("home-07.webp")
    )
      return null;
    return null;
  }
  return item.category;
}

const portfolioGroups = [
  [
    "family",
    "Family Portrait",
    "The people and connections that make life feel like home.",
  ],
  ["newborn", "Newborn", "Quiet, tender photographs of your newest beginning."],
  [
    "kids",
    "Kids",
    "Playful portraits filled with personality, movement and wonder.",
  ],
  [
    "portraits",
    "Self Portrait",
    "Individual portraits that feel natural, expressive and distinctly you.",
  ],
  [
    "maternity",
    "Maternity",
    "A thoughtful record of anticipation, strength and growing love.",
  ],
  [
    "seniors",
    "Senior Portraits",
    "Relaxed milestone portraits that celebrate who you are becoming.",
  ],
  [
    "weddings",
    "Wedding",
    "Connection, ceremony and the meaningful details surrounding your day.",
  ],
  [
    "events",
    "Events",
    "The atmosphere, people and moments that bring a celebration to life.",
  ],
  [
    "landscape",
    "Landscape",
    "Place, light and the natural beauty Jaja notices along the way.",
  ],
];

function altText(category, index) {
  if (window.ladyJajaLanguage?.() === "zh-Hant") {
    return `Lady Jaja Photography 於歐胡島拍攝的${window.ladyJajaTranslate?.(categoryLabels[category]) || categoryLabels[category]}照片，第 ${index + 1} 張`;
  }
  return `${categoryLabels[category]} photograph by Lady Jaja Photography on Oʻahu, image ${index + 1}`;
}

async function loadGallery() {
  if (!portfolio) return;
  try {
    const response = await fetch("assets/images/manifest.json");
    if (!response.ok) throw new Error("Gallery manifest did not load");
    const items = (await response.json())
      .filter((item) => !item.file.endsWith("home-02.png"))
      .map((item) => ({ ...item, displayCategory: displayCategory(item) }))
      .filter((item) => item.displayCategory);
    portfolio.innerHTML = portfolioGroups
      .map(([id, title, description]) => {
        const groupItems = items.filter((item) => item.displayCategory === id);
        const rows = [];
        for (let i = 0; i < groupItems.length; i += 3) {
          rows.push(groupItems.slice(i, i + 3));
        }
        const gallery = rows
          .map(
            (row, rowIndex) =>
              `<div class="gallery-row gallery-row--${row.length}">${row
                .map((item, itemIndex) => {
                  const index = rowIndex * 3 + itemIndex;
                  const ratio =
                    item.width && item.height ? item.width / item.height : 1;
                  return `<button class="gallery-item" style="--image-ratio:${ratio}" type="button" data-lightbox aria-label="Enlarge ${categoryLabels[id]} image ${index + 1}"><img src="${item.file}" loading="lazy" decoding="async" alt="${altText(id, index)}"></button>`;
                })
                .join("")}</div>`,
          )
          .join("");
        const translatedTitle = window.ladyJajaTranslate?.(title) || title;
        const translatedDescription =
          window.ladyJajaTranslate?.(description) || description;
        return `<section class="portfolio-category" id="${id}" aria-labelledby="${id}-title"><header class="portfolio-category__heading"><h2 id="${id}-title">${translatedTitle}</h2><p>${translatedDescription}</p></header><div class="gallery-grid">${gallery}</div></section>`;
      })
      .join("");
    document.dispatchEvent(new Event("gallery:loaded"));
    if (location.hash)
      requestAnimationFrame(() =>
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: "smooth" }),
      );
  } catch (error) {
    portfolio.innerHTML =
      "<p>The portfolio could not be loaded. Please refresh the page or contact Jaja directly.</p>";
  }
}
loadGallery();
document.addEventListener("languagechange", loadGallery);
