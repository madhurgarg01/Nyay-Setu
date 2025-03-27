# NyaySetu - AI Powered Legal Assistant

NyaySetu is an AI-powered web application that provides legal assistance to users by offering features like legal document analysis, case outcome predictions, AI-based chatbot, and access to verified lawyers. The platform aims to bridge the gap between legal knowledge and common people, ensuring faster and smarter access to legal services.

---

## 🌟 Features

- 🧑‍⚖️ **AI Legal Bot**: Get instant legal guidance through an AI-powered chatbot.
- 📄 **Document Analysis**: Upload and analyze legal documents for key insights.
- ⚖️ **Case Prediction**: Predict the possible outcome of legal cases using AI models.
- 👩‍💼 **Find Verified Lawyers**: Search and connect with verified legal professionals.
- 💬 **Multilingual Support**: Communicate with the bot in multiple languages.
- 📞 **Contact Support**: Reach out to the team for any queries or legal consultations.

---

## 📂 Directory Structure

```
madhurgarg01-nyay-setu/
├── README.md
└── NyaySetu-main/
    ├── README.md
    ├── checkModels.js
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── server.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── .env
    ├── .gitignore
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── AnimatedSection.tsx
        │   ├── FeatureCard.tsx
        │   ├── Footer.tsx
        │   ├── GradientButton.tsx
        │   ├── Navbar.tsx
        │   └── StatCard.tsx
        └── pages/
            ├── About.tsx
            ├── AIBot.tsx
            ├── CasePrediction.tsx
            ├── Contact.tsx
            ├── DocumentAnalysis.tsx
            ├── FindLawyer.tsx
            └── Home.tsx
```

---

## ⚙️ Tech Stack

- Frontend: React + TypeScript + Tailwind CSS + Vite
- Backend: Node.js + Express
- AI Services: Integrated AI models for case prediction and document analysis
- Styling: Tailwind CSS + PostCSS
- Build Tool: Vite

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/madhurgarg01/nyay-setu.git
   cd madhurgarg01-nyay-setu/NyaySetu-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure necessary environment variables.

4. Run the application:
   ```bash
   npm run dev
   ```

---

## 📌 Notes

- Make sure AI models are properly configured (`checkModels.js`) before starting.
- Refer to the `/components` and `/pages` directories for UI components and views.
- Backend API and AI integration are handled inside `server.js`.

---

## 🤝 Contribution

Feel free to fork the repository, raise issues, and submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.
