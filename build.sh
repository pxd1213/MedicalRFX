#!/bin/sh

# Install dependencies
npm ci

# Ensure Vite is properly installed
npm install vite@latest

# Link dependencies
npm link vite

# Build the project using the local Vite
node_modules/.bin/vite build
