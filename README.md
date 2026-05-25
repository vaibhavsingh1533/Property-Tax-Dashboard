# Property Tax Analytics Dashboard

A React-based dashboard built for the NUDM Internship Assessment.

## Features

### KPI Dashboard
- Total Properties Registered
- Total Approved Properties
- Total Rejected Properties
- Total Collection (INR)

### Tenant Filter
- Filter dashboard by city
- All Cities option
- Live KPI and chart updates

### Charts
- Total Collection by City
- Property Status Comparison
- Property Type Distribution

### AI Chat Assistant
Ask questions in plain English such as:
- Which city has highest total collection?
- How many properties are rejected in Mumbai?
- What percentage of Delhi properties are approved?
- Which city has most pending properties?
- Compare total registrations between Pune and Jaipur.

## Tech Stack
- React
- Vite
- Tailwind CSS
- Recharts
- Axios
- React Icons
- OpenRouter API

## Installation

Clone repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## Environment Variables

Create `.env` file:

```env
VITE_OPENROUTER_API_KEY=your_api_key_here
```

Important:
Do not commit `.env` file.

## Project Structure

```bash
src/
  components/
    Navbar.jsx
    KPIcard.jsx
    Filter.jsx
    Charts.jsx
    ChatBot.jsx

  data/
    properties.json

  App.jsx
  main.jsx
```

## Submission Notes
- properties.json included
- README included
- AI chatbot integrated
- Public GitHub repository

## Author
Vaibhav Singh