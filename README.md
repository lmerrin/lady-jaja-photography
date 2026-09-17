# Lady Jaja Photography Website

Deployment-ready static website prepared for Lady Jaja Photography by Webby Wahine.

This revision adds an editorial, image-led homepage; category entrance transitions; stronger first-person brand voice; and session-experience wording based on Jaja’s supplied booking sheets. No prices from those sheets are published.

## Preview on GitHub Pages

Upload the contents of this folder to the repository root. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose the main branch and root folder, then save.

The preview form uses FormSubmit. The first real submission triggers a verification email to `ladyjajaphotography@gmail.com`. Jaja must approve that email before inquiries will be delivered. Do not run a test submission without Jaja's permission.

## Deploy on Cloudflare Pages

Connect the approved GitHub repository to Cloudflare Pages. This site has no build command; set the output directory to `/` when the repository contains these files at its root. Alternatively, upload the folder through Cloudflare Pages Direct Upload.

Before connecting the live domain, preserve all existing email-related DNS records. Add both `ladyjajaphotography.com` and `www.ladyjajaphotography.com`, confirm HTTPS, then test all redirects and the inquiry form before canceling Wix.

## Updating photographs

Optimized photographs are stored in `assets/images/`. The categorized portfolio reads `assets/images/manifest.json`. Add a new optimized image, then add a matching entry to that manifest with its file path, category, width and height. The portfolio automatically places it in the appropriate gallery section.

Supported categories: `family`, `maternity`, `weddings`, `seniors`, `portraits`, `kids`, `events`, `creative`, and `family-stories`.

## Content updates

- Global styles: `assets/css/styles.css`
- Navigation, motion, FAQ and lightbox: `assets/js/site.js`
- Portfolio loading and category organization: `assets/js/gallery.js`
- Display font: Jost from Google Fonts
- Body font: Public Sans from Google Fonts

## Revision 5 design update

- Restored a full-photography hero direction
- Reorganized the portfolio into nine distinct collections
- Removed decorative section numbers
- Recovered uncropped, higher-resolution versions of the Wix family photographs
- Simplified the homepage and kept Jaja's full story on the About page
- Refined the contact form into a cleaner inquiry layout

## Revision 6 cleanup

- Rebuilt the hero around the white logo and two calls to action
- Replaced the previous font pairing with Josefin Sans and Karla
- Removed fixed image crops and preserved natural photograph proportions
- Reduced homepage, session and About-page copy
- Restored the FAQ section
- Added a persistent portfolio category navigator
- Rebuilt the contact page and redesigned the session-inclusions section
- Added Jaja's linked Instagram icon in the footer
- Contact destination: `contact.html`
- SEO metadata: inside the `<head>` of each page
- Sitemap: `sitemap.xml`
- Cloudflare security headers: `_headers`
- Wix URL redirects: `_redirects`

## Revision 7 editorial redesign

- Introduced a floating transparent homepage navigation and full-height hero
- Rebuilt the homepage collections as alternating, full-width editorial rows
- Added a concise Meet Jaja introduction without duplicating the About page
- Changed the type system to Jost and Public Sans
- Simplified the portfolio index and added a Next Collection link after every gallery
- Refined the inquiry page into a spacious, single-column form
- Preserved natural photograph proportions in portfolio and content galleries

## Revision 8 alignment corrections

- Changed header and hero photographs to fill their sections without black side bars
- Removed decorative numbering from the homepage and portfolio
- Rebuilt portfolio galleries as proportional rows with aligned gaps and uncropped images
- Replaced Next Collection links with light category dividers
- Increased the space before the inquiry form
- Removed underlines from footer links while preserving hover and focus feedback

## Launch notes

- Replace resized Wix exports with original high-resolution photographs as Jaja provides them.
- Verify all unanswered client details in `CLIENT-APPROVALS.md`.
- No analytics, ad trackers or cookies are included.
