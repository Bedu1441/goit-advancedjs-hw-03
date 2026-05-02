# goit-advancedjs-hw-03

Homework 3 for GoIT Advanced JavaScript course.

## Topic

HTTP requests and backend interaction.

## Project Description

This project is an image search application. The user enters a search query,
submits the form, and the application sends an HTTP request to the Pixabay API.
The received images are rendered as a gallery on the page.

The application uses:

- Vite for project bundling
- Axios for HTTP requests
- Pixabay API as a backend service
- iziToast for notifications
- SimpleLightbox for opening large images in a modal window
- CSS loader for showing the loading state

## Features

- Search images by keyword
- Send HTTP requests to Pixabay API
- Render image cards in the gallery
- Show image information:
  - Likes
  - Views
  - Comments
  - Downloads
- Open large images in a modal window
- Show loader while images are loading
- Show notification if no images are found
- Clear previous search results before a new search
- Handle possible request errors

## Project Structure

```text
src/
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── pixabay-api.js
│   └── render-functions.js
├── index.html
├── main.js
├── pixabay-api.js
└── render-functions.js
```

## Main Files

### `src/js/pixabay-api.js`

Contains the function for HTTP requests:

```js
getImagesByQuery(query);
```

This function sends a request to Pixabay API and returns response data.

### `src/js/render-functions.js`

Contains functions for UI rendering:

```js
createGallery(images);
clearGallery();
showLoader();
hideLoader();
```

It also creates a SimpleLightbox instance and calls `refresh()` after adding new
images to the gallery.

### `src/js/main.js`

Contains the main application logic:

- form submit handling
- search query validation
- gallery clearing
- loader showing and hiding
- API request calling
- response checking
- iziToast notifications
- error handling

## Technologies Used

- HTML
- CSS
- JavaScript
- Vite
- Axios
- Pixabay API
- iziToast
- SimpleLightbox

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Links

Repository:

```text
https://github.com/Bedu1441/goit-advancedjs-hw-03
```

Live page:

```text
https://bedu1441.github.io/goit-advancedjs-hw-03/
```
