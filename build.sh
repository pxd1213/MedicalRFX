#!/bin/sh

# Install dependencies
npm ci

# Install exact version of Vite
npm install vite@4.5.0

# Build using npx to ensure correct version
npx vite@4.5.0 build
