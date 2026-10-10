# Verbose 💬

> **Your conversations. On autopilot.**  
> An intelligent messaging automation platform and API designed to help businesses automate repetitive conversations, guide customers, and seamlessly integrate across communication channels.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](#frontend)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](#frontend)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](#frontend)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.142-009688?logo=fastapi&logoColor=white)](#backend)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)](#backend)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

---

## 📌 Overview

**Verbose** is a modern full-stack conversational platform that empowers businesses to design, test, and deploy automated messaging assistants. Whether answering common customer inquiries, qualifying leads, or streamlining multi-channel support on platforms like **Telegram** and **WhatsApp**, Verbose provides a modular foundation and developer-friendly API.

---

## ✨ Key Features

- **🎯 Custom Bot Behaviors:** Configure instructions, personality, and response flows tailored to specific business domains.
- **⚡ Reusable Response Library:** Organize frequently asked questions, business hours, and pre-configured reply workflows for consistent communications.
- **💬 Interactive Assistant Sandbox:** Live interactive preview component simulating conversational interaction directly on the client.
- **🌐 Multi-Channel Support:** Built with modular adapters for messaging channels like **WhatsApp** and **Telegram**.
- **🚀 High-Performance REST API:** Built with FastAPI, featuring automated OpenAPI / Swagger documentation and health monitoring.
- **🗄️ Database Ready:** Integrated configuration for Supabase PostgreSQL backend for persistence and conversation tracking.
- **✨ Fluid Modern UI:** Responsive interface crafted with React 19, Tailwind CSS v4, and smooth micro-animations powered by Motion.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) & [LottieFiles Player](https://lottiefiles.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)

### Backend
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
- **Server:** [Uvicorn](https://www.uvicorn.org/)
- **Validation & Serialization:** [Pydantic v2](https://docs.pydantic.dev/)
- **Database / Cloud:** [Supabase](https://supabase.com/)
- **HTTP Client:** [HTTPX](https://www.python-httpx.org/)

---

## 📁 Project Structure

```plaintext
Verbose/
├── backend/                  # FastAPI backend service
│   ├── app/
│   │   ├── config.py         # App configuration & environment loader
│   │   ├── database.py       # Database connection handler
│   │   ├── main.py           # Application entry point & router definitions
│   │   └── src/
│   │       ├── models/       # Data models (bot, message, conversation, integration)
│   │       ├── schemas/      # Pydantic schemas
│   │       ├── services/     # Business logic & automation engines
│   │       ├── sling/        # Route handlers & endpoints
│   │       └── utils/        # Utility helpers
│   └── requirements.txt      # Python dependencies
│
├── frontend/                 # React + Vite frontend client
│   ├── src/
│   │   ├── assets/           # Static images, icons, and illustrations
│   │   ├── components/       # Reusable UI components
│   │   │   ├── home/         # Landing page sections (Hero, ChatPreview, Channels, etc.)
│   │   │   ├── Navbar.jsx    # Top navigation bar
│   │   │   └── Footer.jsx    # App footer
│   │   ├── pages/            # Page views (Home, Demo, Pricing, Features, etc.)
│   │   ├── routing/          # React Router route registry
│   │   ├── App.jsx           # Root layout component
│   │   └── main.jsx          # Frontend DOM mount
│   ├── package.json          # Node dependencies and scripts
│   └── vite.config.js        # Vite configuration
│
├── .env.example              # Sample environment configuration
├── LICENSE                   # Apache 2.0 license
└── readme.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher) & **npm**
- **Python** (v3.10 or higher) & **pip**
- **Git**

---

### 1. Clone the Repository

```bash
git clone https://github.com/Abhi757575/Verbose.git
cd Verbose
```

---

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Populate `.env` with your credentials:

```env
# Supabase Database & Auth
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_KEY="your-supabase-api-key"

# Application Settings (Optional)
PORT=8000
ENVIRONMENT="development"
```

---

### 3. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   - **Windows:**
     ```powershell
     python -m venv .venv
     .venv\Scripts\activate
     ```
   - **macOS / Linux:**
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Launch the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   The backend API will be available at `http://localhost:8000`.

---

### 4. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend app will be running at `http://localhost:5173` (or `http://localhost:5174`).

---

## 📡 API Endpoints & Documentation

FastAPI provides interactive API documentation out of the box:

- **Swagger UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

### Primary API Routes (`/api/v1/verbose`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/verbose/` | Root welcome message |
| `GET` | `/api/v1/verbose/health` | Health check endpoint (`status: healthy`) |

---

## 🔌 Supported Messaging Channels

Verbose is designed to unify multiple conversational touchpoints:

| Channel | Status | Description |
| :--- | :--- | :--- |
| **Web Chat Widget** | Active | In-app interactive preview & test environment |
| **Telegram** | In Development | Bot API integration for direct messaging channels |
| **WhatsApp** | Planned | Business Cloud API integration for enterprise communications |

---

## 🧪 Development Scripts

### Frontend Scripts
- `npm run dev`: Starts the local development server.
- `npm run build`: Bundles the application for production.
- `npm run lint`: Runs ESLint checks.
- `npm run preview`: Locally previews production build.

---

## 📄 License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](./LICENSE) file for more details.
