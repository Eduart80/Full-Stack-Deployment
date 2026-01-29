# Frontend (React) UI

This folder contains the frontend code for the MERN stack application. The UI is built using React and provides a user-friendly interface for interacting with the backend API.

## Features
- Product creation form
- Product list display
- Real-time updates after creating a product
- Responsive and clean design

## Structure
- `src/` - Main source code
  - `App.jsx` - Main app component
  - `components/` - Reusable UI components
    - `CreateProd/` - Product creation form
    - `ProdList/` - Product list display
    - `ProdItem/` - Individual product item
  - `pages/` - Page-level components (e.g., HomePage)
  - `assets/` - Static assets (images, styles)
- `public/` - Static files
- `index.html` - Main HTML file

## How It Works
- Users can add new products using the form.
- The product list updates automatically after a new product is added.
- All products are fetched from the backend and displayed in a list.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. The app will be available at `http://localhost:3001`.

## Environment Variables
- `VITE_API_URL` - The base URL for the backend API (set in `.env`)

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- CSS

---

