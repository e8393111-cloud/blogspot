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
    ├── App.js                   # Entry point (minimal: mounts AppNavigator)
    ├── app.json                 # Expo config (name, permissions, plugins)
    ├── package.json             # Dependencies + Jest config
    ├── babel.config.js          # Babel preset-env + preset-react (for Jest)
    ├── eslint.config.js         # ESLint v9 flat config (0 errors target)
    ├── .env.example             # Required env vars template
    ├── __tests__/               # Jest unit tests
    │   ├── googleMaps.test.js       # optimizeRoute algorithm tests (7 tests)
    │   ├── itineraryGenerator.test.js  # generateItinerary tests (12 tests)
    │   └── tripStore.test.js        # Zustand CRUD + persistence tests (11 tests)
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

| Library | Version | Purpose |
|---|---|---|
| `expo` | ~55 | Cross-platform mobile runtime |
| `react` / `react-native` | 19.2.0 / 0.83.2 | UI framework |
| `react-native-maps` | 1.27.2 | Google Maps rendering |
| `expo-location` | 55.1.3 | User location permissions |
| `@react-navigation/native` + `stack` + `bottom-tabs` | 7.x | App navigation |
| `react-native-calendars` | 1.1314.0 | Date range picker in TripFormScreen |
| `zustand` | 5.0.12 | Global state management |
| `@react-native-async-storage/async-storage` | 3.0.1 | Persistent local storage |
| `date-fns` | 4.1.0 | Date formatting (Korean locale via `date-fns/locale`) |
| `expo-linear-gradient` | 55.0.9 | Gradient backgrounds |

**Dev dependencies:** `jest`, `babel-jest`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `@babel/cli`, `eslint` (v9), `eslint-plugin-react`

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

## Development Workflows

### Running Tests
```bash
cd TravelPlanner && npm test
```
- 30 unit tests across 3 suites — all must pass before committing
- Test environment: Node (not jsdom), babel-jest transform
- AsyncStorage is mocked; store state is reset via `useTripStore.setState()` in `beforeEach`
- `transformIgnorePatterns: []` ensures all node_modules are transpiled

### Linting
```bash
cd TravelPlanner && npx eslint src/
```
- Target: 0 errors (warnings about JSX component imports are acceptable false positives from ESLint not understanding JSX usage)
- Genuinely unused imports or state variables must be removed or prefixed with `_`

### Babel Syntax Check
```bash
cd TravelPlanner && find src -name "*.js" | xargs -I{} node_modules/.bin/babel {} --out-file /dev/null
```

---

## State Architecture

All trip state is managed in `src/store/tripStore.js` via Zustand:

```
trips[]          — array of all saved trips
currentTrip      — currently selected trip (set when navigating to TripTabs)
```

### Store Actions

| Action | Signature | Behavior |
|---|---|---|
| `setCurrentTrip` | `(trip)` | Sync; sets currentTrip |
| `addTrip` | `async (tripData)` | Creates trip with auto-ID, empty places/itinerary; persists |
| `updateTrip` | `async (tripId, updates)` | Merges updates; keeps currentTrip in sync |
| `deleteTrip` | `async (tripId)` | Removes trip; nulls currentTrip if it was active |
| `addPlace` | `async (tripId, place)` | Appends place with auto-ID and timestamp; persists |
| `removePlace` | `async (tripId, placeId)` | Filters by local ID; persists |
| `updateItinerary` | `async (tripId, itinerary)` | Replaces full itinerary array; persists |
| `saveTrips` | `async ()` | Serializes trips to AsyncStorage key `"trips"` |
| `loadTrips` | `async ()` | Restores trips from AsyncStorage on startup |

### Trip Object Shape

```js
{
  id: string,          // `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  destination: string,
  startDate: 'YYYY-MM-DD',
  endDate: 'YYYY-MM-DD',
  flight: {
    airline, flightNumber,
    arrivalAirport, arrivalTime,
    departureAirport, departureTime,
  },
  hotel: { name, address, checkIn, checkOut },  // checkIn/Out in HH:MM
  places: Place[],       // Google Places objects + { id, addedAt }
  itinerary: DaySchedule[],
  createdAt: ISO string,
}
```

**ID format** — both trips and places use `${Date.now()}-${random7chars}` to ensure uniqueness even when multiple items are created in the same millisecond.

---

## Navigation Flow

```
HomeScreen  (loadTrips on mount)
  └── TripFormScreen  (3-step: basic info → flight → hotel)
  └── TripTabs  (Bottom tab navigator — currentTrip must be set first)
        ├── ItineraryScreen  (tab 1: 📅 "일정표")
        ├── MapScreen        (tab 2: 🗺️ "지도")
        │     └── PlaceSearchScreen → PlaceDetailScreen
        └── BookingScreen    (tab 3: 🎫 "예매")
