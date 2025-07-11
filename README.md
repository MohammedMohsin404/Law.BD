# ⚖️ Qanun BD

A modern, responsive, and interactive web app to help users find verified lawyers and book appointments with ease.

🔗 Live Preview: [http://qanun-bd.surge.sh](http://qanun-bd.surge.sh)

---

## 🖼️ Overview

Qanun BD is a React-based legal appointment booking platform designed for seamless user experience. Built with **React (Vite)**, **React Router 7**, **Tailwind CSS**, **Recharts**, and **localStorage** — it allows users to view top lawyers, book or cancel appointments, and visualize fees via a bar chart.

---

## ✅ Features (In Detail)

### 🧑‍⚖️ 1. Lawyer Directory
- List of lawyers with name, specialty, license number, and availability.
- Fallback image handler for broken images.
- Data is fetched using React Router's `loader()`.

### 📋 2. Lawyer Details Page
- Route-based lawyer detail rendering using `useParams`.
- Smooth transitions between pages without reload.

### 🗓️ 3. Book Appointment
- Book any lawyer and persist their ID in `localStorage`.
- Prevents duplicate bookings with toast warnings.

### ❌ 4. Cancel Appointment
- Users can cancel any booking.
- Automatically updates local storage and UI.
- Shows toast notification after cancellation.

### 📊 5. Appointment Fee Visualization (Recharts)
- Bar chart displays appointment fees of booked lawyers.
- Chart updates in real time when data changes.
- Responsive layout and conditional rendering (chart hidden if no data).

### 🔄 6. Persistent State via localStorage
- Appointments are stored in browser storage.
- Reloading the app restores all previously booked lawyers.

### ⏳ 7. Global Route Loading Indicator
- Loader component shows up on route changes or data fetching.
- Ensures consistent feedback to users.

### 🔔 8. React Toastify Integration
- Alerts for:
  - Booking successful
  - Already booked
  - Cancel confirmation

### 🚫 9. Custom 404 Page
- Unique design with brand color `#0EA106`.
- Encouraging message and link to return home.
- Footer is hidden on error pages.

### 🧠 10. Blog Page
Educational React content for beginners:
- What is `useState`?
- What is `useEffect`?
- Custom Hooks and when to use them
- Controlled vs Uncontrolled components
- What is `useFormStatus()`?

### 🌐 11. SEO Ready with Helmet
- Page-specific titles using `react-helmet-async`.
- Helps improve search engine indexing.
- Fallback for unsupported React versions handled.

### 💅 12. Responsive UI
- Built with Tailwind CSS
- Mobile-first and fully responsive
- Grid-based layout with accessibility in mind

---

## 🛠️ Tech Stack

- **React 19 +**
