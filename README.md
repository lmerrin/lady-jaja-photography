# Lady Jaja Photography Website

Deployment-ready static website prepared for Lady Jaja Photography by Webby Wahine.

## Preview on GitHub Pages

Upload the contents of this folder to the repository root. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose the main branch and root folder, then save.

The preview form uses FormSubmit. The first real submission triggers a verification email to `ladyjajaphotography@gmail.com`. Jaja must approve that email before inquiries will be delivered. Do not run a test submission without Jaja's permission.

## Deploy on Cloudflare Pages

Connect the approved GitHub repository to Cloudflare Pages. This site has no build command; set the output directory to `/` when the repository contains these files at its root. Alternatively, upload the folder through Cloudflare Pages Direct Upload.

Before connecting the live domain, preserve all existing email-related DNS records. Add both `ladyjajaphotography.com` and `www.ladyjajaphotography.com`, confirm HTTPS, then test all redirects and the inquiry form before canceling Wix.

## Updating photographs

Optimized photographs are stored in `assets/images/`. The portfolio reads `assets/images/manifest.json`. Add a new optimized image, then add a matching entry to that manifest with its file path, category, width and height.

Supported categories: `family`, `maternity`, `weddings`, `seniors`, `portraits`, `kids`, `events`, `creative`, and `family-stories`.

## Content updates

- Global styles: `assets/css/styles.css`
- Navigation, motion, FAQ and lightbox: `assets/js/site.js`
- Portfolio loading and filters: `assets/js/gallery.js`
- Contact destination: `contact.html`
- SEO metadata: inside the `<head>` of each page
- Sitemap: `sitemap.xml`
- Cloudflare security headers: `_headers`
- Wix URL redirects: `_redirects`

## Launch notes

- Replace resized Wix exports with original high-resolution photographs as Jaja provides them.
- Verify all unanswered client details in `CLIENT-APPROVALS.md`.
- No analytics, ad trackers or cookies are included.
