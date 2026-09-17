const body = document.body;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("is-open", !open);
    body.classList.toggle("nav-open", !open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      body.classList.remove("nav-open");
    }
  });
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
  });
});

const reveals = document.querySelectorAll(".reveal");
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document
  .querySelectorAll('a[href*="instagram.com/ladyjajaphotography"]')
  .forEach((link) => {
    link.href =
      "https://www.instagram.com/ladyjajaphotography?igshid=pebsprfggkbb";
    link.classList.add("instagram-link");
    if (!link.querySelector("svg")) {
      link.insertAdjacentHTML(
        "afterbegin",
        '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>',
      );
    }
  });

document.querySelectorAll('.site-footer a[href^="mailto:"]').forEach((link) => {
  link.classList.add("contact-icon-link");
  if (!link.querySelector("svg")) {
    link.insertAdjacentHTML(
      "afterbegin",
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"></rect><path d="m4 7 8 6 8-6"></path></svg>',
    );
  }
});

document.querySelectorAll('.site-footer a[href^="tel:"]').forEach((link) => {
  link.classList.add("contact-icon-link");
  if (!link.querySelector("svg")) {
    link.insertAdjacentHTML(
      "afterbegin",
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.5 4.6 5.2c-.8.6-.9 1.7-.5 2.6 2.5 5.5 6.8 9.8 12.3 12.3.9.4 2 .3 2.6-.5l1.7-2.5c.4-.6.3-1.5-.3-2l-3.1-2.3c-.6-.4-1.4-.4-1.9.2l-1.5 1.5a16.5 16.5 0 0 1-4.5-4.5l1.5-1.5c.5-.5.6-1.3.2-1.9L9.1 3.8c-.5-.7-1.4-.8-2-.3Z"></path></svg>',
    );
  }
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");
let returnFocus = null;

function openLightbox(button) {
  if (!lightbox || !lightboxImage) return;
  const image = button.querySelector("img");
  returnFocus = button;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
  lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
  returnFocus?.focus();
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-lightbox]");
  if (trigger) openLightbox(trigger);
  if (event.target === lightbox || event.target.closest(".lightbox-close"))
    closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open"))
    closeLightbox();
});

