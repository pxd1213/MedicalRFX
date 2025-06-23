#!/bin/sh

# Install dependencies
npm ci

# Ensure all dependencies are properly linked
npm install

# Build the project using npx
npx vite build
