// Google Maps & Places API service
// Replace with your actual API key
const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

export const searchPlaces = async (query, location = null) => {
  try {
    let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${GOOGLE_MAPS_API_KEY}`;
    if (location) {
      url += `&location=${location.lat},${location.lng}&radius=10000`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Place search error:', error);
    return [];
  }
};

export const getPlaceDetails = async (placeId) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_address,geometry,photos,opening_hours,price_level,website,formatted_phone_number,types&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.result || null;
  } catch (error) {
    console.error('Place details error:', error);
    return null;
  }
};

export const getPlacePhoto = (photoReference, maxWidth = 400) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${GOOGLE_MAPS_API_KEY}`;
};

export const getDirections = async (origin, destination, waypoints = []) => {
  try {
    let waypointStr = '';
    if (waypoints.length > 0) {
      const waypointLocations = waypoints
        .map((wp) => `${wp.lat},${wp.lng}`)
        .join('|');
      waypointStr = `&waypoints=optimize:true|${waypointLocations}`;
    }
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}${waypointStr}&mode=transit&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Directions error:', error);
    return null;
  }
};

export const getNearbyRestaurants = async (location, radius = 1000) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&type=restaurant&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Nearby restaurants error:', error);
    return [];
  }
};

export const getNearbyAttractions = async (location, radius = 2000) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&type=tourist_attraction&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Nearby attractions error:', error);
    return [];
  }
};

// Optimize route order using nearest neighbor algorithm
export const optimizeRoute = (places) => {
  if (places.length <= 1) return places;

  const visited = new Array(places.length).fill(false);
  const route = [places[0]];
  visited[0] = true;

  for (let i = 1; i < places.length; i++) {
    const current = route[route.length - 1];
    let nearestIdx = -1;
    let nearestDist = Infinity;

    for (let j = 0; j < places.length; j++) {
      if (!visited[j]) {
        const dist = haversineDistance(
          current.geometry.location,
          places[j].geometry.location
        );
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestIdx = j;
        }
      }
    }

    if (nearestIdx !== -1) {
      visited[nearestIdx] = true;
      route.push(places[nearestIdx]);
    }
  }

  return route;
};

const haversineDistance = (coord1, coord2) => {
  const R = 6371;
  const dLat = toRad(coord2.lat - coord1.lat);
  const dLon = toRad(coord2.lng - coord1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coord1.lat)) *
      Math.cos(toRad(coord2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const toRad = (deg) => (deg * Math.PI) / 180;
