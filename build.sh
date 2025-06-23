#!/bin/sh

# Install dependencies with --legacy-peer-deps to avoid version conflicts
npm install --legacy-peer-deps

# Build using npx to ensure correct version
npx vite@4.5.0 build
