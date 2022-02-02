# Sketch Document Viewer
![React](https://github.com/aleen42/badges/raw/master/src/react.svg) ![TailwindCSS](https://badges.aleen42.com/src/tailwindcss.svg) ![Eslint](https://github.com/aleen42/badges/raw/master/src/eslint.svg)

This web application allows users to view Sketch Documents & Artboards in the cloud.

## How to run it
First, create your .env file:
```sh
REACT_APP_API_URL="https://graphql.sketch.cloud/api"
```
Install node modules:
```sh
yarn install
```
Run the app:
```sh
yarn start
```

## Run e2e tests
First, make sure to install supported browsers
```sh
npx playwright install
```
Run e2e tests
```sh
yarn e2e:test
```

## Features

- Document viewer
- Artboard viewer
- Load different documents depending on the URL
- Navigation through Artboards
- Code-Splitting (Lazy+Suspense)
- E2e tests with Playwright

## Technologies used

- React v17.0.2
- TailwindCSS
- React Router v6
- graphql-request
- Lottie (animations)
- Playwright (e2e tests)
- Eslint + prettier
- Vercel: https://sketch-cloud.vercel.app/ (Because of security reasons I'm not able to fetch data from API - CORS issue)

## Folder structure
```sh
|-- src
    |-- App.js
    |-- index.js
    |-- assets
    |-- components
    |   |-- index.js
    |   |-- ArtboardContainer
    |   |   |-- ArtboardContainer.js
    |   |   |-- index.js
    |   |-- ThumbnailContainer
    |   |   |-- ThumbnailContainer.js
    |   |   |-- index.js
    |   |-- Navbar
    |   |   |-- Navbar.js
    |   |   |-- index.js
    |   |-- Loader
    |       |-- Loader.js
    |       |-- index.js
    |-- context
    |   |-- AppContext.js
    |-- e2e
    |   |-- artboard.test.js
    |   |-- document.test.js
    |-- graphql
    |   |-- queries
    |       |-- document.js
    |-- hooks
    |   |-- useCallQuery.js
    |   |-- useWindowDimensions.js
    |   |-- index.js
    |-- layouts
    |   |-- MainLayout
    |       |-- MainLayout.js
    |       |-- index.js
    |-- pages
    |   |-- Artboard
    |   |   |-- Artboard.js
    |   |   |-- index.js
    |   |-- Document
    |       |-- Document.js
    |       |-- index.js
    |-- router
        |-- Router.js
        |-- index.js
```

## Things that can be improved

- Image loading optimization
- Version with TypeScript
- Double check routing system for a large scale app
