# Portfolio Website - Organized Structure

This portfolio website has been organized with a clean, professional folder structure for better maintainability and scalability.

## 📁 Folder Structure

```
src/
├── components/           # All React components
│   ├── layout/          # Layout components (Navigation, Footer)
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   ├── ui/              # Reusable UI components
│   └── index.js         # Component exports
├── hooks/               # Custom React hooks
│   └── useScrollEffect.js
├── utils/               # Utility functions and constants
│   ├── constants.js     # Portfolio data and configuration
│   └── helpers.js       # Helper functions
├── styles/              # CSS files
│   ├── index.css        # Global styles
│   └── App.css          # App-specific styles
├── assets/              # Static assets
│   ├── images/          # Image files
│   └── icons/           # Icon files
├── App.jsx              # Main App component
└── main.jsx             # Application entry point
```

## 🎯 Benefits of This Structure

### 1. **Clear Separation of Concerns**

- **Layout components**: Navigation, Footer
- **Section components**: Hero, About, Skills, Projects, Experience, Contact
- **UI components**: Reusable components for future use

### 2. **Easy Maintenance**

- Components are grouped by functionality
- CSS files are co-located with their components
- Utilities are centralized for reuse

### 3. **Scalability**

- Easy to add new sections or components
- Clear import paths with index.js exports
- Organized assets for better management

### 4. **Developer Experience**

- Intuitive folder names
- Consistent file organization
- Easy to find and modify components

## 🚀 Usage

### Importing Components

```javascript
// Import individual components
import { Hero, About, Skills } from "./components";

// Import utilities
import { PORTFOLIO_INFO, SOCIAL_LINKS } from "./utils/constants";
import { scrollToElement, debounce } from "./utils/helpers";

// Import custom hooks
import {
  useScrollEffect,
  useIntersectionObserver,
} from "./hooks/useScrollEffect";
```

### Adding New Components

1. **Layout components**: Add to `src/components/layout/`
2. **Section components**: Add to `src/components/sections/`
3. **UI components**: Add to `src/components/ui/`
4. **Update exports**: Add to `src/components/index.js`

### Adding New Utilities

1. **Constants**: Add to `src/utils/constants.js`
2. **Helper functions**: Add to `src/utils/helpers.js`
3. **Custom hooks**: Add to `src/hooks/`

## 📝 Best Practices

1. **Component Organization**: Keep related files together
2. **Import Paths**: Use the index.js files for cleaner imports
3. **Naming Conventions**: Use PascalCase for components, camelCase for utilities
4. **File Structure**: One component per file with its CSS co-located

This organized structure makes the codebase more professional, maintainable, and ready for future expansion! 🎉

