# Tirupati Balaji Temple Website

A modern, responsive website for Sri Venkateswara Temple (Tirupati Balaji) built with React, featuring multilingual support, darshan booking, and comprehensive temple information.

## Features

- 🏛️ **12 Comprehensive Pages** - Home, About, History, Wonders, Holy Places, How to Visit, Prasadam, Mundan, Precautions, Booking, Trip Planning, Contact
- 📱 **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- 🌍 **Multilingual Support** - English, Hindi, and Marathi translations
- ⚡ **Performance Optimized** - 40-50% faster animations for mobile
- 🎨 **Beautiful UI** - Tailwind CSS with Framer Motion animations
- 🔄 **Client-Side Routing** - Smooth SPA navigation with React Router

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Deployment Guide

### Vercel (Recommended - Fastest Setup)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click Deploy (automatic from `main`/`master` branch)

**Automatic build:** Vercel detects `package.json` and runs `npm run build`

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click Deploy

### GitHub Pages
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/tirupati-balaji"
```
Then push to GitHub and enable Pages in repository settings.

## Environment Variables
No environment variables required for deployment.

## Tech Stack

- **Frontend:** React 19, React Router 7
- **Styling:** Tailwind CSS 3 with custom animations
- **Animations:** Framer Motion
- **Internationalization:** i18next
- **Icons:** Lucide React

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