```

**Critical:** `setCurrentTrip(trip)` must be called before navigating to `TripTabs`. Both `HomeScreen` (on select) and `TripFormScreen` (on create) do this.

### Navigation Params

- `HomeScreen → TripTabs`: sets currentTrip via store, no direct params
- `MapScreen → PlaceSearchScreen`: no params
- `PlaceSearchScreen → PlaceDetailScreen`: `{ place }` (full Google Places object)
- `ItineraryScreen → PlaceDetailScreen`: `{ place }` (constructed from schedule item)

---

## Route Optimization

`src/services/googleMaps.js → optimizeRoute(places)` uses a **Nearest Neighbor greedy algorithm**:
- Starts from `places[0]` (never changes the starting point)
- At each step, moves to the closest unvisited place (Haversine distance)
- O(n²) — suitable for typical trip sizes (< 30 places)
- Does NOT return to origin

`src/utils/itineraryGenerator.js → generateItinerary(trip)` distributes optimized places evenly across trip days and assigns time slots starting at 9:00 AM.

### Visit Duration by Place Type

| Type | Duration |
|---|---|
| `museum`, `art_gallery` | 120 min |
| `amusement_park`, `theme_park` | 240 min |
| `park`, `natural_feature` | 90 min |
| `restaurant`, `food` | 60 min |
| `shopping_mall`, `store` | 90 min |
| Default | 60 min |

### Itinerary Schedule Logic

- Day 1: Flight arrival event (if specified) → hotel check-in (1.5h) → currentTime shifts to 14:00
- Last day: Hotel check-out at 11:00 → flight departure event (if specified)
- 30-minute travel time added between each place visit
- **Lunch break**: Auto-inserted when currentTime crosses 12:00–13:00 (1h)
- **Dinner break**: Auto-inserted when currentTime crosses 18:00–19:00 (1.5h)

### DaySchedule Item Shape

```js
{
  type: 'flight' | 'hotel' | 'place' | 'meal',
  time: 'HH:MM',
  title: string,
  duration: number,      // minutes
  icon: string,          // emoji
  address?: string,
  rating?: number,
  placeId?: string,
  coordinates?: { lat, lng },
}
```

---

## Google Maps Service API

All API calls go through `src/services/googleMaps.js`. **Never call Google APIs directly from screens.**

| Function | Purpose |
|---|---|
| `searchPlaces(query, location?)` | Text search; optional 10km location bias |
| `getPlaceDetails(placeId)` | Full details: rating, hours, phone, website |
| `getPlacePhoto(photoReference, maxWidth?)` | Photo URL (default 400px) |
| `getDirections(origin, dest, waypoints?)` | Directions with optional waypoints (transit mode) |
| `getNearbyRestaurants(location, radius?)` | Nearby search, default 1000m |
| `getNearbyAttractions(location, radius?)` | Tourist attractions, default 2000m |
| `optimizeRoute(places)` | Client-side nearest-neighbor sort |

**API key**: `process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY`

---

## Screen Reference

### HomeScreen
- Loads trips on mount via `useEffect(() => loadTrips(), [])`
- Tap trip → `setCurrentTrip` → navigate to TripTabs
- FAB `+` → navigate to TripForm
- Delete with confirmation alert
- Empty state: emoji + message when `trips.length === 0`

### TripFormScreen
- Step 1: Destination text input + date range calendar (`react-native-calendars`)
- Step 2: Flight details (airline, flight number, airports, times)
- Step 3: Hotel details (name, address, check-in/out)
- On Create: validates destination + dates → `addTrip()` → navigate to TripTabs

### MapScreen
- Requests location on mount (`expo-location`)
- PROVIDER_GOOGLE, markers numbered in sequence, cyan dashed polyline
- Optimize button: calls `optimizeRoute` → `generateItinerary` → `updateItinerary` + `fitToCoordinates`
- Default center: Tokyo (35.6762, 139.6503) if no places/location

### ItineraryScreen
- Horizontal day selector; tapping a place event navigates to PlaceDetail
- Generate button calls `generateItinerary` and saves to store
- Timeline dots colored by type: flight=#7986cb, hotel=#4db6ac, place=#4fc3f7, meal=#ffb74d

### BookingScreen
- Category grid: restaurant | ticket | hotel | transport
- Restaurant category triggers `getNearbyRestaurants` from first trip place
- External links per category (Naver, Kakao, Google, Klook, KKday, etc.)
- Quick search button opens Google search for `destination + category keyword`

### PlaceSearchScreen
- Text search + quick category buttons (tourist attractions, restaurants, shopping, cafes)
- Tracks added place_ids in `Set<string>` to show checkmarks
- Result cards show name, address, rating, price level, type emoji

### PlaceDetailScreen
- Route param: `{ place }` (full Google Places API object)
- Toggle add/remove from `currentTrip`
- Tappable address (Google Maps), phone (dialer), website (browser)
- Opening hours grid, category tags, rating display

---

## Key Conventions

- **Dark theme** throughout: background `#0f0f1a`, card `#1a1a2e`, accent `#4fc3f7`
- **All API calls** go through `src/services/googleMaps.js` — don't call Google APIs directly from screens
- **State mutations** always go through Zustand store actions, which auto-persist to AsyncStorage
- **Date format**: internal storage always `YYYY-MM-DD`; display uses `date-fns` with Korean locale (`ko`)
- **Place objects** passed between screens preserve the full Google Places API shape (`geometry.location`, `place_id`, `types`, etc.)
- **IDs** use `${Date.now()}-${random}` pattern — never use `Date.now()` alone (collision risk in tests and rapid creation)
- **Unused variables** that are intentionally kept should be prefixed with `_` (e.g., `_loadingNearby`)
- `currentTrip` must be set before navigating to `TripTabs`

---

## Google API Requirements

Enable these APIs in Google Cloud Console:
- Maps SDK for Android / iOS
- Places API (New)
- Directions API

For production, restrict the API key to your app's bundle ID.

---

## Expo App Config

- App name: `"여행 플래너"`, slug: `"travel-planner"`
- Orientation: portrait only
- UI style: dark
- Splash background: `#0f0f1a`
- Location permission prompt (Korean): `"여행 동선 최적화를 위해 위치 정보가 필요합니다."`
- Android: adaptive icon with 3 layers (foreground, background, monochrome)

---

## Git Branch

Development branch: `claude/travel-itinerary-planner-T9KNn`