const traditionalChinese = {
  "Skip to content": "跳至主要內容",
  Home: "首頁",
  Sessions: "攝影服務",
  Portfolio: "作品集",
  About: "關於 Jaja",
  Contact: "聯絡我們",
  "Request Pricing & Availability": "詢問方案與檔期",
  "View Portfolio": "瀏覽作品集",
  "View collection": "查看作品",
  "Explore the portfolio": "探索作品集",
  "Every season has its own story.": "每一個人生階段，都有屬於自己的故事。",
  "Family Portrait": "家庭寫真",
  Newborn: "新生兒",
  Kids: "兒童寫真",
  "Self Portrait": "個人寫真",
  Maternity: "孕期寫真",
  "Senior Portraits": "畢業寫真",
  Wedding: "婚禮",
  Events: "活動紀錄",
  Landscape: "風景攝影",
  "Meet Jaja": "認識 Jaja",
  "Easygoing sessions. Honest photographs.": "自在的拍攝體驗，真實動人的影像。",
  "Jaja creates a relaxed space for families, couples and individuals to be themselves—then preserves the connection, personality and beauty already there.":
    "Jaja 為家庭、伴侶與個人營造輕鬆自在的拍攝氛圍，讓每個人自然做自己，並將彼此的情感、個性與真實之美珍藏下來。",
  "More about Jaja": "深入認識 Jaja",
  "The experience": "拍攝體驗",
  "Simple from hello to gallery.": "從初次聯絡到收到照片，都簡單安心。",
  Plan: "規劃",
  "Tell Jaja what you are celebrating.": "告訴 Jaja 你想紀念的故事。",
  Photograph: "拍攝",
  "Show up as you are. Jaja will gently guide you.":
    "自在做自己，Jaja 會溫柔地引導你。",
  Receive: "收件",
  "Enjoy thoughtfully edited digital photographs.":
    "收藏經過細心後製的數位照片。",
  "Explore the session experience": "了解拍攝流程",
  "Selected work": "精選作品",
  "Connection, personality and place.": "情感、個性與土地之美。",
  "Frequently asked questions": "常見問題",
  "A few helpful details before you inquire.":
    "聯絡前，你可能想先了解這些資訊。",
  "How do I receive pricing?": "如何取得方案與價格？",
  "Submit an inquiry with your session type, preferred date and group size. Jaja will share the most relevant current options privately.":
    "請在詢問表單中提供拍攝類型、希望日期與人數，Jaja 會私下提供最適合你的最新方案。",
  "Does the inquiry form reserve my date?": "送出詢問表單後，日期就保留了嗎？",
  "No. Your date is confirmed only after Jaja responds and the booking steps are completed.":
    "不會。Jaja 回覆並完成預約程序後，拍攝日期才算正式確認。",
  "Where are sessions held?": "拍攝地點在哪裡？",
  "Sessions are offered on Oʻahu. Share your preferred setting in the inquiry and Jaja will confirm the location.":
    "拍攝服務於歐胡島進行。請在詢問時告訴 Jaja 你喜歡的場景，她會與你確認合適地點。",
  "What is included?": "拍攝包含哪些內容？",
  "Sessions include photography time, professional editing and high-resolution digital photographs. Exact coverage is confirmed before booking.":
    "拍攝包含拍攝時間、專業後製與高解析度數位照片；實際內容會在預約前確認。",
  "What happens if it rains?": "如果下雨怎麼辦？",
  "Weather decisions are made directly with Jaja based on the location and conditions. Final rain and rescheduling terms still need Jaja’s approval.":
    "Jaja 會依拍攝地點與當天天候和你討論安排；最終雨天與改期辦法仍需由 Jaja 確認。",
  "Ready when you are.": "準備好了，就從這裡開始。",
  "Start an Inquiry": "開始詢問",
  "Aloha, I’m Jaja.": "Aloha，我是 Jaja。",
  "I spent my early childhood in Taiwan before moving to Hawaiʻi. Photography first found me in high school and returned through travel, creative mentors and the people who trusted me with their memories.":
    "我的童年早期在臺灣度過，之後搬到夏威夷。高中時我第一次接觸攝影，後來透過旅行、創意導師，以及願意把珍貴回憶交給我的人，再次找回對攝影的熱愛。",
  "Today, I photograph families, portraits and celebrations across Oʻahu with a relaxed, people-first approach.":
    "現在，我在歐胡島為家庭、個人與各種慶祝時刻拍攝，以輕鬆自在、以人為本的方式記錄真實情感。",
  "Come as you are. I’ll help with the rest.": "做你自己就好，其餘的交給我。",
  "The approach": "Jaja 的拍攝方式",
  "Present over perfect.": "真實，比完美更重要。",
  "Gentle direction leaves room for the expressions, movement and relationships that make your photographs personal.":
    "溫柔適度的引導，為真實表情、自然動作與彼此關係保留空間，讓每張照片都真正屬於你。",
  "Photography sessions": "攝影服務",
  "Serving families, portraits and celebrations across Oʻahu.":
    "為歐胡島的家庭、個人與重要慶祝時刻留下影像。",
  "What to expect": "拍攝內容",
  "Clear details before you book.": "預約前，先了解重要細節。",
  "Relaxed direction": "輕鬆引導",
  "Guidance without forced posing.": "自然引導，不勉強擺拍。",
  "Professional editing": "專業後製",
  "Every selected image carefully finished.": "每張精選照片都經過細心處理。",
  "Digital delivery": "數位交付",
  "High-resolution photographs to keep.": "提供可長久珍藏的高解析度照片。",
  "Private pricing": "私下提供價格",
  "Options shared after your inquiry.": "收到詢問後，Jaja 會提供合適方案。",
  "Family & maternity": "家庭與孕期寫真",
  "Hold onto this season.": "珍藏生命此刻的模樣。",
  "Relaxed photographs of growing families, maternity milestones and keiki.":
    "以輕鬆自然的方式，記錄家庭成長、孕期里程碑與孩子們。",
  "Request details": "詢問詳情",
  "Couples & engagements": "伴侶與訂婚",
  "Your connection, naturally.": "自然呈現你們之間的情感。",
  "Warm photographs for proposals, engagements, anniversaries and life together.":
    "為求婚、訂婚、週年紀念與相伴生活留下溫暖影像。",
  "Portraits & seniors": "個人與畢業寫真",
  "Celebrate who you are becoming.": "記錄此刻，也慶祝正在成為的自己。",
  "Expressive individual, graduation and senior portraits with personality.":
    "充滿個性的個人、畢業與高中畢業寫真。",
  "Events & intimate weddings": "活動與小型婚禮",
  "Stay present while it unfolds.": "專心享受當下，讓 Jaja 為你記錄。",
  "Story-focused coverage of gatherings, celebrations and intimate weddings.":
    "以故事為核心，記錄聚會、慶典與小型婚禮。",
  "Not sure what fits?": "不確定哪一種服務適合你？",
  "Share what you are planning and Jaja will guide you.":
    "告訴 Jaja 你的計畫，她會協助你選擇。",
  "The portfolio": "作品集",
  "People, milestones and the beauty of Oʻahu.":
    "人物、人生里程碑，以及歐胡島之美。",
  "Loading the portfolio…": "作品載入中…",
  "The people and connections that make life feel like home.":
    "記錄讓生活有家之感的人與情感連結。",
  "Quiet, tender photographs of your newest beginning.":
    "以安靜溫柔的影像，珍藏全新的開始。",
  "Playful portraits filled with personality, movement and wonder.":
    "充滿個性、動感與童真的活潑寫真。",
  "Individual portraits that feel natural, expressive and distinctly you.":
    "自然、富有表情，也真正屬於你的個人寫真。",
  "A thoughtful record of anticipation, strength and growing love.":
    "細膩記錄期待、力量與日漸深厚的愛。",
  "Relaxed milestone portraits that celebrate who you are becoming.":
    "以自在的里程碑寫真，慶祝正在成為的自己。",
  "Connection, ceremony and the meaningful details surrounding your day.":
    "記錄情感、儀式，以及重要日子裡每個有意義的細節。",
  "The atmosphere, people and moments that bring a celebration to life.":
    "捕捉讓慶典鮮活起來的氛圍、人物與時刻。",
  "Place, light and the natural beauty Jaja notices along the way.":
    "記錄 Jaja 沿途看見的地方、光線與自然之美。",
  "Begin your inquiry": "開始詢問",
  "Let’s make something meaningful.": "一起創造值得珍藏的影像。",
  "Share a few details below. Jaja will follow up personally with availability, current options and next steps.":
    "請在下方提供幾項資訊，Jaja 會親自回覆檔期、目前方案與後續步驟。",
  "Name *": "姓名 *",
  "Email *": "電子郵件 *",
  Phone: "電話",
  "Session type *": "拍攝類型 *",
  "Choose one": "請選擇",
  "Senior Portrait": "畢業寫真",
  Event: "活動紀錄",
  "Not sure yet": "尚未確定",
  "Preferred date or timeframe": "希望日期或時段",
  "Number of people": "拍攝人數",
  "Preferred Oʻahu location, if known": "偏好的歐胡島拍攝地點（如已確定）",
  "What are you planning? *": "請告訴我們你的拍攝計畫 *",
  "Please do not include payment information or other sensitive details. An inquiry does not reserve a date.":
    "請勿填寫付款資訊或其他敏感資料。送出詢問不代表日期已保留。",
  "Send Inquiry": "送出詢問",
  "Prefer to connect directly?": "希望直接聯絡？",
  "Serving Oʻahu.": "服務範圍：歐胡島",
  Explore: "探索",
  Connect: "聯絡",
  "Email Jaja": "寄信給 Jaja",
  Privacy: "隱私權",
  Accessibility: "無障礙聲明",
  "Designed by Webby Wahine": "網站設計：Webby Wahine",
  "Website information": "網站資訊",
  "Privacy Policy": "隱私權政策",
  "Accessibility Statement": "無障礙聲明",
  "Last updated September 16, 2026": "最後更新：2026 年 9 月 16 日",
  "Lady Jaja Photography respects your privacy. This policy explains the information collected through this website and how it may be used.":
    "Lady Jaja Photography 尊重你的隱私。本政策說明本網站收集哪些資訊，以及可能如何使用這些資訊。",
  "Information you provide": "你提供的資訊",
  "When you submit the inquiry form or contact Jaja directly, you may provide your name, email address, phone number, preferred session type, general scheduling information, location preferences and a message about your photography needs.":
    "當你送出詢問表單或直接聯絡 Jaja 時，可能會提供姓名、電子郵件、電話、偏好的拍攝類型、大致時間、地點偏好，以及攝影需求說明。",
  "How information is used": "資訊使用方式",
  "Information is used to respond to your inquiry, discuss availability and pricing, plan requested photography services and maintain necessary business records. Lady Jaja Photography does not sell your personal information.":
    "這些資訊僅用於回覆詢問、討論檔期與價格、規劃攝影服務，以及保存必要的業務紀錄。Lady Jaja Photography 不會出售你的個人資訊。",
  "Form processing": "表單處理",
  "The website’s inquiry form is processed by a third-party form delivery service so the message can be sent to Lady Jaja Photography. Do not submit payment details, government identification numbers or other highly sensitive information through the form.":
    "本網站的詢問表單由第三方表單傳送服務處理，以便將訊息寄給 Lady Jaja Photography。請勿透過表單提交付款資料、政府核發的身分證號碼或其他高度敏感資訊。",
  "External links": "外部連結",
  "This website may link to Instagram or other third-party websites. Their privacy practices are governed by their own policies.":
    "本網站可能連結至 Instagram 或其他第三方網站；其隱私權作法由各自政策規範。",
  "Data choices": "你的資料選擇",
  "You may request access to, correction of or deletion of personal information previously submitted through this website, subject to any information Lady Jaja Photography must retain for legitimate business or legal purposes.":
    "你可以要求查閱、更正或刪除先前透過本網站提交的個人資訊，但 Lady Jaja Photography 因合法業務或法律目的必須保留的資料除外。",
  "Questions about this policy may be sent to":
    "如對本政策有任何疑問，請來信：",
  "Lady Jaja Photography wants this website to be welcoming and usable for as many people as possible.":
    "Lady Jaja Photography 希望這個網站能讓盡可能多的人都感到友善且容易使用。",
  "Our approach": "我們的作法",
  "The website is designed with semantic page structure, keyboard-accessible controls, visible focus indicators, readable color contrast, descriptive links, alternative text for meaningful images, responsive layouts and reduced-motion support.":
    "本網站採用語意化頁面結構、鍵盤可操作控制項、清楚的焦點指示、易讀的色彩對比、具描述性的連結、重要圖片替代文字、響應式版面，以及減少動態效果的支援。",
  "Photography descriptions": "照片說明",
  "The portfolio includes many photographs. Alternative text is provided to identify the type and context of the work without attempting to describe or identify every person shown.":
    "作品集中包含許多照片；替代文字用於說明作品類型與情境，不會嘗試描述或辨識照片中的每一位人物。",
  "Need assistance?": "需要協助嗎？",
  "If you have difficulty accessing information or using a feature, please contact Lady Jaja Photography at":
    "如果你在閱讀資訊或使用網站功能時遇到困難，請透過以下方式聯絡 Lady Jaja Photography：",
  ". Please describe the page and assistance you need.":
    "。請說明遇到問題的頁面與所需協助。",
  "Ongoing improvement": "持續改善",
  "Accessibility is an ongoing effort. Feedback about barriers is welcome and will be considered during future website updates.":
    "無障礙是一項持續進行的工作；我們歡迎你提供使用障礙的意見，並會在日後網站更新時納入考量。",
  "Inquiry received": "已收到你的詢問",
  "Mahalo for reaching out.": "Mahalo，謝謝你與我們聯絡。",
  "Your message has been sent to Jaja. She will follow up directly about availability, pricing and next steps.":
    "你的訊息已傳送給 Jaja。她會親自回覆檔期、價格與後續步驟。",
  "Return Home": "返回首頁",
  "View the Portfolio": "瀏覽作品集",
  "404 · Page not found": "404 · 找不到頁面",
  "This moment slipped away.": "這個畫面悄悄溜走了。",
  "The page may have moved, but the photographs are still here.":
    "頁面可能已移動，但美好的影像仍在這裡。",
  "Oʻahu Portrait & Family Photographer | Lady Jaja Photography":
    "歐胡島家庭與人像攝影 | Lady Jaja Photography",
  "Photography Sessions on Oʻahu | Lady Jaja Photography":
    "歐胡島攝影服務 | Lady Jaja Photography",
  "Photography Portfolio | Lady Jaja Photography Oʻahu":
    "攝影作品集 | Lady Jaja Photography 歐胡島",
  "Meet Jaja | Lady Jaja Photography Oʻahu":
    "認識 Jaja | Lady Jaja Photography 歐胡島",
  "Request Photography Pricing | Lady Jaja Photography":
    "詢問攝影方案 | Lady Jaja Photography",
  "Privacy Policy | Lady Jaja Photography":
    "隱私權政策 | Lady Jaja Photography",
  "Accessibility Statement | Lady Jaja Photography":
    "無障礙聲明 | Lady Jaja Photography",
  "Page Not Found | Lady Jaja Photography":
    "找不到頁面 | Lady Jaja Photography",
  "Mahalo | Lady Jaja Photography": "Mahalo | Lady Jaja Photography",
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage =
  localStorage.getItem("lady-jaja-language") === "zh-Hant" ? "zh-Hant" : "en";

function translated(value) {
  return currentLanguage === "zh-Hant"
    ? traditionalChinese[value] || value
    : value;
}

function translatePage() {
  document.documentElement.lang = currentLanguage;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("script, style")) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const clean = source.trim();
    node.nodeValue = clean ? source.replace(clean, translated(clean)) : source;
  }
  document
    .querySelectorAll("[aria-label], [placeholder]")
    .forEach((element) => {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {
          ariaLabel: element.getAttribute("aria-label"),
          placeholder: element.getAttribute("placeholder"),
        });
      }
      const source = originalAttributes.get(element);
      if (source.ariaLabel)
        element.setAttribute("aria-label", translated(source.ariaLabel));
      if (source.placeholder)
        element.setAttribute("placeholder", translated(source.placeholder));
    });
  if (!document.documentElement.dataset.originalTitle)
    document.documentElement.dataset.originalTitle = document.title;
  document.title = translated(document.documentElement.dataset.originalTitle);
  const toggle = document.querySelector(".language-toggle");
  if (toggle) {
    toggle.textContent = currentLanguage === "zh-Hant" ? "English" : "繁體中文";
    toggle.setAttribute(
      "aria-label",
      currentLanguage === "zh-Hant" ? "Switch to English" : "切換為繁體中文",
    );
  }
}

const navList = document.querySelector(".nav-list");
if (navList) {
  const languageItem = document.createElement("li");
  languageItem.className = "language-item";
  languageItem.innerHTML =
    '<button class="language-toggle" type="button">繁體中文</button>';
  navList.append(languageItem);
  languageItem.querySelector("button").addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "zh-Hant" : "en";
    localStorage.setItem("lady-jaja-language", currentLanguage);
    translatePage();
    document.dispatchEvent(
      new CustomEvent("languagechange", {
        detail: { language: currentLanguage },
      }),
    );
  });
}

window.ladyJajaLanguage = () => currentLanguage;
window.ladyJajaTranslate = (value) => translated(value);
translatePage();
