# 🌍 TripPlanner – Smart Travel Booking System

A modern and responsive travel booking web application built with **React.js** that allows users to explore destinations, manage wishlists, book trips, make online payments, and view their booking history.

🔗 **Live Demo:** https://trip-planner-omega-ruddy.vercel.app/

---

## ✨ Features

* 🏠 **Home Page** – Explore the TripPlanner platform
* 🌍 **Destinations** – Browse available travel destinations
* 📦 **Travel Packages** – Explore different travel packages
* ❤️ **Wishlist** – Save your favorite destinations
* 🔐 **Authentication** – User Login & Signup using Firebase Authentication
* 👤 **User Profile** – Manage user information
* 📝 **Trip Booking** – Book trips with traveler details
* 💳 **Online Payment** – Secure payment integration using Razorpay
* 🧾 **Payment Receipt** – View and print payment receipts
* 📚 **Booking History** – View previously completed bookings
* 🗑️ **Booking Management** – Manage bookings from booking history
* 📱 **Responsive Design** – Works across desktop, tablet and mobile devices
* 🔒 **Protected Routes** – Authentication-based access to user features

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database & Authentication

* Firebase Authentication
* Firebase Firestore

### Payment

* Razorpay

### Deployment

* Vercel – Frontend
* Render – Backend

---

## 📂 Main Features

### 🔐 Authentication

Users can create an account and log in using Firebase Authentication.

### ❤️ Wishlist

Users can add destinations to their wishlist and manage their saved destinations.

### 🧳 Booking

Users can select a destination, enter the number of travelers and proceed with the booking.

### 💳 Razorpay Payment

The application uses Razorpay for online payments. The backend creates Razorpay orders securely without exposing the Razorpay secret key on the frontend.

### 🧾 Booking Receipt

After successful payment, users receive a detailed receipt containing:

* Booking ID
* Transaction ID
* Destination
* Number of Travelers
* Trip Duration
* Amount Paid
* Payment Status
* Payment Method
* Booking Date & Time

Users can also print the receipt.

### 📚 Booking History

Confirmed bookings are stored in Firebase Firestore and displayed in the user's Booking History.

---

## 🔥 Firestore Structure

Bookings are stored for each authenticated user using their Firebase UID:

```text
users
 └── userUID
      └── bookings
           ├── TRP-XXXXXXXX
           ├── TRP-XXXXXXXX
           └── ...
```

Each booking contains information such as:

```text
bookingId
transactionId
destinationId
destinationName
destinationImage
travelers
duration
total
status
paymentMethod
date
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/VEDANT356/TripPlanner.git
```

### 2. Go to the project folder

```bash
cd TripPlanner
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Start the frontend

```bash
npm run dev
```

---

## ⚙️ Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend:

```bash
node index.js
```

The backend runs locally on:

```text
http://localhost:5000
```

> ⚠️ Never upload your `.env` file or Razorpay secret key to GitHub.

---

## 📸 Project Highlights

* Modern travel website UI
* Destination exploration
* Wishlist functionality
* Firebase authentication
* Firestore booking storage
* Razorpay payment integration
* Printable payment receipt
* Booking history
* Responsive design

---

## 👨‍💻 Developer

### Vedant Kotkar

**BSc Computer Science Student | Frontend Web Developer**

I'm passionate about web development and enjoy building responsive, user-friendly and real-world web applications.

### 🔗 Connect With Me

* 💼 LinkedIn: https://www.linkedin.com/in/vedant-kotkar-48976236/
* 🐙 GitHub: https://github.com/VEDANT356
* 📸 Instagram: https://www.instagram.com/st.v3dant

---
