# VALRadiant - Valorant Companion App Landing Page

A modern React landing page built with Vite for VALRadiant, a desktop companion application for Valorant players. Features smooth animations, interactive components, and responsive design.

## About VALRadiant

VALRadiant is a production-ready desktop application for Valorant players to view real-time match information, player stats, and match history. This landing page showcases the app's features with modern animations and an interactive design.

### VALRadiant App Features
- **Match Detection**: Automatically detects pregame and live matches
- **Player Stats**: View ranks, recent performance, and agent preferences
- **Match History**: Click on any player to view their recent match history
- **No Login Required**: Uses Riot's local API, no credentials needed
- **Safe to Use**: Complies with Riot's terms of service
- **Real-time Information**: See player details during agent select phase

[Download VALRadiant v1.4.1](https://github.com/epicharry/valradiant/releases/download/v1.4.1/VALRadiant-Setup-1.4.1.exe)

## Landing Page Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React features with hooks and TypeScript
- 🎨 **GSAP** - Professional animations and scroll triggers
- 🎯 **Lenis** - Smooth scrolling experience
- 📱 **Responsive Design** - Mobile-first approach
- 🎮 **Interactive Components** - Hover effects and animations
- 💎 **Modern UI** - Gradient effects, glassmorphism, and animated backgrounds
- 📊 **Dynamic Stats** - Animated counters showing user statistics
- ❓ **FAQ Section** - Collapsible FAQ with smooth animations
- 🏆 **Rank Display** - Shows player distribution across all Valorant ranks

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
│   ├── Preloader.jsx    # Loading screen animation
│   ├── Header.jsx       # Navigation header with scroll effects
│   ├── HeroSection.tsx  # Hero section with animated intro
│   ├── FeatureScene.tsx # Feature showcase sections
│   ├── AgentScene.tsx   # Rank distribution display
│   ├── News.jsx         # Updates and news section
│   ├── FAQSection.tsx   # Frequently asked questions
│   ├── FinalSection.tsx # Final CTA with download button
│   └── Footer.jsx       # Footer with social links
├── hooks/               # Custom React hooks
│   ├── useLenis.js      # Smooth scrolling setup
│   └── useIsMobile.js   # Mobile detection hook
├── assets/              # Static assets
│   └── images/          # Images and icons
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## Key Sections

### 1. Hero Section
- Animated Valorant logo with GSAP
- Gradient text effects
- Parallax background animations
- Scroll-to-explore interaction

### 2. Feature Scenes
- Three alternating feature showcases
- Live Match Stats tracking
- Match History timeline
- Player Search capabilities
- Scroll-triggered animations

### 3. Rank Distribution
- Interactive rank display
- Hover effects on rank cards
- Statistics for all Valorant ranks (Iron to Radiant)
- Special highlighting for top-tier ranks

### 4. News & Updates
- Latest VALRadiant releases
- Feature announcements
- Security and privacy updates
- Mobile-responsive carousel

### 5. FAQ Section
- Collapsible questions and answers
- Categorized by topic
- Smooth expand/collapse animations
- Covers app usage, legality, and technical details

### 6. Final CTA Section
- Animated download button
- Live statistics counters
- User count, matches analyzed, player searches
- Mouse-tracking gradient effects

## Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `gsap`: ^3.12.2
- `lenis`: ^1.0.27
- `swiper`: ^11.0.5
- `lucide-react`: Latest (for icons)
- `react-icons`: ^5.5.0
- `tailwindcss`: ^4.1.10

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