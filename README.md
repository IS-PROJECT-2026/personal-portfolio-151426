# Personal Portfolio

A static portfolio site built for the IS Project 2026 Git workflow assignment.
The site presents my background, project work, and contact details as a single
responsive page.

Built and shipped through a milestone driven workflow: every change was planned
as an issue, developed on an issue linked branch, and merged into main through
a reviewed pull request.

## Live site

https://is-project-2026.github.io/personal-portfolio-151426/

Deployed from the `main` branch root via GitHub Pages. The site is static with
no build step, so every merge to `main` republishes automatically.

## Features

- Sticky navigation anchoring to each content section
- Responsive project grid that reflows from three columns to one
- Grouped skills listing
- Contact form with client side validation and accessible error messaging
- Dark mode toggle

## Technologies

| Layer | Technology |
|---|---|
| Markup | HTML5 with semantic landmarks and ARIA labelling |
| Styling | CSS3 with custom properties, Flexbox, and Grid |
| Behaviour | Vanilla JavaScript, no framework or build step |
| Hosting | GitHub Pages served from the `main` branch |
| Workflow | Git, GitHub Issues, Milestones, Projects, and Pull Requests |

## Project structure
.
├── index.html
├── css/
│ └── style.css
├── js/
│ └── main.js
└── evidence/

## Running locally

```bash
git clone https://github.com/IS-PROJECT-2026/personal-portfolio-151426.git
cd personal-portfolio-151426
```

Open `index.html` in a browser. There is no build step and no dependencies.

## Repository conventions

Commits follow the Conventional Commits specification. Branches are named `type/issue-number-description`, and every pull request references the issue it resolves.