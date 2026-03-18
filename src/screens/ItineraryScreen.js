import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView, ActivityIndicator,
} from 'react-native';
import useTripStore from '../store/tripStore';
import { generateItinerary } from '../utils/itineraryGenerator';

const TYPE_COLORS = {
  flight: '#7986cb',
  hotel: '#4db6ac',
  place: '#4fc3f7',
  meal: '#ffb74d',
};

const ItineraryScreen = ({ navigation }) => {
  const { currentTrip, updateItinerary } = useTripStore();
  const [selectedDay, setSelectedDay] = useState(0);
  const [loading, setLoading] = useState(false);

  const itinerary = currentTrip?.itinerary || [];
  const places = currentTrip?.places || [];

  const handleGenerate = async () => {
    if (!currentTrip || places.length === 0) return;
    setLoading(true);
    try {
      const generated = generateItinerary(currentTrip);
      await updateItinerary(currentTrip.id, generated);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const currentDaySchedule = itinerary[selectedDay]?.schedule || [];

  return (
    <SafeAreaView style={styles.container}>
      {/* Trip header */}
      <View style={styles.tripHeader}>
        <Text style={styles.tripName}>{currentTrip?.destination || '여행'}</Text>
        <Text style={styles.tripDates}>
          {currentTrip?.startDate} ~ {currentTrip?.endDate}
        </Text>
      </View>

      {/* Flight info banner */}
      {currentTrip?.flight?.airline && (
        <View style={styles.flightBanner}>
          <Text style={styles.flightText}>
            ✈️ {currentTrip.flight.airline} {currentTrip.flight.flightNumber}
          </Text>
          <Text style={styles.flightSub}>
            도착 {currentTrip.flight.arrivalTime} → 출발 {currentTrip.flight.departureTime}
          </Text>
        </View>
      )}

      {/* Hotel info banner */}
      {currentTrip?.hotel?.name && (
        <View style={styles.hotelBanner}>
          <Text style={styles.hotelText}>🏨 {currentTrip.hotel.name}</Text>
          <Text style={styles.hotelSub}>
            체크인 {currentTrip.hotel.checkIn} / 체크아웃 {currentTrip.hotel.checkOut}
          </Text>
        </View>
      )}

      {itinerary.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>📋</Text>
          <Text style={styles.emptyTitle}>아직 일정이 없어요</Text>
          <Text style={styles.emptyText}>
            {places.length === 0
              ? '먼저 지도에서 가고 싶은 장소를 추가해보세요!'
              : `${places.length}개의 장소가 준비됐어요. 일정을 생성해볼까요?`}
          </Text>
          {places.length > 0 && (
            <TouchableOpacity style={styles.generateBtn} onPress={handleGenerate}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.generateBtnText}>📅 일정 자동 생성</Text>
              )}
            </TouchableOpacity>
          )}
          {places.length === 0 && (
            <TouchableOpacity
              style={styles.generateBtn}
              onPress={() => navigation.navigate('Map')}
            >
              <Text style={styles.generateBtnText}>🗺️ 장소 추가하러 가기</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <>
          {/* Day selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.daySelector}
            contentContainerStyle={styles.daySelectorContent}
          >
            {itinerary.map((day, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.dayBtn, selectedDay === idx && styles.dayBtnActive]}
                onPress={() => setSelectedDay(idx)}
              >
                <Text style={[styles.dayBtnDay, selectedDay === idx && styles.dayBtnDayActive]}>
                  Day {day.day}
                </Text>
                <Text style={[styles.dayBtnDate, selectedDay === idx && styles.dayBtnDateActive]}>
                  {day.dateLabel || day.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Schedule */}
          <ScrollView style={styles.schedule} contentContainerStyle={{ paddingBottom: 30 }}>
            {currentDaySchedule.map((item, idx) => (
              <View key={idx} style={styles.scheduleItem}>
                {/* Timeline */}
                <View style={styles.timeline}>
                  <Text style={styles.timeText}>{item.time}</Text>
                  <View style={[styles.dot, { backgroundColor: TYPE_COLORS[item.type] || '#4fc3f7' }]} />
                  {idx < currentDaySchedule.length - 1 && <View style={styles.line} />}
                </View>

                {/* Content */}
                <TouchableOpacity
                  style={[styles.eventCard, { borderLeftColor: TYPE_COLORS[item.type] || '#4fc3f7' }]}
                  onPress={() =>
                    item.type === 'place' && item.placeId
                      ? navigation.navigate('PlaceDetail', {
                          place: { place_id: item.placeId, name: item.title, geometry: { location: item.coordinates }, formatted_address: item.address },
                        })
                      : null
                  }
                >
                  <View style={styles.eventHeader}>
                    <Text style={styles.eventIcon}>{item.icon}</Text>
                    <Text style={styles.eventTitle} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.eventDuration}>{item.duration}분</Text>
                  </View>
                  {item.address && (
                    <Text style={styles.eventAddress} numberOfLines={1}>{item.address}</Text>
                  )}
                  {item.rating && (
                    <Text style={styles.eventRating}>⭐ {item.rating}</Text>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* Regenerate button */}
          <TouchableOpacity style={styles.regenBtn} onPress={handleGenerate}>
            {loading ? (
              <ActivityIndicator color="#4fc3f7" size="small" />
            ) : (
              <Text style={styles.regenBtnText}>🔄 일정 재생성</Text>
            )}
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  tripHeader: { padding: 16, paddingBottom: 8 },
  tripName: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  tripDates: { fontSize: 13, color: '#4fc3f7', marginTop: 2 },
  flightBanner: {
    backgroundColor: '#1a237e22', marginHorizontal: 16, marginBottom: 8,
    borderRadius: 10, padding: 10, borderWidth: 1, borderColor: '#7986cb44',
  },
  flightText: { color: '#7986cb', fontSize: 13, fontWeight: '600' },
  flightSub: { color: '#8899aa', fontSize: 11, marginTop: 2 },
  hotelBanner: {
    backgroundColor: '#00695c22', marginHorizontal: 16, marginBottom: 8,
    borderRadius: 10, padding: 10, borderWidth: 1, borderColor: '#4db6ac44',
  },
  hotelText: { color: '#4db6ac', fontSize: 13, fontWeight: '600' },
  hotelSub: { color: '#8899aa', fontSize: 11, marginTop: 2 },
  daySelector: { maxHeight: 80, flexGrow: 0 },
  daySelectorContent: { paddingHorizontal: 16, gap: 8, paddingVertical: 8 },
  dayBtn: {
    backgroundColor: '#1a1a2e', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 8,
    alignItems: 'center', borderWidth: 1, borderColor: '#334', minWidth: 70,
  },
  dayBtnActive: { backgroundColor: '#4fc3f7', borderColor: '#4fc3f7' },
  dayBtnDay: { color: '#8899aa', fontSize: 11 },
  dayBtnDayActive: { color: '#fff' },
  dayBtnDate: { color: '#fff', fontSize: 12, fontWeight: '600', marginTop: 2 },
  dayBtnDateActive: { color: '#fff' },
  schedule: { flex: 1, paddingHorizontal: 16 },
  scheduleItem: { flexDirection: 'row', marginBottom: 0 },
  timeline: { width: 60, alignItems: 'center', paddingTop: 8 },
  timeText: { fontSize: 11, color: '#8899aa', marginBottom: 4 },
  dot: { width: 12, height: 12, borderRadius: 6, zIndex: 1 },
  line: { width: 2, flex: 1, backgroundColor: '#334', marginTop: 2 },
  eventCard: {
    flex: 1, backgroundColor: '#1a1a2e', borderRadius: 12, padding: 12,
    marginLeft: 10, marginBottom: 10, borderLeftWidth: 3, borderWidth: 1, borderColor: '#334',
  },
  eventHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  eventIcon: { fontSize: 18 },
  eventTitle: { flex: 1, fontSize: 14, fontWeight: '600', color: '#fff' },
  eventDuration: { fontSize: 11, color: '#8899aa' },
  eventAddress: { fontSize: 11, color: '#8899aa', marginTop: 4 },
  eventRating: { fontSize: 11, color: '#ffb74d', marginTop: 2 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
  emptyEmoji: { fontSize: 64, marginBottom: 16 },
  emptyTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  emptyText: { fontSize: 14, color: '#8899aa', textAlign: 'center', marginBottom: 24 },
  generateBtn: {
    backgroundColor: '#4fc3f7', borderRadius: 16, paddingHorizontal: 24, paddingVertical: 14,
  },
  generateBtnText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  regenBtn: {
    padding: 16, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#334',
  },
  regenBtnText: { color: '#4fc3f7', fontSize: 14, fontWeight: '600' },
});

export default ItineraryScreen;
