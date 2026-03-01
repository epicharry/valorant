# VALRadiant - Valorant Companion App Landing Page

A modern React landing page built with Vite for VALRadiant, a desktop companion application for Valorant players. Features smooth animations, interactive components, and responsive design.

## About VALRadiant

VALRadiant is a production-ready desktop application for Valorant players to view real-time match information, player stats, and match history.

### Key Features
- **Match Detection**: Automatically detects pregame and live matches
- **Player Stats**: View ranks, recent performance, and agent preferences
- **Match History**: Click on any player to view their recent match history
- **No Login Required**: Uses Riot's local API, no credentials needed
- **Safe to Use**: Complies with Riot's terms of service

## Landing Page Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React features with hooks
- 🎨 **GSAP** - Professional animations and scroll triggers
- 📱 **Swiper** - Touch-enabled carousel
- 🎯 **Lenis** - Smooth scrolling experience
- 📱 **Responsive Design** - Mobile-first approach
- 🎬 **Video Background** - Hero section with video background
- 🎮 **Interactive Components** - Hover effects and animations

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Animations**: GSAP (GreenSock Animation Platform)
- **Carousel**: Swiper.js
- **Smooth Scrolling**: Lenis
- **Fonts**: Google Fonts (Anton, Roboto)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd valorant-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Preloader.jsx    # Loading screen
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with video
│   ├── AgentsSection.jsx # Agents carousel
│   ├── ValorantSection.jsx # About section
│   └── Footer.jsx       # Footer
├── hooks/               # Custom React hooks
│   └── useLenis.js      # Smooth scrolling setup
├── assets/              # Static assets
│   ├── images/          # Agent images and icons
│   └── video/           # Video files
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## Key Features

### 1. Preloader Animation
- 5-second countdown with GSAP animations
- Smooth fade-out transition

### 2. Hero Section
- Full-screen video background
- Volume control toggle
- Animated text and CTA button

### 3. Agents Section
- Swiper carousel with 16 Valorant agents
- Hover effects and animations
- Responsive breakpoints

### 4. Smooth Scrolling
- Lenis integration for buttery smooth scrolling
- GSAP ScrollTrigger for scroll-based animations

### 5. Mobile Navigation
- Hamburger menu with slide-out sidebar
- GSAP animations for smooth transitions

## Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `gsap`: ^3.12.2
- `swiper`: ^11.0.5
- `@studio-freight/lenis`: ^1.0.27

### Development Dependencies
- `@vitejs/plugin-react`: ^4.2.1
- `vite`: ^5.0.8
- `eslint`: ^8.55.0

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Valorant is a trademark of Riot Games, Inc.

## Acknowledgments

- Riot Games for the Valorant brand and assets
- GSAP team for the amazing animation library
- Swiper.js team for the carousel component
- Studio Freight for the Lenis smooth scrolling library 