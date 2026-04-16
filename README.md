# React + TypeScript + Vite

#### 📊 Compliance Dashboard UI — Frontend Implementation
#### Overview

This project is a frontend implementation of a basic dashboard. It focuses on clean, reusable, and responsive React components while maintaining strong code structure and visual consistency.

The implementation emphasizes component composition, layout reuse, semantic styling, and maintainable architecture. All data is mocked locally.

### 🧱 Tech Stack

- React (Functional Components + Hooks)

- Vite

- TypeScript

- Tailwind CSS

- React Router v6 (nested layout routing)

- Chart library: Recharts


Pages render inside the layout using React Router nested routes + <Outlet />. This keeps layout concerns separate from page logic and avoids duplication.

### 🎨 Styling Strategy
#### Tailwind + Design Tokens

The UI uses semantic theme tokens mapped through Tailwind:

- primary
- background
- surface
- muted
- success / warning / danger

This avoids hard-coded color values and keeps styling consistent and maintainable.

##### Example:
- bg-surface
- text-muted
- border-success

### 🧩 Component Strategy

Components are split into:

- Layout components — Sidebar, Header, Layout shell

- UI primitives — Card, Badge, Progress, Tabs

- Page sections

Reusable pieces were extracted only when repetition appeared, avoiding premature abstraction.

### 📦 Data Handling

- No backend required as per task instructions

- Static mocked data used

- Data structures typed with TypeScript interfaces

- Components designed so real API data can be plugged in easily

## 🚀 Getting Started

#### Install dependencies
```bash
npm install
```
#### Run:
```bash
npm run dev
```
#### Run Locally
[http://localhost:5173/](http://localhost:5173/)

##### Login credentials:
```bash
Username: emilys
Password: emilyspass
```
#### Test:
```bash
npm run test
```

#### Build:
```bash
npm run build
```

### 🔍 What I Focused On
- Clean layout composition

- Reusable UI primitives

- Visual spacing & alignment accuracy

- Semantic styling instead of hard-coded values

- Readable project structure

- Predictable routing setup

- Type-safe component props

#### 📝 Notes
SSR was intentionally not used since this is an authenticated dashboard-style UI and no SEO requirement.
