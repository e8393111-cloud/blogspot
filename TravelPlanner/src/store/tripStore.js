import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTripStore = create((set, get) => ({
  trips: [],
  currentTrip: null,

  // Create or update a trip
  setCurrentTrip: (trip) => set({ currentTrip: trip }),

  addTrip: async (trip) => {
    const newTrip = {
      ...trip,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      createdAt: new Date().toISOString(),
      itinerary: [],
      places: [],
    };
    set((state) => ({ trips: [...state.trips, newTrip] }));
    await get().saveTrips();
    return newTrip;
  },

  updateTrip: async (tripId, updates) => {
    set((state) => ({
      trips: state.trips.map((t) => (t.id === tripId ? { ...t, ...updates } : t)),
      currentTrip:
        state.currentTrip?.id === tripId
          ? { ...state.currentTrip, ...updates }
          : state.currentTrip,
    }));
    await get().saveTrips();
  },

  deleteTrip: async (tripId) => {
    set((state) => ({
      trips: state.trips.filter((t) => t.id !== tripId),
      currentTrip: state.currentTrip?.id === tripId ? null : state.currentTrip,
    }));
    await get().saveTrips();
  },

  addPlace: async (tripId, place) => {
    const newPlace = {
      ...place,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      addedAt: new Date().toISOString(),
    };
    set((state) => ({
      trips: state.trips.map((t) =>
        t.id === tripId ? { ...t, places: [...(t.places || []), newPlace] } : t
      ),
      currentTrip:
        state.currentTrip?.id === tripId
          ? { ...state.currentTrip, places: [...(state.currentTrip.places || []), newPlace] }
          : state.currentTrip,
    }));
    await get().saveTrips();
    return newPlace;
  },

  removePlace: async (tripId, placeId) => {
    set((state) => ({
      trips: state.trips.map((t) =>
        t.id === tripId ? { ...t, places: t.places.filter((p) => p.id !== placeId) } : t
      ),
      currentTrip:
        state.currentTrip?.id === tripId
          ? {
              ...state.currentTrip,
              places: state.currentTrip.places.filter((p) => p.id !== placeId),
            }
          : state.currentTrip,
    }));
    await get().saveTrips();
  },

  updateItinerary: async (tripId, itinerary) => {
    set((state) => ({
      trips: state.trips.map((t) => (t.id === tripId ? { ...t, itinerary } : t)),
      currentTrip:
        state.currentTrip?.id === tripId ? { ...state.currentTrip, itinerary } : state.currentTrip,
    }));
    await get().saveTrips();
  },

  saveTrips: async () => {
    try {
      await AsyncStorage.setItem('trips', JSON.stringify(get().trips));
    } catch (e) {
      console.error('Failed to save trips', e);
    }
  },

  loadTrips: async () => {
    try {
      const data = await AsyncStorage.getItem('trips');
      if (data) set({ trips: JSON.parse(data) });
    } catch (e) {
      console.error('Failed to load trips', e);
    }
  },
}));

export default useTripStore;
