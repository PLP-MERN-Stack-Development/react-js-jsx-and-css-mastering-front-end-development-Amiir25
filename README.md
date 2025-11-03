# React Task Manager App

A responsive React application built with **Vite** and **Tailwind CSS** demonstrating:

- Component architecture with reusable UI components (`Button`, `Card`, `Navbar`, `Footer`, `Layout`)
- State management using `useState`, `useEffect`, and `useContext`
- Custom hooks for localStorage persistence
- API integration with **JSONPlaceholder**
- Responsive design with Tailwind CSS and light/dark theme support
- Animations and transitions for interactive elements

---

## Live Demo

Check the app live at: **[plp-week-3-react-project.vercel.app](#)**

---

## Features

- **Task Manager**
  - Add, complete, delete tasks
  - Filter tasks (All, Active, Completed)
  - Persist tasks using `useLocalStorage`
- **Theme Switcher**
  - Toggle between light and dark modes using context
- **API Integration**
  - Fetch posts from JSONPlaceholder
  - Search and filter posts
  - Pagination for posts
- **Responsive Design**
  - Mobile, tablet, and desktop friendly
- **Reusable Components**
  - Buttons, cards, navbar, footer, layout wrapper
- **Animations**
  - Fade-in and slide-up animations
  - Hover transitions on buttons and cards

---

## Project Structure
src/
├── components/
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── Footer.jsx
│ ├── Layout.jsx
│ ├── Navbar.jsx
│ └── TaskManager.jsx
├── context/
│ └── ThemeContext.jsx
├── hooks/
│ └── useLocalStorage.js
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Posts.jsx
│ └── NotFound.jsx
├── utils/
│ └── api.js
├── App.jsx
└── main.jsx

---

## ⚡ Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- JSONPlaceholder API for demo data
- JavaScript ES6+ features