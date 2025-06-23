#!/bin/sh

# Install dependencies with --legacy-peer-deps to avoid version conflicts
npm install --legacy-peer-deps

# Build using the local Vite binary
node node_modules/vite/dist/node/cli.js build
