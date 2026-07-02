# Sanjana Ramgarhia - Portfolio Website

A modern, dynamic, and fully responsive portfolio website built with React.js, Vite, TypeScript, Tailwind CSS, Framer Motion, and more.

## 🚀 Features

- **Modern UI/UX**: Premium dark theme with glassmorphism, gradients, and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: 
  - Animated typing effect in hero section
  - Scroll animations with Framer Motion
  - Dark/Light mode toggle
  - Scroll progress bar
  - Scroll-to-top button
- **Sections**: Hero, Skills, Experience, Projects, Education, Contact, Footer
- **Contact Form**: Integrated with EmailJS for direct communication
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Fast Loading**: Optimized performance with lazy loading
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: React Icons
- **Email Service**: EmailJS
- **SEO**: React Helmet Async

## 📦 Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form, configure EmailJS in `src/components/Contact.tsx`:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Replace the placeholder values in Contact.tsx:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollProgress.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── netlify.toml
└── .env.example
```

## 🎨 Customization

### Colors

Modify colors in `tailwind.config.js` under the `theme.extend.colors` section.

### Content

Update portfolio content in respective component files:
- Personal info: `Hero.tsx`, `Footer.tsx`
- Skills: `Skills.tsx`
- Experience: `Experience.tsx`
- Projects: `Projects.tsx`
- Education: `Education.tsx`

## 🚀 Deployment

The project is deployment-ready. Follow these instructions to deploy to various platforms:

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder via the Netlify dashboard or CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install -g gh-pages
```

2. Update `vite.config.ts` to set base path:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
})
```

3. Build and deploy:
```bash
npm run build
gh-pages -d dist
```

### Other Platforms

The `dist` folder contains the production build. You can deploy it to:
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Any static hosting service

## ⚙️ Environment Variables

For the contact form to work, you need to configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Add environment variables (`.env` file):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Update `src/components/Contact.tsx` to use these environment variables:
```typescript
const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sanjana Ramgarhia**
- GitHub: [@sanjanaramgarhia](https://github.com/sanjanaramgarhia)
- LinkedIn: [Sanjana Ramgarhia](https://www.linkedin.com/in/sanjana-ramgarhia-b95515257/)
- Email: sanjanaramgarhia@gmail.com

---

Built with ❤️ using React and modern web technologies
2. Update `vite.config.ts` to set base path:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
})
```

3. Build and deploy:
```bash
npm run build
gh-pages -d dist
```

### Other Platforms

The `dist` folder contains the production build. You can deploy it to:
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Any static hosting service

## ⚙️ Environment Variables

For the contact form to work, you need to configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Add environment variables (`.env` file):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Update `src/components/Contact.tsx` to use these environment variables:
```typescript
const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sanjana Ramgarhia**
- GitHub: [@sanjanaramgarhia](https://github.com/sanjanaramgarhia)
- LinkedIn: [Sanjana Ramgarhia](https://www.linkedin.com/in/sanjana-ramgarhia-b95515257/)
- Email: sanjanaramgarhia@gmail.com

---

Built with ❤️ using React and modern web technologies
