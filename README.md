# 🎬 Movie Slot Machine 2.0

> **Can't decide what to watch tonight?**
> Let fate choose for you with a cinematic slot machine powered by the **TMDB API**.

A modern web application that recreates the excitement of opening a mystery movie box. Instead of endlessly scrolling through streaming platforms, simply pull the slot machine and let destiny pick tonight's movie.

---

## ✨ Features

### 🎰 Slot Machine Animation

* Smooth slot machine rolling animation built with **CSS Keyframes** and **Vanilla JavaScript**.
* Randomly selects a movie with a satisfying lottery-like experience.

### 🍿 Cinematic Reveal

When the slot machine stops:

* The entire UI instantly disappears.
* A full-screen, high-resolution official movie poster fills the browser.
* After a **2.5-second cinematic reveal**, the movie information gently fades in.

This creates the feeling of a movie theater curtain opening before the film begins.

### ⭐ Live TMDB Data

Powered entirely by the **TMDB (The Movie Database) API**, including:

* Movie title
* Rating (1 decimal place)
* Poster
* Overview
* Release date

### 🎬 Watch Trailer

One click opens a new tab that automatically searches YouTube for the latest official trailer.

### ⚡ Continuous Draw Support

Carefully designed asynchronous state management ensures users can repeatedly draw movies without animation glitches or broken states.

---

## 🛠 Tech Stack

| Category    | Technology                                |
| ----------- | ----------------------------------------- |
| Frontend    | HTML5, CSS3, Vanilla JavaScript (ES6+)    |
| API         | TMDB REST API                             |
| Async       | Fetch API + Async/Await                   |
| Animation   | CSS Keyframes + JavaScript Timing Control |
| Environment | Node.js + npm                             |

---

## 📁 Project Structure

```text
Movie-Slot-Machine/
│
├── index.html          # Main page
├── style.css           # UI & animation styles
├── app.js              # Core application logic
├── package.json
├── .env.example
├── .gitignore
├── README.md
│
└── src/
    └── api.js          # TMDB API wrapper
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-slot-machine.git

cd movie-slot-machine
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Create your environment variables

Copy

```text
.env.example
```

to

```text
.env
```

Then add your TMDB API key.

Example:

```env
TMDB_API_KEY=YOUR_API_KEY
```

> **Important:**
> `.env` is included in `.gitignore`, so your API key will never be uploaded to GitHub.

---

## 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

*(The port may vary depending on your local server.)*

---

# 🎮 How to Use

1. Press **Spin**.
2. Watch the slot machine roll.
3. Wait for the cinematic reveal.
4. Read the movie information.
5. Click **Watch Trailer** to view the official trailer on YouTube.

---

# 🔑 API

This project uses:

* **TMDB (The Movie Database) API**

The application fetches movie data in real time, including posters, ratings, descriptions, and release dates.



