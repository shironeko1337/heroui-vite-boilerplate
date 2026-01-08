# HeroUI + Vite + React Boilerplate

A modern, production-ready boilerplate for building web applications with HeroUI, React 19, TypeScript, and Tailwind CSS v4.

## What's Included

This boilerplate comes pre-configured with:

### Core Framework
- **[React 19](https://react.dev/)** - Latest version of React with improved performance and features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development with full TypeScript support
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server

### UI & Styling
- **[HeroUI](https://heroui.com/)** - Beautiful, accessible React component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework (latest version)
- **[SASS/SCSS](https://sass-lang.com/)** - Powerful CSS preprocessor for advanced styling
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library

### Features
- Hot Module Replacement (HMR) for instant feedback during development
- Optimized production builds
- TypeScript configuration for strict type checking
- Pre-configured Tailwind CSS with HeroUI theme integration
- SCSS support with Tailwind directives
- Dark mode support via custom variants

## Usage as a Boilerplate

### Prerequisites
- Node.js 16+
- npm, yarn, or pnpm

### Getting Started

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd <your-project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Your app will be running at `http://localhost:5173` (or another port if 5173 is in use)

4. **Build for production**
   ```bash
   npm run build
   ```
   Production-ready files will be generated in the `dist` directory.

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Project Structure

```
├── src/
│   ├── main.tsx          # Application entry point
│   ├── index.scss        # Global styles with Tailwind & SCSS
│   ├── hero.ts           # HeroUI plugin configuration
│   └── util.ts           # Utility functions
├── public/               # Static resources
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

### Customization

#### Styling
The main stylesheet is located at `src/index.scss`. You can use:
- Tailwind CSS utilities directly in your JSX
- Tailwind directives like `@apply` in your SCSS
- SASS features (variables, nesting, mixins, etc.)
- HeroUI theme customization

Example:
```scss
// src/index.scss
@import "tailwindcss";

$primary-color: #3b82f6;

.custom-button {
  @apply px-4 py-2 rounded;
  background-color: $primary-color;

  &:hover {
    @apply bg-blue-600;
  }
}
```

#### HeroUI Theme
Customize the HeroUI theme by modifying `src/hero.ts` and the plugin configuration in `src/index.scss`.

#### Vite Configuration
Modify `vite.config.ts` to add plugins, configure aliases, or adjust build settings.

### Adding Components

```tsx
import { Button } from "@heroui/system";

function MyComponent() {
  return (
    <Button color="primary" variant="solid">
      Click me
    </Button>
  );
}
```

## Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (type-checks and bundles)
- `npm run preview` - Preview production build locally

## Browser Support

This boilerplate supports all modern browsers that are compatible with:
- ES2020+
- CSS Grid & Flexbox
- CSS Custom Properties

## License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Resources

- [HeroUI Documentation](https://heroui.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with ❤️ using HeroUI and Vite
