# Components Directory Structure

This directory contains all React components organized by their purpose and usage context.

## 📁 Directory Structure

```
src/components/
├── shared/           # Common components used across multiple pages
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── index.ts
├── home/             # Home page specific components
│   ├── HeroSection.tsx
│   ├── VelocitySection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── FeaturesSection.tsx
│   └── index.ts
├── portfolio/        # Portfolio page specific components
│   ├── PortfolioHero.tsx
│   ├── PortfolioStats.tsx
│   ├── PortfolioGrid.tsx
│   └── index.ts
├── why-spidertech/   # Why Spidertech page specific components
│   ├── WhySpidertechHero.tsx
│   ├── AIDrivenDevelopment.tsx
│   ├── ExpertCuration.tsx
│   ├── WhyChooseUs.tsx
│   ├── ProcessSection.tsx
│   └── index.ts
├── about/            # About page specific components
│   ├── AboutHero.tsx
│   ├── MissionVision.tsx
│   ├── TimelineSection.tsx
│   ├── TeamSection.tsx
│   └── index.ts
├── contact/          # Contact page specific components
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   └── index.ts
└── README.md
```

## 🎯 Component Categories

### Shared Components (`/shared`)

- **Navigation**: Main navigation bar with theme toggle
- **Footer**: Site footer with links and social media

### Home Page Components (`/home`)

- **HeroSection**: Main landing hero with CTA
- **VelocitySection**: AI-driven development showcase
- **AboutSection**: Company overview and story
- **ServicesSection**: Services offered by Spidertech
- **TestimonialsSection**: Client testimonials and reviews
- **CTASection**: Call-to-action section
- **FeaturesSection**: Key features and benefits

### Portfolio Components (`/portfolio`)

- **PortfolioHero**: Portfolio page hero section
- **PortfolioStats**: Success metrics and statistics
- **PortfolioGrid**: Interactive project showcase grid

### Why Spidertech Components (`/why-spidertech`)

- **WhySpidertechHero**: Hero section for why choose us
- **AIDrivenDevelopment**: AI development benefits
- **ExpertCuration**: Expert team and curation
- **WhyChooseUs**: Comparison and advantages
- **ProcessSection**: Development process workflow

### About Page Components (`/about`)

- **AboutHero**: About page hero section
- **MissionVision**: Mission and vision statements
- **TimelineSection**: Company timeline and milestones
- **TeamSection**: Team member introductions

### Contact Page Components (`/contact`)

- **ContactForm**: Contact form with validation
- **ContactInfo**: Contact information and map

## 📦 Import Usage

### Using Index Files (Recommended)

```typescript
// Clean imports using index files
import { Navigation, Footer } from "@/components/shared";
import { HeroSection, VelocitySection } from "@/components/home";
import { PortfolioHero, PortfolioGrid } from "@/components/portfolio";
```

### Direct Imports (Alternative)

```typescript
// Direct component imports
import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/home/HeroSection";
```

## 🔧 Benefits of This Structure

1. **Organization**: Components are grouped by their purpose and usage context
2. **Maintainability**: Easy to find and manage related components
3. **Scalability**: New components can be easily added to appropriate directories
4. **Reusability**: Shared components are clearly separated
5. **Clean Imports**: Index files provide clean, organized import statements
6. **Team Collaboration**: Clear structure helps team members understand component organization

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Directories**: kebab-case (e.g., `why-spidertech/`)
- **Files**: PascalCase for components, camelCase for utilities
- **Index Files**: `index.ts` for clean exports

## 🚀 Adding New Components

1. **Shared Components**: Add to `/shared` directory
2. **Page-Specific Components**: Add to appropriate page directory
3. **Update Index Files**: Export new components in the respective `index.ts`
4. **Update Imports**: Use the new index-based imports in pages

## 🎨 Component Guidelines

- Each component should be self-contained
- Use TypeScript for type safety
- Include proper JSDoc comments
- Follow consistent styling patterns
- Implement responsive design
- Use Framer Motion for animations
- Support dark/light theme modes
