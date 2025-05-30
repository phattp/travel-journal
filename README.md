# Travel Journal

A simple travel journal web application built with React to display travel experiences and destinations.

## About

This project was created as part of The Frontend Developer Career Path at Scrimba to practice React fundamentals including components, props, and state management.

## Features

- Display travel entries with location details
- Responsive design with clean, modern interface
- Integration with Google Maps for location viewing
- Image gallery for each destination
- Mobile-friendly layout

## Technologies

- React 19.1.0
- Vite (Build tool)
- CSS3
- Font Awesome (Location icons)
- Google Fonts (Inter)
- ESLint (Code linting)

## Project Structure

```
travel-journal/
├── public/
├── src/
│   ├── components/
│   │   ├── Entry.jsx
│   │   └── Header.jsx
│   ├── images/
│   │   └── globe.png
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## React Concepts Used

- **Components**: Modular component structure with Header and Entry components
- **Props**: Passing data from parent to child components
- **JSX**: Writing HTML-like syntax in JavaScript
- **Array mapping**: Dynamically rendering lists of travel entries
- **ES6 Modules**: Import/export functionality for component organization

## Travel Destinations Featured

1. **Mount Fuji, Japan** - The tallest mountain in Japan
2. **Sydney Opera House, Australia** - Iconic performing arts center
3. **Geirangerfjord, Norway** - Beautiful Norwegian fjord

## Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone https://github.com/phattp/travel-journal.git
cd travel-journal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Component Breakdown

### Header Component
- Displays the application title with a globe icon
- Provides consistent branding across the app

### Entry Component
- Renders individual travel entries
- Accepts props for location data, images, and descriptions
- Includes Google Maps integration for each location

### App Component
- Main component that orchestrates the entire application
- Maps through travel data to create Entry components
- Manages the overall layout structure

## What I Learned

- React component composition and reusability
- Props system for passing data between components
- JSX syntax and React rendering patterns
- Project structure organization in React applications
- Using Vite as a modern build tool for React development
- Implementing responsive design with React components

## Future Enhancements

- Add ability to create new travel entries
- Implement search and filter functionality
- Add photo upload capabilities
- Include trip duration calculations
- Create detailed view for each destination

---

Created by [Phatthara Pisootrapee](https://github.com/phattp) | [The Frontend Developer Career Path at Scrimba](https://scrimba.com/learn/frontend)
