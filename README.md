# Mashq School Landing Page

Latest responsive V3 landing page exported from MagicPath. React, TypeScript, Vite and Tailwind CSS. Product screenshots and the original paper illustration are included as local assets.

## Run locally

Use Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The deployable site is generated in `dist/`. Vite uses relative paths so it can be hosted under a repository subpath.

## Current functionality

- Responsive layouts, tabs, FAQ accordion and practice screen controls.
- Three-field demo form with browser validation. The form is a frontend prototype; connect a backend or form service before accepting real demo requests.
- Contact and legal details still need the school's real destinations.
- Google Fonts require an internet connection.

## Responsive verification

The MagicPath V3 revision was tested in browser emulation at 14 configurations from 320px to 2560px, including landscape. See `docs/responsive-test-results.json`. Physical devices and other browser engines were not tested.

Source revision: 460102513199292416.
