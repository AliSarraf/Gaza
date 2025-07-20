# Yeshfi

A comprehensive Progressive Web Application (PWA) designed to provide accessible first aid and emergency training to individuals in crisis zones. Yeshfi empowers users with critical life-saving knowledge and skills through an intuitive, reliable, and offline-capable platform.

## 🌟 Features

### Core Functionality
- **Comprehensive Training Modules**: 8 specialized modules covering critical first aid scenarios
- **High-Quality Video Content**: Instructional videos with Arabic transcripts
- **Offline Video Download**: Download videos for offline viewing
- **Interactive Quizzes**: Test comprehension with scored assessments
- **Progress Tracking**: Monitor learning progress and achievements
- **PWA Capabilities**: Installable app with offline functionality

### Training Modules
1. **Traumatic Injuries** - Blast injuries, bleeding control, fractures
2. **Burns Management** - Chemical burns, white phosphorus exposure
3. **Head and Spinal Trauma** - TBI recognition, spinal injury management
4. **Chest and Abdominal Injuries** - Internal organ damage, respiratory failure
5. **Vulnerable Populations** - Pediatric and elderly care
6. **Building Collapse Injuries** - Crush syndrome, extrication
7. **Chemical Injuries** - Hazardous substance exposure
8. **Psychological First Aid** - Trauma support, PTSD management

### PWA Features
- ✅ **Installable**: Add to home screen for native app experience
- ✅ **Offline Access**: Core content available without internet
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Service Worker**: Intelligent caching and offline support
- ✅ **IndexedDB**: Local storage for progress and downloaded content

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yeshfi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Serve the production build**
   ```bash
   npx serve -s build
   ```

## 📱 PWA Installation

### Desktop (Chrome/Edge)
1. Open the application in Chrome or Edge
2. Click the install icon in the address bar
3. Follow the prompts to install

### Mobile (Android)
1. Open the application in Chrome
2. Tap the menu (⋮) and select "Add to Home screen"
3. Follow the prompts to install

### iOS (Safari)
1. Open the application in Safari
2. Tap the share button and select "Add to Home Screen"
3. Follow the prompts to install

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation and PWA install prompt
│   ├── Footer.js       # App information and links
│   └── OfflineIndicator.js # Connection status indicator
├── contexts/           # React context providers
│   ├── ProgressContext.js # User progress and quiz scores
│   └── OfflineContext.js  # Online/offline status
├── data/              # Application data
│   └── modules.js     # Training modules and content
├── pages/             # Main application pages
│   ├── Home.js        # Landing page with overview
│   ├── Modules.js     # Module listing and search
│   ├── ModuleDetail.js # Individual module view
│   ├── VideoPlayer.js # Video playback with offline support
│   ├── Quiz.js        # Interactive quiz system
│   └── Progress.js    # Progress tracking and achievements
├── App.js             # Main application component
├── index.js           # Application entry point
└── index.css          # Global styles with Tailwind CSS
```

## 🛠️ Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS for responsive design
- **Routing**: React Router v6 for navigation
- **PWA**: Service Workers, Web App Manifest, IndexedDB
- **Icons**: Lucide React for consistent iconography
- **State Management**: React Context API with useReducer
- **Offline Storage**: IndexedDB for persistent data

## 📊 Key Features Explained

### Offline Functionality
- **Service Worker**: Caches app shell and static assets
- **IndexedDB**: Stores user progress, quiz scores, and downloaded videos
- **Offline Detection**: Real-time connection status monitoring
- **Graceful Degradation**: App works offline with downloaded content

### Video Management
- **Custom Video Player**: Full-featured HTML5 video player
- **Download System**: Users can download videos for offline viewing
- **Progress Tracking**: Video completion status
- **Transcript Support**: Text transcripts for accessibility

### Quiz System
- **Interactive Questions**: Multiple choice with immediate feedback
- **Scoring**: Percentage-based scoring with pass/fail thresholds
- **Progress Tracking**: Question-by-question progress
- **Review Mode**: Detailed review of answers after completion

### Progress Tracking
- **Module Completion**: Track completed modules
- **Quiz Scores**: Store and display quiz performance
- **Achievements**: Gamification with achievement badges
- **Analytics**: Learning progress visualization

## 🎯 Target Users

- **General Public**: Basic first aid preparedness
- **Community Responders**: Enhanced emergency response skills
- **Students & Educators**: Structured learning materials
- **Crisis Zone Residents**: Critical skills for challenging environments
- **Displaced Persons**: Self-paced training in difficult conditions

## 🔧 Development

### Adding New Modules
1. Add module data to `src/data/modules.js`
2. Include videos, quiz questions, and metadata
3. Update the module count in progress calculations

### Customizing Styles
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Use Tailwind utility classes for component styling

### PWA Configuration
- Update `public/manifest.json` for app metadata (now branded as Yeshfi)
- Modify `public/service-worker.js` for caching strategies
- Test PWA features in production build

## 📱 Browser Support

- **Chrome**: Full PWA support
- **Firefox**: Full PWA support
- **Safari**: Limited PWA support (iOS 11.3+)
- **Edge**: Full PWA support

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy automatically on push

### Manual Deployment
1. Run `npm run build`
2. Upload `build/` directory to your web server
3. Ensure HTTPS is enabled for PWA features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Designed for communities in crisis zones
- Built with accessibility and offline-first principles
- Inspired by the need for accessible emergency training

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Made with ❤️ for communities in need**

