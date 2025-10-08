# Wikident Prototype

A minimal visual prototype for the Wikident dental hygienist application.

## Tech Stack

- **React 18** with Vite
- **TypeScript**
- **Tailwind CSS** for styling

## Features

This prototype includes three main pages:

1. **Dashboard Page** - Main navigation hub with tile-based navigation
2. **Calendar Page** - Week view calendar with appointment visualization
3. **Patient List Page** - Patient cards with search and filter UI

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── pages/           # Main page components
│   ├── DashboardPage.tsx
│   ├── CalendarPage.tsx
│   └── PatientListPage.tsx
├── App.tsx          # Main app component with navigation
├── index.css        # Tailwind CSS imports
└── main.tsx         # App entry point
```

## Notes

- This is a **visual prototype only** - no backend, routing, or state management
- All data is hardcoded for demonstration purposes
- The UI follows the dark glassmorphic design specified in the PRD
- Czech language is used for UI labels to match the target market

## Navigation

Use the navigation bar at the top to switch between pages:
- **Dashboard** - Overview and main navigation tiles
- **Kalendář** (Calendar) - Weekly appointment view
- **Pacienti** (Patients) - Patient list with cards

## Design Features

- Dark theme with glassmorphic effects
- Responsive layout
- Hover effects and transitions
- Color-coded appointment types
- Patient status indicators and tags