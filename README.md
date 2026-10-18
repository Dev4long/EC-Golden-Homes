# EC Golden Homes

Single-page site for EC Golden Homes — a real estate investment company. Built with React + Vite. Bilingual (English/Spanish), light/dark mode, smooth-scroll navigation, and scroll-reveal animations.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Before you publish — get a Web3Forms key

The contact form has no backend — it submits through [Web3Forms](https://web3forms.com), a free service that emails you form submissions.

1. Go to [web3forms.com](https://web3forms.com) and enter the email that should receive submissions (no account needed) to get a free access key.
2. Paste it into `web3formsAccessKey` in [src/data/content.js](src/data/content.js).

The form already has a honeypot field and free hCaptcha wired in to block bot spam, and the submit button stays disabled until the captcha is solved.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes it automatically on every push to `main`.

1. Push this project to the GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the site builds and deploys automatically.

## Project structure

```
src/
  assets/images/     Logo, hero portrait, and about photo
  components/        Navbar, Hero, About, Strategies, FirstInvestment, Contact, Footer
  context/            Language (EN/ES) and Theme (light/dark) providers
  data/content.js     All site copy in English and Spanish, plus contact config
  hooks/useInView.js  IntersectionObserver hook powering scroll animations
  styles/main.css     Brand colors, layout, responsive rules, animations
```

## Brand colors

| Token | Hex |
|---|---|
| Gold (primary) | `#B8923E` |
| Gold dark (hover/accents) | `#8C6D2F` |
| Gold light (dark-mode accent) | `#E8CF8A` |
| Black | `#171310` |
| Bronze (link accent) | `#6B4A23` |

Defined as CSS variables in `src/styles/main.css` (`:root` for light mode, `:root[data-theme='dark']` for dark mode).
