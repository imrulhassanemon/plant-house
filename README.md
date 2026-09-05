# 🌱 Plant House

A modern and responsive plant shopping web application built with **React, TypeScript, Tailwind CSS, and Vite**.

Plant House allows users to browse plants, purchase plants using virtual coins, and manage their selected plants. Plant data is fetched dynamically from the Programming Hero Plants API.

## 🔗 Live Demo

https://plant-house-rosy.vercel.app/

## ✨ Features

- 🌿 Browse plants dynamically from an external API
- 🔎 View plant image, name, category, description, and price
- 🪙 Start with **500 coins**
- 💰 Get **1000 additional coins** using the "Get Coin" button
- 🛒 Purchase plants using virtual coins
- 🚫 Prevent purchasing when the user does not have enough coins
- ✅ Prevent the same plant from being selected more than once
- 🗑️ Remove plants from the selected list
- 🔄 Switch between **Trees** and **Selected** views
- 🔔 Success and error notifications using React Hot Toast
- ⏳ Loading state while plant data is being fetched
- 📱 Responsive UI for different screen sizes
- 🎨 Modern plant-themed interface using Tailwind CSS

## 🛠️ Technologies Used

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Lucide React** — icons
- **React Hot Toast** — notifications
- **Programming Hero Plants API** — plant data

## 📡 API

Plant data is fetched from:

```text
https://openapi.programming-hero.com/api/plants
```

The application retrieves the `plants` array from the API response and renders it dynamically.

## 📁 Project Structure

```text
plant-house/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── componet/
│   │   ├── Banner.tsx
│   │   ├── Navbar.tsx
│   │   ├── Plants.tsx
│   │   ├── PlantsCard.tsx
│   │   └── SelectedCard.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Go to the project directory

```bash
cd plant-house
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### 4. Start the development server

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

The application will run on the local development server provided by Vite.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build |

## 🧠 What I Learned

While building Plant House, I practiced:

- React component-based architecture
- Passing and managing props
- TypeScript interfaces and type safety
- React state management with `useState`
- React's `use()` API for consuming a Promise
- `Suspense` for handling loading states
- Rendering API data with `.map()`
- Conditional rendering
- Array methods such as `some()` and `filter()`
- Preventing duplicate selections
- Handling user interactions
- Working with asynchronous API requests
- Showing success/error feedback with toast notifications
- Responsive UI development with Tailwind CSS
- Deploying a React application to Vercel

> I used AI as a learning assistant when I got stuck. Instead of blindly copying solutions, I used it to understand problems, debug errors, and then implement the solution in the project.

## 🎯 Future Improvements

Possible improvements for future versions:

- Add plant search functionality
- Add category filtering
- Add detailed plant information pages
- Add a shopping cart with quantities
- Add persistent state using Local Storage
- Add authentication
- Add a backend and database
- Add real payment functionality
- Improve accessibility and keyboard navigation

## 👨‍💻 Developer

**Imrul Hassan Emon**

Frontend Developer — Learning and building one project at a time. 🌱

## ⭐ Feedback

If you have any suggestions or feedback about the UI, functionality, or code quality, feel free to share them. Your feedback can help improve the project.

---

⭐ If you find this project useful or interesting, consider giving the repository a star!
