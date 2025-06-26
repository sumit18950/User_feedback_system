<<<<<<< HEAD
# Feedback Dashboard

A modern full-stack feedback dashboard for collecting, displaying, and analyzing user feedback with light/dark mode support.

---

## Features
- Submit feedback with name, email, category, rating, and message
- Dashboard with overall rating, review cards, and rating breakdown
- Filter reviews by feedback type
- Responsive, modern UI with light/dark mode toggle
- Toast notifications and confirmation modals

---

## Tech Stack
- **Frontend:** React, Tailwind CSS, React Toastify
- **Backend:** Node.js, Express, MongoDB (Mongoose)

---

## Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (local or cloud instance)

---

## Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd Feedback_dashboard
```

### 2. Setup the Backend
```bash
cd Backend
npm install
```

- Create a `.env` file in the `Backend` folder with your MongoDB URI:
  ```env
  MONGO_URI=mongodb://localhost:27017/feedback_dashboard
  PORT=5000
  ```
- Start the backend server:
  ```bash
  npm start
  ```
  The backend runs on [http://localhost:5000](http://localhost:5000)

### 3. Setup the Frontend
```bash
cd ../Frontend
npm install
```
- Start the frontend dev server:
  ```bash
  npm run dev
  ```
  The frontend runs on [http://localhost:5173](http://localhost:5173) (default Vite port)

---

## Project Structure
```
Feedback_dashboard/
  Backend/      # Express API, MongoDB models, controllers
  Frontend/     # React app, Tailwind CSS, components
```

---

## Walkthrough

### Home/Dashboard
- See the overall average rating and a breakdown of all feedback ratings.
- Browse all reviews, filter by feedback type (bug, feature, suggestion, other).
- Each review card shows the user's name, date, message, star rating, and feedback type.

### Add Feedback
- Click "Add Feedback" in the navbar.
- Fill in your name, email, select a category, choose a star rating, and write your feedback message.
- On submit, a confirmation popup appears. Confirm to submit.
- A toast notification confirms successful submission.
- Your feedback appears instantly in the dashboard.

### Theme Toggle
- Use the toggle in the navbar to switch between light and dark mode. All components adapt their colors accordingly.

---

## Customization
- Update colors, branding, or add new feedback categories in the code as needed.
- Extend the backend for authentication, admin review, or analytics.

---

## License
MIT
=======
# User_feedback_system
>>>>>>> e98d723b24bd5e502b3343d4b4dac0ed79dfa63f
