# Swarnim Khanal — Portfolio

A fast, responsive personal portfolio built with **React + Tailwind CSS**, animated with **Framer Motion**, deployed on **GitHub Pages**, and tracked with **Google Analytics 4**.

Live: [https://swarnim2192.github.io/portfolio-website](https://swarnim2192.github.io/portfolio-website)

---

## ✨ Features
- Built with React (CRA) + Tailwind CSS (dark mode ready)
- Framer Motion animations (hero, skills, projects)
- Project cards with hover and scroll effects
- Analytics events for CTAs, project clicks, and socials (GA4)
- Modular section-based component structure
- Easy deployment with GitHub Pages (`gh-pages`)

---

## 🧱 Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion  
- **Frameworks & Platforms:** Flutter, Supabase, Firebase, n8n, Eleven8Labs  
- **Backend & APIs:** Flask, Streamlit  
- **Data Tools:** Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, yFinance  
- **Languages:** Python, C++, JavaScript (ES6+), HTML5, CSS3, SQL, Bash  
- **Tools:** Git, GitHub, VS Code, Jupyter Notebook, Google Analytics 4  

---

## 📁 Project Structure
portfolio-website/
├─ public/
│ ├─ index.html
│ ├─ profile.jpg # profile photo
│ └─ txstlogo.jpg # TXST circular logo
├─ src/
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ Hero.jsx
│ │ ├─ About.jsx
│ │ ├─ Education.jsx
│ │ ├─ Experience.jsx
│ │ ├─ Skills.jsx
│ │ ├─ Projects.jsx
│ │ └─ Contact.jsx
│ ├─ analytics.js # GA4 event tracker
│ ├─ App.jsx
│ └─ index.css
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json


---

## 🚀 Getting Started (Local Setup)
**Requirements:** Node.js 18+ and npm

```bash
# install dependencies
npm install

# start development server
npm start

Tailwind is already configured in tailwind.config.js and src/index.css.

🛠️ Build & Deploy

This project uses GitHub Pages for hosting.

# create a production build
npm run build

# deploy to gh-pages branch
npx gh-pages -d build

📊 Google Analytics 4

Google Analytics is integrated via public/index.html.
To change the tracking ID:

Open public/index.html

Replace your GA4 ID (G-N75FHMKRKS)

Redeploy:

npm run build
npx gh-pages -d build


Events are tracked via:

export function track(name, params = {}) {
  if (window.gtag) window.gtag("event", name, params);
}


Used in Hero, Projects, Contact, and Footer.


🧩 Troubleshooting

404 Error: run npm run build && npx gh-pages -d build again

Images not showing: check paths and process.env.PUBLIC_URL

Analytics not tracking: verify GA4 ID

Zsh errors: run commands in small chunks or use Python/Node to patch files

📬 Contact

GitHub: @swarnim2192

LinkedIn: Swarnim Khanal

Email: swarnimkhanal7@gmail.com
