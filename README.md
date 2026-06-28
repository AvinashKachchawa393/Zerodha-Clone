<div align="center">

# 📈 TradeZen

### Full-Stack Stock Trading & Analytics Platform

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://chartjs.org/)

[🚀 Live Demo](https://www.linkedin.com/feed/update/urn:li:activity:7341260944888483840/) · [📂 Explore Code](https://github.com/AvinashKachchawa393/Zerodha-Clone) · [🐛 Report Bug](https://github.com/AvinashKachchawa393/Zerodha-Clone/issues)

</div>

---

## ⚡ What is TradeZen?

**TradeZen** is a production-grade, full-stack stock trading platform where users can **buy, sell, and track stocks in real time** — powered by live data pipelines, interactive analytics dashboards, and secure authentication.

> Built to simulate a real brokerage experience — combining robust backend API engineering with data visualization that turns raw numbers into actionable insights.

---

## 🎯 Key Highlights

| 📊 Analytics Dashboard | 🔐 Secure Auth | ⚡ Real-Time Data | 🗄️ REST API |
|---|---|---|---|
| Chart.js visualizations for portfolio & watchlist | Passport.js with session management | Live stock price updates | 8+ RESTful endpoints |

---

## ✨ Features

- **📊 Interactive Analytics Dashboard** — Visualize portfolio holdings, watchlist performance, and P&L using dynamic Chart.js charts (bar, line, doughnut)
- **💹 Real-Time Buy / Sell Engine** — Execute trades instantly with live price updates reflected across all dashboards
- **🔐 Secure Authentication** — Passport.js local strategy with encrypted sessions and protected routes
- **📡 REST API Architecture** — 8+ RESTful endpoints handling transactions, user data, holdings, and market queries
- **📱 Responsive UI** — Fully mobile-optimized interface built with React and Bootstrap
- **🗃️ Structured Data Layer** — MongoDB schema designed for fast querying of holdings, orders, and watchlist data

---

## 🛠️ Tech Stack

```
Frontend          →  React.js, Bootstrap, Chart.js
Backend           →  Node.js, Express.js
Database          →  MongoDB (Atlas)
Auth              →  Passport.js (Local Strategy)
API Design        →  RESTful Architecture
Version Control   →  Git / GitHub
```

---

## 📸 Screenshots

> *(Add dashboard screenshots here — recruiters spend 3 seconds, make them count)*

| Dashboard Overview | Portfolio Analytics | Watchlist |
|---|---|---|
<div style="display:flex">
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/567ee1a0-e3f7-4a09-96be-61e29a453053" />
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/c7953d0a-8819-4773-9c98-8adae6150135" />
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/8f0d5b91-e7a7-42f4-baca-e8bbde64d13f" />
</div>

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    CLIENT (React.js)                 │
│     Dashboard │ Portfolio │ Watchlist │ Trade UI     │
└────────────────────────┬────────────────────────────┘
                         │ HTTP Requests
┌────────────────────────▼────────────────────────────┐
│              REST API LAYER (Express.js)             │
│   /auth  │  /stocks  │  /orders  │  /holdings       │
└────────────────────────┬────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────┐
│           DATA LAYER (MongoDB + Mongoose)            │
│    Users │ Orders │ Holdings │ Watchlist │ Stocks    │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AvinashKachchawa/tradezen.git
cd tradezen

# 2. Install backend dependencies
npm install

# 3. Install frontend dependencies
cd frontend && npm install && cd ..

# 4. Set up environment variables
cp .env.example .env
# Add your MongoDB URI and session secret

# 5. Run the app
npm run dev
```

App runs on `http://localhost:3000`

---

## 📁 Project Structure

```
tradezen/
├── backend/
│   ├── models/          # MongoDB schemas (User, Stock, Order, Holdings)
│   ├── routes/          # REST API route handlers
│   ├── middleware/       # Auth middleware, error handlers
│   └── app.js           # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components (Dashboard, Chart, Trade)
│   │   └── pages/       # Page-level views
└── .env.example
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/stocks` | Fetch all available stocks |
| GET | `/api/holdings` | Get user's portfolio |
| POST | `/api/orders/buy` | Execute a buy order |
| POST | `/api/orders/sell` | Execute a sell order |
| GET | `/api/watchlist` | Fetch user's watchlist |
| POST | `/api/watchlist/add` | Add stock to watchlist |

---

## 💡 What I Learned

- Designing **scalable REST API architecture** with Express.js for high-frequency trade operations
- Building **real-time data visualization dashboards** with Chart.js from raw MongoDB data
- Implementing **secure session-based authentication** flows using Passport.js
- Structuring **MongoDB schemas** for complex relational data (users ↔ orders ↔ holdings)
- Applying **MVC architecture** for clean, maintainable full-stack codebases

---

## 🙋 Author

**Avinash Kachchawa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/avinash-saini-profile)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AvinashKachchawa)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:avinashsaini393@gmail.com)

---

<div align="center">

⭐ **Star this repo if you found it useful!**

*Built with ❤️ by Avinash Kachchawa*

</div>
