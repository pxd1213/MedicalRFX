# Medical RFX

A modern React application for medical resource and facility management.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Netlify. To deploy:

1. Ensure you have a Netlify account
2. Install the Netlify CLI globally:
```bash
npm install -g netlify-cli
```

3. Login to Netlify:
```bash
netlify login
```

4. Deploy the project:
```bash
netlify deploy --prod
```

The project will be deployed to the URL specified in the Netlify dashboard.

## Features

- Project management
- Consultant network
- Registered body management
- Company directory
- Bidding system
- Dashboard analytics

## Project Structure

```
project/
├── src/                 # Source code
│   ├── components/      # React components
│   ├── data/           # Data and mock data
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
├── dist/               # Build output
├── node_modules/       # Dependencies
├── package.json        # Project dependencies
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── netlify.toml        # Netlify deployment configuration
```
