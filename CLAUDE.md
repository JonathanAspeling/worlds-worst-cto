# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML5 Boilerplate-based website bundled with Webpack 5. The project uses a minimal setup with separate development and production configurations.

## Build Commands

```bash
# Start development server with hot reload (opens browser automatically)
npm start

# Build for production (outputs to dist/)
npm run build
```

## Architecture

### Webpack Configuration
- **webpack.common.js**: Base configuration with entry point (js/app.js) and output to dist/
- **webpack.config.dev.js**: Development mode with source maps, hot reload, and dev server
- **webpack.config.prod.js**: Production mode with HtmlWebpackPlugin and CopyPlugin for static assets

### Directory Structure
- **js/**: Application JavaScript (app.js is currently empty, vendor/ available for third-party libraries)
- **css/**: Stylesheets (style.css contains HTML5 Boilerplate base styles)
- **img/**: Image assets
- **dist/**: Build output (generated, not tracked in git)

### Build Process
Production builds bundle js/app.js and copy static assets (CSS, images, HTML, icons, manifest) to dist/ directory. The HtmlWebpackPlugin processes index.html template.
