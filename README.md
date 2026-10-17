# Forma — React Shopping Cart Application

A responsive shopping cart project built with React, Vite, React Context API, and React Hooks.

## Features

- Responsive product catalogue
- Product images, names, categories, prices, and descriptions
- Search and category filters
- Add products to the cart
- Increase or decrease item quantities
- Remove individual items
- Live item count and subtotal calculation
- Cart state persisted in `localStorage`
- Reusable components and centralized cart state
- Responsive layout for mobile, tablet, and desktop
- Empty-cart and notification states

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run in VS Code

1. Extract the ZIP file.
2. Open the extracted `react-shopping-cart` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal. It is usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── CartDrawer.jsx
│   ├── CartItem.jsx
│   ├── CategoryFilter.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductGrid.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── hooks/
│   └── useCart.js
├── App.jsx
├── index.css
└── main.jsx
```

## Notes

- This is a frontend demo. The checkout button displays a demo message and does not process real payments.
- Product photos load from Unsplash and therefore require an internet connection.
- Cart contents are saved in the browser on the current device.
"# React-Shopping-Cart-Application" 
