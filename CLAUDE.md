# Travel Planner App — CLAUDE.md

## Project Overview

This is a **React Native (Expo) travel itinerary planning mobile app** that allows users to:
1. Input travel info (flights, hotels, dates)
2. Search and add places via Google Maps/Places API
3. Auto-generate optimized day-by-day itineraries
4. View routes on an interactive map with route optimization
5. Browse and link out to restaurant/ticket/hotel booking services

The actual Expo project lives in the `TravelPlanner/` subdirectory.

---

## Directory Structure

```
blogspot/
├── CLAUDE.md                    # This file
├── README.md
└── TravelPlanner/               # Main Expo app root
    ├── App.js                   # Entry point
    ├── app.json                 # Expo config (name, permissions, plugins)
    ├── package.json
    ├── .env.example             # Required env vars template
    └── src/
        ├── navigation/
        │   └── AppNavigator.js  # Stack + Bottom tab navigator setup
        ├── screens/
        │   ├── HomeScreen.js        # Trip list, create/delete trips
        │   ├── TripFormScreen.js    # 3-step form: basic info → flight → hotel
        │   ├── MapScreen.js         # Google Maps with markers, route polyline, optimize button
        │   ├── ItineraryScreen.js   # Day-by-day schedule with timeline UI
        │   ├── BookingScreen.js     # Links to booking services (Klook, Booking.com, etc.)
        │   ├── PlaceSearchScreen.js # Google Places text search + category quick buttons
        │   └── PlaceDetailScreen.js # Place info, add/remove from trip
        ├── services/
        │   └── googleMaps.js    # Google Maps/Places/Directions API wrappers + optimizeRoute()
        ├── store/
        │   └── tripStore.js     # Zustand global state + AsyncStorage persistence
        └── utils/
            └── itineraryGenerator.js  # Auto-generates time-slotted itinerary from trip data
```

---

## Key Technologies

| Library | Purpose |
|---|---|
| `expo` ~55 | Cross-platform mobile runtime |
| `react-native-maps` | Google Maps rendering |
| `expo-location` | User location permissions |
| `@react-navigation/native` + `stack` + `bottom-tabs` | App navigation |
| `react-native-calendars` | Date range picker in TripFormScreen |
| `zustand` | Global state management |
| `@react-native-async-storage/async-storage` | Persistent local storage |
| `date-fns` + `date-fns/locale/ko` | Date formatting in Korean |

---

## Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp TravelPlanner/.env.example TravelPlanner/.env
   ```
2. Add your Google Maps API key (needs Maps SDK, Places API, Directions API enabled):
   ```
   EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
   ```
3. Install dependencies:
   ```bash
   cd TravelPlanner && npm install
   ```
4. Run the app:
   ```bash
   npm run android   # Android
   npm run ios       # iOS (macOS only)
   npm run web       # Web (limited map support)
   ```

---

## State Architecture

All trip state is managed in `src/store/tripStore.js` via Zustand:

```
trips[]          — array of all saved trips
currentTrip      — currently selected trip (set when navigating to TripTabs)
```

Each trip object shape:
```js
{
  id: string,
  destination: string,
  startDate: 'YYYY-MM-DD',
  endDate: 'YYYY-MM-DD',
  flight: { airline, flightNumber, arrivalAirport, arrivalTime, departureAirport, departureTime },
  hotel: { name, address, checkIn, checkOut },
  places: Place[],     // Google Places objects with geometry.location
  itinerary: DaySchedule[],
  createdAt: ISO string,
}
```

---

## Navigation Flow

```
HomeScreen
  └── TripFormScreen (new trip, 3 steps)
  └── TripTabs (bottom tabs)
        ├── ItineraryScreen  (tab 1: 📅)
        ├── MapScreen        (tab 2: 🗺️)
        │     └── PlaceSearch → PlaceDetail
        └── BookingScreen    (tab 3: 🎫)
```

---

## Route Optimization

`src/services/googleMaps.js → optimizeRoute(places)` uses a **Nearest Neighbor greedy algorithm**:
- Starts from the first place
- At each step, moves to the closest unvisited place (Haversine distance)
- O(n²) — suitable for typical trip sizes (< 30 places)

`src/utils/itineraryGenerator.js → generateItinerary(trip)` distributes optimized places evenly across trip days and assigns time slots starting at 9:00 AM, with automatic meal breaks and hotel check-in/out events.

---

## Key Conventions

- **Dark theme** throughout: background `#0f0f1a`, card `#1a1a2e`, accent `#4fc3f7`
- **All API calls** go through `src/services/googleMaps.js` — don't call Google APIs directly from screens
- **State mutations** always go through Zustand store actions, which auto-persist to AsyncStorage
- `currentTrip` must be set before navigating to `TripTabs` — done in `HomeScreen` and `TripFormScreen`
- Place objects passed between screens preserve the full Google Places API shape (`geometry.location`, `place_id`, `types`, etc.)

---

## Google API Requirements

Enable these APIs in Google Cloud Console:
- Maps SDK for Android / iOS
- Places API (New)
- Directions API

For production, restrict the API key to your app's bundle ID.

---

## Git Branch

Development branch: `claude/travel-itinerary-planner-T9KNn`
