import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
  ActivityIndicator, ScrollView,
} from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import useTripStore from '../store/tripStore';
import { optimizeRoute } from '../services/googleMaps';
import { generateItinerary } from '../utils/itineraryGenerator';

const COLORS = ['#4fc3f7', '#81c784', '#ffb74d', '#f06292', '#ba68c8', '#4dd0e1'];

const MapScreen = ({ navigation }) => {
  const { currentTrip, updateItinerary, updateTrip } = useTripStore();
  const [userLocation, setUserLocation] = useState(null);
  const [optimizedPlaces, setOptimizedPlaces] = useState([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);

  const places = currentTrip?.places || [];

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setUserLocation({
          lat: loc.coords.latitude,
          lng: loc.coords.longitude,
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (places.length > 0) {
      setOptimizedPlaces(places);
    }
  }, [places]);

  const handleOptimizeRoute = async () => {
    if (places.length < 2) {
      Alert.alert('알림', '최소 2개 이상의 장소를 추가해주세요');
      return;
    }
    setIsOptimizing(true);
    try {
      const optimized = optimizeRoute(places);
      setOptimizedPlaces(optimized);

      // Generate full itinerary and save
      const itinerary = generateItinerary({ ...currentTrip, places: optimized });
      await updateItinerary(currentTrip.id, itinerary);
      await updateTrip(currentTrip.id, { places: optimized });

      // Fit map to show all markers
      if (mapRef.current && optimized.length > 0) {
        const coords = optimized
          .filter((p) => p.geometry?.location)
          .map((p) => ({
            latitude: p.geometry.location.lat,
            longitude: p.geometry.location.lng,
          }));
        mapRef.current.fitToCoordinates(coords, {
          edgePadding: { top: 80, right: 40, bottom: 200, left: 40 },
          animated: true,
        });
      }

      Alert.alert('완료', '최적 동선이 계산되었습니다! 📍');
    } catch (e) {
      Alert.alert('오류', '동선 최적화 중 오류가 발생했습니다');
    } finally {
      setIsOptimizing(false);
    }
  };

  const getInitialRegion = () => {
    if (places.length > 0 && places[0].geometry?.location) {
      return {
        latitude: places[0].geometry.location.lat,
        longitude: places[0].geometry.location.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }
    if (userLocation) {
      return {
        latitude: userLocation.lat,
        longitude: userLocation.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }
    return { latitude: 35.6762, longitude: 139.6503, latitudeDelta: 0.1, longitudeDelta: 0.1 };
  };

  const polylineCoords = optimizedPlaces
    .filter((p) => p.geometry?.location)
    .map((p) => ({ latitude: p.geometry.location.lat, longitude: p.geometry.location.lng }));

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={getInitialRegion()}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Route polyline */}
        {polylineCoords.length > 1 && (
          <Polyline
            coordinates={polylineCoords}
            strokeColor="#4fc3f7"
            strokeWidth={3}
            lineDashPattern={[10, 5]}
          />
        )}

        {/* Place markers */}
        {optimizedPlaces.map((place, idx) => {
          if (!place.geometry?.location) return null;
          const color = COLORS[idx % COLORS.length];
          return (
            <Marker
              key={place.id || idx}
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}
              onPress={() => setSelectedPlace(place)}
            >
              <View style={[styles.markerBubble, { backgroundColor: color }]}>
                <Text style={styles.markerNum}>{idx + 1}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>

      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.tripTitle}>{currentTrip?.destination || '여행'}</Text>
        <Text style={styles.placeCount}>{places.length}개 장소</Text>
      </View>

      {/* Optimize button */}
      <TouchableOpacity
        style={styles.optimizeBtn}
        onPress={handleOptimizeRoute}
        disabled={isOptimizing}
      >
        {isOptimizing ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.optimizeBtnText}>🗺️ 동선 최적화</Text>
        )}
      </TouchableOpacity>

      {/* Add place button */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('PlaceSearch')}
      >
        <Text style={styles.addBtnText}>+ 장소 추가</Text>
      </TouchableOpacity>

      {/* Place list */}
      <View style={styles.placeList}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, padding: 10 }}>
          {optimizedPlaces.map((place, idx) => (
            <TouchableOpacity
              key={place.id || idx}
              style={[
                styles.placeChip,
                selectedPlace?.id === place.id && styles.placeChipSelected,
              ]}
              onPress={() => {
                setSelectedPlace(place);
                if (mapRef.current && place.geometry?.location) {
                  mapRef.current.animateToRegion({
                    latitude: place.geometry.location.lat,
                    longitude: place.geometry.location.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  });
                }
              }}
            >
              <View style={[styles.chipNum, { backgroundColor: COLORS[idx % COLORS.length] }]}>
                <Text style={styles.chipNumText}>{idx + 1}</Text>
              </View>
              <Text style={styles.chipName} numberOfLines={1}>{place.name}</Text>
            </TouchableOpacity>
          ))}
          {places.length === 0 && (
            <View style={styles.emptyChip}>
              <Text style={styles.emptyChipText}>장소를 추가해보세요 📍</Text>
            </View>
          )}
        </ScrollView>
      </View>

      {/* Selected place detail */}
      {selectedPlace && (
        <TouchableOpacity
          style={styles.detailCard}
          onPress={() => navigation.navigate('PlaceDetail', { place: selectedPlace })}
        >
          <Text style={styles.detailName}>{selectedPlace.name}</Text>
          <Text style={styles.detailAddress} numberOfLines={1}>
            {selectedPlace.formatted_address || selectedPlace.vicinity || ''}
          </Text>
          {selectedPlace.rating && (
            <Text style={styles.detailRating}>⭐ {selectedPlace.rating}</Text>
          )}
          <Text style={styles.detailMore}>상세보기 →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  topBar: {
    position: 'absolute', top: 0, left: 0, right: 0,
    backgroundColor: 'rgba(15,15,26,0.9)',
    padding: 16, paddingTop: 50, flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center',
  },
  tripTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  placeCount: { fontSize: 13, color: '#4fc3f7' },
  optimizeBtn: {
    position: 'absolute', top: 100, right: 16,
    backgroundColor: '#4fc3f7', borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 10,
    elevation: 4,
  },
  optimizeBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  addBtn: {
    position: 'absolute', top: 100, left: 16,
    backgroundColor: '#1a1a2e', borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 10,
    elevation: 4, borderWidth: 1, borderColor: '#4fc3f7',
  },
  addBtnText: { color: '#4fc3f7', fontWeight: 'bold', fontSize: 13 },
  markerBubble: {
    width: 32, height: 32, borderRadius: 16,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: '#fff',
    elevation: 4,
  },
  markerNum: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  placeList: {
    position: 'absolute', bottom: 120, left: 0, right: 0,
    backgroundColor: 'rgba(15,15,26,0.8)',
  },
  placeChip: {
    backgroundColor: '#1a1a2e', borderRadius: 20,
    flexDirection: 'row', alignItems: 'center',
    paddingRight: 12, gap: 8, borderWidth: 1, borderColor: '#334',
    maxWidth: 160,
  },
  placeChipSelected: { borderColor: '#4fc3f7' },
  chipNum: {
    width: 28, height: 28, borderRadius: 14,
    justifyContent: 'center', alignItems: 'center',
  },
  chipNumText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  chipName: { color: '#fff', fontSize: 12, flex: 1 },
  emptyChip: {
    backgroundColor: '#1a1a2e', borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 10,
    borderWidth: 1, borderColor: '#334',
  },
  emptyChipText: { color: '#8899aa', fontSize: 12 },
  detailCard: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#1a1a2e', padding: 20,
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
  },
  detailName: { fontSize: 17, fontWeight: 'bold', color: '#fff' },
  detailAddress: { fontSize: 13, color: '#8899aa', marginTop: 4 },
  detailRating: { fontSize: 13, color: '#ffb74d', marginTop: 4 },
  detailMore: { fontSize: 13, color: '#4fc3f7', marginTop: 8, fontWeight: '600' },
});

export default MapScreen;
