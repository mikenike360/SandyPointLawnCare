# Sandy Point Lawn Care

A full-stack React and Node.js starter website for the Sandy Point Lawn Care project.

## Project structure

- `client/` - React app created with `react-scripts`
- `server/` - Express backend with a simple API

## Setup

1. Install dependencies:
   ```bash
   npm run install-all
   ```

2. Run the app in development:
   ```bash
   npm run dev
   ```

3. Build the frontend for production:
   ```bash
   npm run build
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Backend API

- `GET /api/hello` returns a JSON message.

## Notes

- The React app proxies API calls in development and the Express server serves static files from `client/build` in production.
