# Spidertech.in - Modern Web Solutions

A modern, responsive website for Spidertech.in built with Next.js, React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, and futuristic design targeting Gen-Z audience
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Customizable theme system with smooth transitions
- **SEO Optimized**: Complete SEO implementation with meta tags, Open Graph, and structured data
- **Performance**: Fast loading with image optimization and lazy loading
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel Ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── why-spidertech/    # Why Spidertech page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero section
│   ├── FeaturesSection.tsx # Features section
│   ├── AboutSection.tsx   # About section
│   ├── ServicesSection.tsx # Services section
│   ├── TestimonialsSection.tsx # Testimonials section
│   ├── CTASection.tsx     # Call-to-action section
│   ├── ContactForm.tsx    # Contact form
│   ├── ContactInfo.tsx    # Contact information
│   ├── AboutHero.tsx      # About page hero
│   ├── MissionVision.tsx  # Mission & Vision section
│   ├── TimelineSection.tsx # Company timeline
│   └── TeamSection.tsx    # Team section
└── contexts/              # React contexts
    └── ThemeContext.tsx   # Theme management
```

## 🎨 Design System

### Colors

- **Primary**: Purple (#673DE6)
- **Secondary**: Green (#10B981)
- **Accent**: Yellow (#F59E0B)
- **Neutral**: Gray scale with dark mode support

### Typography

- **Headings**: Bold, modern fonts with gradient text effects
- **Body**: Clean, readable Inter font
- **Responsive**: Scales appropriately across devices

### Components

- **Cards**: Glass morphism effects with hover animations
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean, accessible form components
- **Navigation**: Sticky navigation with theme toggle

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd spidertech-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home Page (`/`)

- Hero section with animated background
- Features showcase
- About section
- Services overview
- Client testimonials
- Call-to-action

### About Page (`/about`)

- Company story
- Mission & Vision
- Company timeline
- Team showcase

### Why Spidertech (`/why-spidertech`)

- Unique selling points
- Competitive advantages
- Why choose us

### Portfolio (`/portfolio`)

- Project showcase
- Case studies
- Work examples

### Contact (`/contact`)

- Contact form
- Contact information
- Location map
- Social media links

## 🎯 SEO Features

- **Meta Tags**: Dynamic title and description for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD implementation
- **Canonical URLs**: Proper canonical URL structure
- **Alt Text**: All images have descriptive alt text
- **Heading Hierarchy**: Proper H1, H2, H3 structure

## 🌙 Theme System

The website includes a comprehensive theme system:

- **Light/Dark Mode**: Toggle between light and dark themes
- **System Preference**: Automatically detects user's system preference
- **Persistent**: Remembers user's theme choice
- **Smooth Transitions**: Animated theme switching

## 📊 Performance

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Minification**: Production builds are minified
- **Caching**: Optimized caching strategies
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` with proper metadata
3. Import and use existing components
4. Add navigation links

### Modifying Styles

- Global styles: `src/app/globals.css`
- Component styles: Use TailwindCSS classes
- Custom CSS: Add to `globals.css` or component files

### Adding Animations

- Use Framer Motion for component animations
- Add CSS animations in `globals.css`
- Use TailwindCSS animation classes

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

## 📝 Naming Conventions

- **Components & Files**: UpperCamelCase (e.g., `HeroSection.tsx`)
- **Functions**: lowerCamelCase (e.g., `handleSubmit`)
- **Variables**: snake_case (e.g., `user_name`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:

- Email: info@spidertech.in
- Phone: +91 8305050674
- WhatsApp: +91 8305050674
- Website: https://spidertech.in

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- The open-source community for inspiration and tools
