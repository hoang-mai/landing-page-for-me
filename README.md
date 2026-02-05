# Mai Anh Hoàng | Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 16 and React 19, featuring smooth animations and a sleek design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Responsive Design** - Optimized for all screen sizes
- **Animated Sections** - Powered by Framer Motion for fluid animations
- **Contact Form** - Integrated with EmailJS for direct email sending
- **SEO Optimized** - Meta tags and Open Graph configured for better visibility
- **Fast Performance** - Built on Next.js App Router for optimal loading

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Styling | TailwindCSS 4 |
| Language | TypeScript 5 |
| Animations | Framer Motion |
| Icons | React Icons |
| Email Service | EmailJS |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main entry page
│   └── globals.css         # Global styles
└── component/
    ├── landing-page/       # Landing page sections
    │   ├── Home.tsx        # Hero section
    │   ├── About.tsx       # About me section
    │   ├── Experience.tsx  # Work experience
    │   ├── Projects.tsx    # Project showcase
    │   └── Contact.tsx     # Contact form
    └── layout/
        └── Header.tsx      # Navigation header
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/landing-page-for-me.git
   cd landing-page-for-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Customization

To personalize this portfolio:

1. Update personal information in each component under `src/component/landing-page/`
2. Modify metadata in `src/app/layout.tsx`
3. Adjust colors and styling in `src/app/globals.css`
4. Replace project images in `public/` folder

## 📧 Contact Form Setup

This project uses [EmailJS](https://www.emailjs.com/) for the contact form:

1. Create a free account at EmailJS
2. Set up an email service and template
3. Add your credentials to the `.env` file

## 🚢 Deployment

### Vercel (Recommended)

Deploy instantly with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The project can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Mai Anh Hoàng</strong>
</p>
