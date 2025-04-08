# Luca Biordi - Tech VP Portfolio

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.x-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)

A professional personal website built with modern technologies to showcase Luca Biordi's profile, portfolio, and expertise as a VP of Technology and innovation leader.

![Website Screenshot](https://placeholder.co/600x300)

## 🚀 Features

- Modern and minimalist responsive design
- Automatic light/dark theme with manual override option
- Sections for project portfolio, news, CV, and contact
- Smooth animations and intuitive user interface
- SEO optimized
- Fast loading times thanks to server-side rendering

## 🔧 Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with server-side rendering
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for more robust development
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid styling
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) - Primitive headless accessible components
  - [shadcn/ui](https://ui.shadcn.com/) - Reusable UI components based on Radix UI
- **Icons**: [Lucide React](https://lucide.dev/) - Consistent and customizable icon set
- **Fonts**: 
  - [Inter](https://fonts.google.com/specimen/Inter) - Modern sans-serif font for main text
  - [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) - Display font for titles/branding
  - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Elegant serif font for accents
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) - Solution for light/dark themes
- **Animations**: 
  - Custom CSS
  - [Tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) - Animation utilities for Tailwind
- **Development Tools**:
  - ESLint - Code linting
  - Prettier - Code formatting

## 🛠️ Installation and Usage

### Prerequisites
- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tech-vp-website.git
cd tech-vp-website

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Create an optimized production build
- `pnpm start` - Start the production server
- `pnpm lint` - Run code linting

## 📂 Project Structure

```
tech-vp-website/
├── app/                      # Next.js App Router
│   ├── about/                # About Page
│   ├── projects/             # Projects Page
│   ├── cv/                   # CV Page
│   ├── news/                 # News Page
│   ├── contact/              # Contact Page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Main app layout
│   └── page.tsx              # Homepage
├── components/               # Reusable React components
│   ├── ui/                   # Base UI components
│   ├── header.tsx            # Header component
│   ├── footer.tsx            # Footer component
│   └── ...                   # Other components
├── lib/                      # Utilities and helpers
├── hooks/                    # Custom React hooks
├── public/                   # Static files
├── styles/                   # Additional global styles
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 📝 License

This project is licensed under the terms of the [MIT License](LICENSE).

## 👨‍💻 Contact

Luca Biordi - [lucabio84@gmail.com](mailto:lucabio84@gmail.com)
