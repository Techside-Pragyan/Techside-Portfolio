# Techside Portfolio

A world-class, premium, and futuristic developer portfolio built for an AI/ML Engineer and Full Stack Developer.

## Features

- **Modern & Futuristic Design**: Premium aesthetics with dark neon gradients, glassmorphism, and dynamic animations.
- **Responsive Layout**: Fully responsive and optimized for mobile, tablet, and desktop viewing.
- **Smooth Animations**: High-performance framer-motion based entrance, scroll, and hover animations.
- **Smooth Scrolling**: Implemented using `@studio-freight/react-lenis` for an ultra-premium browsing experience.
- **Dynamic Particles**: Ambient background particles built using purely React and Framer Motion.
- **Contact Form**: Integrated functional contact form using EmailJS.
- **Clean Architecture**: Modular components, sections, and scalable folder structure.

## Tech Stack

- **Framework**: React.js + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Scrolling**: React Scroll & Lenis
- **Form Handling**: EmailJS

## Folder Structure

```
src/
 ├── components/       # Reusable components (Navbar, Background)
 ├── sections/         # Individual page sections (Hero, About, Projects, etc.)
 ├── App.jsx           # Main layout and lenis configuration
 ├── main.jsx          # React entry point
 └── index.css         # Global Tailwind directives & custom utilities
```

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/pragyan/techside-portfolio.git
   cd techside-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure EmailJS:
   Update the `Contact.jsx` file with your EmailJS `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This portfolio is production-ready and optimized for fast loading and SEO.

### Deploy to Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Framework preset should automatically be detected as **Vite**.
4. Click **Deploy**.

### Deploy to Netlify

1. Push your code to GitHub.
2. Go to [Netlify](https://netlify.com/) and create a new site from GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

## License

MIT License. Feel free to customize and use this for your own portfolio.