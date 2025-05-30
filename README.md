# GoDaddy Frontend Application

A modern React-based frontend application for Pagely's partner program, built with Vite and TypeScript.

## 🚀 Tech Stack

### Core Technologies
- **React 18** - UI Library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **React Router v6** - Client-side routing
- **Apollo Client** - GraphQL client
- **i18next** - Internationalization
- **SCSS** - Advanced styling

### UI Components & Styling
- **@mui/material** - Material-UI components
- **@mui/icons-material** - Material icons
- **@emotion/react** & **@emotion/styled** - CSS-in-JS styling
- **react-toastify** - Toast notifications
- **react-datepicker** - Date selection component
- **react-select** - Enhanced select inputs
- **react-beautiful-dnd** - Drag and drop functionality

### State Management & Data Fetching
- **@apollo/client** - GraphQL client
- **axios** - HTTP client
- **react-query** - Data fetching and caching

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── common/        # Shared components (buttons, inputs, etc.)
│   ├── layout/        # Layout components (headers, footers, etc.)
│   └── specific/      # Feature-specific components
├── pages/             # Page components
│   ├── auth/         # Authentication pages
│   ├── dashboard/    # Dashboard pages
│   └── public/       # Public pages
├── layouts/           # Layout templates
├── contexts/          # React contexts
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── services/         # API services
├── config/           # Configuration files
├── styles/           # Global styles
└── types/            # TypeScript type definitions
```

## 🛠️ Setup & Development

1. **Install Dependencies**
   ```bash
   yarn
   ```

2. **Development Server**
   ```bash
   yarn dev
   ```

3. **Build for Production**
   ```bash
   yarn build
   ```

4. **Preview Production Build**
   ```bash
   yarn preview
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://167.99.49.225:8080/api
VITE_BASE_URL=/
```

### Build Configuration
The project uses Vite for building. Key configurations in `vite.config.ts`:
- Base URL configuration
- API proxy settings
- Build optimization settings
- Asset handling

## 📦 Build Output

The build process generates optimized files in the `dist` directory:
- JavaScript bundles (vendor, app)
- CSS files
- Static assets
- Source maps (disabled in production)

## 🎨 Component Architecture

### Layout Components
- `PublicLayout` - For public pages
- `AuthLayout` - For authentication pages
- `PrivateLayout` - For authenticated user pages

### Page Components
- Authentication pages (Login, Register, Forgot Password)
- Dashboard pages (Campaigns, Reporting, Settings)
- Public pages (Landing, Documentation)

### Common Components
- Form components
- Data display components
- Navigation components
- Modal components

## 🔐 Authentication

The application uses JWT-based authentication with:
- Protected routes
- Authentication context
- Token management
- Session handling

## 🌐 Internationalization

Using i18next for multi-language support:
- Language detection
- Translation management
- RTL support


## 📄 License

This project is proprietary and confidential.

## 👥 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 🔍 Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Component documentation
