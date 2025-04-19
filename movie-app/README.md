# CineGlass

A modern, responsive web application for browsing and searching movies, built with React, Tailwind CSS, and the OMDB API. The app features a sleek UI with dark/light mode, movie listings, search functionality, detailed movie pages, and a "Load More" button for pagination.

## Features

- **Modern and Responsive UI**:
  - Clean, professional design with gradient backgrounds and smooth animations.
  - Responsive grid layout (1 to 4 columns) for mobile, tablet, and desktop.
  - Dark/light mode toggle with sliding animation, persisted via `localStorage`.
  - Fade-in animations for movie cards and error messages.

- **Homepage**:
  - Displays popular movies with cards showing thumbnails, titles, release years, and IMDb ratings.
  - Enhanced card design with gradient hover overlays, rating badges, and smooth transitions.

- **Search Functionality**:
  - Search bar with a magnifying glass icon and focus animation.
  - Filters movies by title using the OMDB API.
  - Displays a styled "No Movies Found" message with an icon for invalid searches.

- **Movie Detail Pages**:
  - Shows detailed movie information: poster, title, release date, genre, plot, IMDb rating, and optional trailer link.
  - Responsive layout with side-by-side poster and details on desktop, stacked on mobile.
  - Gradient-styled "Watch Trailer" button.

- **Pagination**:
  - "Load More" button to fetch additional movies, styled with gradients and hover effects.
  - Animated loading state during API requests.

- **Navigation**:
  - Sticky header with gradient background and app title ("Movie Hub").
  - Seamless client-side routing with `react-router-dom` for homepage and detail pages.

- **API Integration**:
  - Uses the OMDB API (key stored in `.env`) to fetch movie data.
  - Handles errors gracefully with user-friendly messages.

- **Performance and Accessibility**:
  - Built with Vite for fast development and optimized builds.
  - Smooth transitions for hover effects, theme switches, and animations.
  - Accessible search input with focus rings and clear button states.


## Prerequisites

- **Node.js**: Version 18 or later.
- **npm**: Included with Node.js.
- **OMDB API Key**: Obtain a key from [OMDB API](http://www.omdbapi.com/) and store it in `.env`.




## Technologies

React: 18.3.1 (Latest for modern rendering and hooks).
Tailwind CSS: 3.4.13 (Utility-first CSS with dark mode and custom animations).
Vite: 5.4.8 (Fast build tool and development server).
React Router: 6.26.2 (Client-side routing for navigation).
Axios: 1.7.7 (HTTP client for OMDB API requests).
OMDB API: External API for movie data.
PostCSS & Autoprefixer: For processing Tailwind CSS and ensuring browser compatibility.

## Contributing
Feel free to submit issues or pull requests to improve the app. Ensure changes