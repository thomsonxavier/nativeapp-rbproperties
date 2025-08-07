# RB Properties - Real Estate Website

A modern real estate website built with React Native and Expo, featuring property listings, search functionality, and contact forms.

## Features

### 🏠 Home Page
- Hero section with search functionality
- Featured properties showcase
- Services overview (Buy, Sell, Rent)
- Modern, responsive design

### 🏢 Properties Page
- Comprehensive property listings
- Search and filter functionality
- Property cards with key information
- Quick filters by property type

### 📋 Property Details
- Detailed property information
- Multiple property images
- Property features and amenities
- Agent contact information
- Call and email actions

### 📞 Contact Page
- Contact form for inquiries
- Office information and hours
- Team member profiles
- Direct contact options

## Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **Expo Router** - File-based routing
- **TypeScript** - Type safety
- **React Native Web** - Web support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rbproperties
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# For web
npm run web

# For iOS
npm run ios

# For Android
npm run android
```

## Project Structure

```
rbproperties/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home page
│   │   ├── explore.tsx        # Properties listing
│   │   └── _layout.tsx        # Tab navigation
│   ├── property/
│   │   └── [id].tsx           # Property details page
│   ├── contact.tsx            # Contact page
│   └── _layout.tsx            # Root layout
├── components/                # Reusable components
├── constants/                 # App constants
├── hooks/                     # Custom hooks
└── assets/                    # Images and fonts
```

## Key Components

### Property Cards
- Display property images, price, location
- Show key details (beds, baths, sqft)
- Navigate to detailed property view

### Search & Filters
- Location-based search
- Property type filters
- Price range filtering
- Sort options

### Contact Forms
- User inquiry forms
- Agent contact information
- Office details and hours

## Images

The application uses high-quality real estate images from Unsplash:
- Property photos
- Agent profile pictures
- Hero section backgrounds
- Office and team images

## Routing

The app uses Expo Router for navigation:
- `/` - Home page
- `/explore` - Properties listing
- `/property/[id]` - Individual property details
- `/contact` - Contact page

## Styling

- Consistent design system
- Responsive layouts
- Dark/light mode support
- Modern UI components

## Future Enhancements

- User authentication
- Property favoriting
- Advanced search filters
- Property comparison
- Virtual tours
- Mortgage calculator
- Property alerts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
