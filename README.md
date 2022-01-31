# Sketch Document Viewer
![React](https://github.com/aleen42/badges/raw/master/src/react.svg) ![TailwindCSS](https://badges.aleen42.com/src/tailwindcss.svg) ![Eslint](https://github.com/aleen42/badges/raw/master/src/eslint.svg)

This web application allows users to view Sketch Documents & Artboards in the cloud.

## How to run it
First, install node modules:
```sh
yarn install
```
Run the app:
```sh
yarn start
```

## Features

- Document viewer
- Artboard viewer
- Load different documents depending on the URL
- Navigation through Artboards
- Code-Splitting (Lazy+Suspense)

## Technologies used

- React v17.0.2
- TailwindCSS
- React Router v6
- graphql-request
- Lottie (animations)
- Eslint + prettier

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
    |   |-- Header
    |   |   |-- Header.js
    |   |   |-- index.js
    |   |-- Loader
    |       |-- Loader.js
    |       |-- index.js
    |-- context
    |   |-- AppContext.js
    |-- graphql
    |   |-- queries
    |       |-- document.js
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
