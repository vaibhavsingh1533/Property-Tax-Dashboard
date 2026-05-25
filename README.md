# Property Tax Analytics Dashboard

A responsive Property Tax Analytics Dashboard built as part of the **NUDM Internship Assessment 2026**.

This project helps analyze property tax data across multiple cities using interactive KPIs, comparison charts, filtering, and an AI-powered chat assistant for natural language queries.

---

## Features

### KPI Dashboard
Track important property tax metrics at a glance:

- Total Properties Registered
- Total Approved Properties
- Total Rejected Properties
- Total Collection (INR)

All KPI values update instantly when a city is selected.

---

### Tenant Filter
Filter the dashboard by city using a dropdown.

Supported options:
- All Cities
- Mumbai
- Delhi
- Bengaluru
- Chennai
- Hyderabad
- Pune
- Jaipur
- Ahmedabad
- Kolkata
- Lucknow

Selecting a city updates the full dashboard in real time.

---

## Data Visualizations

Interactive charts built using Recharts:

### Total Collection by City
Compare total property tax collection across all cities.

### Property Status Comparison
Compare:
- Approved properties
- Rejected properties
- Pending properties

### Property Type Distribution
Visual breakdown of property categories.

---

## AI Chat Assistant

An AI-powered assistant is integrated into the dashboard using the OpenRouter API.

Users can ask questions in plain English such as:

- Which city has the highest total collection?
- How many properties are rejected in Mumbai?
- What percentage of Delhi properties are approved?
- Which city has the most pending properties?
- Compare total registrations between Pune and Jaipur.
- Give a complete summary of all cities.

The AI analyzes summarized dashboard data and returns intelligent responses.

---

## Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS

Charts & UI:
- Recharts
- React Icons

API & AI:
- Axios
- OpenRouter API

---

## Project Structure

```bash
Property-Tax-Dashboard/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── KPIcard.jsx
│   │   ├── Filter.jsx
│   │   ├── Charts.jsx
│   │   └── ChatBot.jsx
│   │
│   ├── data/
│   │   └── properties.json
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/vaibhavsingh1533/Property-Tax-Dashboard.git
```

Move into the project folder:

```bash
cd Property-Tax-Dashboard
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

Start the development server:

```bash
npm run dev
```

---

########## Important Note ###########

This project uses the OpenRouter API for the AI Chat Assistant.

To test the AI feature, create a `.env` file in the project root and add:

```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

The `.env` file is intentionally excluded from GitHub for security reasons.

## Submission Checklist

Included in this repository:

- Source code
- properties.json dataset
- README setup instructions
- KPI dashboard
- Tenant filtering
- Comparison charts
- AI chat assistant

---

## GitHub Repository

Repository Link:

https://github.com/vaibhavsingh1533/Property-Tax-Dashboard

---

## Author

**Vaibhav Singh**
