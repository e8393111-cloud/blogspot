import { format, addDays, differenceInDays, parseISO } from 'date-fns';
import { optimizeRoute } from '../services/googleMaps';

// Generate a day-by-day itinerary from a list of places
export const generateItinerary = (trip) => {
  const { startDate, endDate, places = [], hotel } = trip;

  if (!startDate || !endDate || places.length === 0) return [];

  const start = parseISO(startDate);
  const end = parseISO(endDate);
  const numDays = differenceInDays(end, start) + 1;

  // Sort places by optimized route
  const optimized = optimizeRoute(places);

  // Distribute places across days
  const placesPerDay = Math.ceil(optimized.length / numDays);
  const itinerary = [];

  for (let day = 0; day < numDays; day++) {
    const date = addDays(start, day);
    const dayPlaces = optimized.slice(day * placesPerDay, (day + 1) * placesPerDay);

    const schedule = [];
    let currentTime = 9; // Start at 9 AM

    // First day: add flight arrival if exists
    if (day === 0 && trip.flightArrival) {
      schedule.push({
        type: 'flight',
        time: trip.flightArrivalTime || '12:00',
        title: `✈️ 도착: ${trip.flightArrival}`,
        duration: 60,
        icon: '✈️',
      });
      currentTime = 14;
    }

    // Add hotel check-in on first day
    if (day === 0 && hotel) {
      schedule.push({
        type: 'hotel',
        time: formatTime(currentTime),
        title: `🏨 체크인: ${hotel.name || '호텔'}`,
        duration: 60,
        icon: '🏨',
        address: hotel.address,
      });
      currentTime += 1.5;
    }

    // Add places for this day
    dayPlaces.forEach((place, idx) => {
      // Add travel time between places (assume 30 min)
      if (idx > 0) currentTime += 0.5;

      // Add lunch break
      if (currentTime >= 12 && currentTime < 13 && idx > 0) {
        schedule.push({
          type: 'meal',
          time: '12:00',
          title: '🍽️ 점심 식사',
          duration: 60,
          icon: '🍽️',
        });
        currentTime = 13;
      }

      const visitDuration = getVisitDuration(place);
      schedule.push({
        type: 'place',
        time: formatTime(currentTime),
        title: place.name,
        duration: visitDuration,
        icon: getPlaceIcon(place),
        address: place.formatted_address || place.vicinity,
        rating: place.rating,
        placeId: place.place_id || place.id,
        coordinates: place.geometry?.location,
      });
      currentTime += visitDuration / 60;

      // Add dinner
      if (currentTime >= 18 && currentTime < 19) {
        schedule.push({
          type: 'meal',
          time: formatTime(currentTime),
          title: '🍜 저녁 식사',
          duration: 90,
          icon: '🍜',
        });
        currentTime += 1.5;
      }
    });

    // Last day: add flight departure if exists
    if (day === numDays - 1 && trip.flightDeparture) {
      schedule.push({
        type: 'flight',
        time: trip.flightDepartureTime || '18:00',
        title: `✈️ 출발: ${trip.flightDeparture}`,
        duration: 60,
        icon: '✈️',
      });
    }

    // Hotel check-out on last day
    if (day === numDays - 1 && hotel) {
      schedule.unshift({
        type: 'hotel',
        time: '11:00',
        title: `🏨 체크아웃: ${hotel.name || '호텔'}`,
        duration: 30,
        icon: '🏨',
      });
    }

    itinerary.push({
      day: day + 1,
      date: format(date, 'yyyy-MM-dd'),
      dateLabel: format(date, 'M월 d일 (EEEE)', { locale: require('date-fns/locale/ko') }),
      schedule,
    });
  }

  return itinerary;
};

const formatTime = (hours) => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

const getVisitDuration = (place) => {
  const types = place.types || [];
  if (types.includes('museum') || types.includes('art_gallery')) return 120;
  if (types.includes('amusement_park') || types.includes('theme_park')) return 240;
  if (types.includes('park') || types.includes('natural_feature')) return 90;
  if (types.includes('restaurant') || types.includes('food')) return 60;
  if (types.includes('shopping_mall') || types.includes('store')) return 90;
  return 60;
};

const getPlaceIcon = (place) => {
  const types = place.types || [];
  if (types.includes('museum')) return '🏛️';
  if (types.includes('art_gallery')) return '🖼️';
  if (types.includes('park')) return '🌳';
  if (types.includes('restaurant') || types.includes('food')) return '🍽️';
  if (types.includes('shopping_mall') || types.includes('store')) return '🛍️';
  if (types.includes('amusement_park')) return '🎡';
  if (types.includes('beach')) return '🏖️';
  if (types.includes('church') || types.includes('place_of_worship')) return '⛪';
  return '📍';
};
