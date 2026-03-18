import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView, Linking, TextInput, Alert, FlatList,
} from 'react-native';
import useTripStore from '../store/tripStore';
import { getNearbyRestaurants } from '../services/googleMaps';

const BOOKING_SERVICES = [
  {
    id: 'restaurant',
    icon: '🍽️',
    title: '음식점 예약',
    desc: '주변 맛집 예약',
    color: '#ff7043',
  },
  {
    id: 'ticket',
    icon: '🎫',
    title: '관광지 티켓',
    desc: '입장권/투어 예매',
    color: '#ab47bc',
  },
  {
    id: 'hotel',
    icon: '🏨',
    title: '호텔 추가 예약',
    desc: '숙소 검색 및 예약',
    color: '#29b6f6',
  },
  {
    id: 'transport',
    icon: '🚌',
    title: '교통 예약',
    desc: '버스/기차 예약',
    color: '#66bb6a',
  },
];

const EXTERNAL_LINKS = {
  restaurant: [
    { name: 'Naver 예약', url: 'https://booking.naver.com/', icon: '🟢' },
    { name: 'Kakao 예약', url: 'https://place.map.kakao.com/', icon: '🟡' },
    { name: 'Google 예약', url: 'https://www.google.com/maps/', icon: '🔵' },
  ],
  ticket: [
    { name: 'Klook', url: 'https://www.klook.com/ko/', icon: '🟠' },
    { name: 'KKday', url: 'https://www.kkday.com/ko/', icon: '🔴' },
    { name: 'Viator', url: 'https://www.viator.com/', icon: '🟢' },
    { name: 'GetYourGuide', url: 'https://www.getyourguide.com/', icon: '🟡' },
  ],
  hotel: [
    { name: 'Booking.com', url: 'https://www.booking.com/', icon: '🔵' },
    { name: 'Agoda', url: 'https://www.agoda.com/', icon: '🔴' },
    { name: 'Airbnb', url: 'https://www.airbnb.com/', icon: '🟠' },
    { name: 'Hotels.com', url: 'https://www.hotels.com/', icon: '🔴' },
  ],
  transport: [
    { name: 'Google Flights', url: 'https://flights.google.com/', icon: '🔵' },
    { name: 'Skyscanner', url: 'https://www.skyscanner.com/', icon: '🟢' },
    { name: 'Interrail (기차)', url: 'https://www.interrail.eu/', icon: '🟡' },
    { name: 'Klook (교통)', url: 'https://www.klook.com/ko/transport/', icon: '🟠' },
  ],
};

const BookingScreen = () => {
  const { currentTrip } = useTripStore();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [_loadingNearby, setLoadingNearby] = useState(false);

  const destination = currentTrip?.destination || '';

  const handleCategorySelect = async (cat) => {
    setSelectedCategory(cat.id);

    if (cat.id === 'restaurant' && currentTrip?.places?.[0]?.geometry?.location) {
      setLoadingNearby(true);
      try {
        const restaurants = await getNearbyRestaurants(currentTrip.places[0].geometry.location);
        setNearbyRestaurants(restaurants.slice(0, 8));
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingNearby(false);
      }
    }
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() => Alert.alert('오류', '링크를 열 수 없습니다'));
  };

  const openGoogleSearch = (query) => {
    openLink(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
  };

  const links = selectedCategory ? EXTERNAL_LINKS[selectedCategory] : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.header}>
          <Text style={styles.title}>예매 & 예약</Text>
          <Text style={styles.subtitle}>{destination ? `${destination} 여행` : '여행'} 관련 예약</Text>
        </View>

        {/* Category grid */}
        <View style={styles.grid}>
          {BOOKING_SERVICES.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.categoryCard,
                selectedCategory === service.id && { borderColor: service.color, borderWidth: 2 },
              ]}
              onPress={() => handleCategorySelect(service)}
            >
              <Text style={styles.categoryIcon}>{service.icon}</Text>
              <Text style={styles.categoryTitle}>{service.title}</Text>
              <Text style={styles.categoryDesc}>{service.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Selected category links */}
        {selectedCategory && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {BOOKING_SERVICES.find((s) => s.id === selectedCategory)?.title} 서비스
            </Text>
            {links.map((link) => (
              <TouchableOpacity
                key={link.name}
                style={styles.linkCard}
                onPress={() => openLink(link.url)}
              >
                <Text style={styles.linkIcon}>{link.icon}</Text>
                <View style={styles.linkInfo}>
                  <Text style={styles.linkName}>{link.name}</Text>
                  <Text style={styles.linkUrl} numberOfLines={1}>{link.url}</Text>
                </View>
                <Text style={styles.linkArrow}>→</Text>
              </TouchableOpacity>
            ))}

            {/* Quick search for destination */}
            {destination && (
              <TouchableOpacity
                style={styles.quickSearchBtn}
                onPress={() =>
                  openGoogleSearch(
                    `${destination} ${
                      selectedCategory === 'restaurant'
                        ? '맛집 예약'
                        : selectedCategory === 'ticket'
                        ? '관광지 티켓 예매'
                        : selectedCategory === 'hotel'
                        ? '호텔 예약'
                        : '교통 예약'
                    }`
                  )
                }
              >
                <Text style={styles.quickSearchText}>
                  🔍 "{destination}" 검색으로 바로가기
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Nearby restaurants */}
        {selectedCategory === 'restaurant' && nearbyRestaurants.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📍 첫 번째 장소 근처 음식점</Text>
            {nearbyRestaurants.map((r) => (
              <TouchableOpacity
                key={r.place_id}
                style={styles.restaurantCard}
                onPress={() =>
                  openLink(
                    `https://www.google.com/maps/place/?q=place_id:${r.place_id}`
                  )
                }
              >
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{r.name}</Text>
                  <Text style={styles.restaurantAddr} numberOfLines={1}>
                    {r.vicinity || ''}
                  </Text>
                  <View style={styles.restaurantMeta}>
                    {r.rating && <Text style={styles.restaurantRating}>⭐ {r.rating}</Text>}
                    {r.opening_hours?.open_now !== undefined && (
                      <Text
                        style={[
                          styles.restaurantStatus,
                          { color: r.opening_hours.open_now ? '#66bb6a' : '#ef5350' },
                        ]}
                      >
                        {r.opening_hours.open_now ? '영업 중' : '영업 종료'}
                      </Text>
                    )}
                  </View>
                </View>
                <Text style={{ color: '#4fc3f7', fontSize: 18 }}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Travel tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 예매 팁</Text>
          {[
            { icon: '⏰', tip: '인기 관광지는 최소 1-2주 전에 예매하세요' },
            { icon: '💳', tip: '해외 결제 가능한 카드를 준비해두세요' },
            { icon: '📱', tip: 'Klook/KKday 앱은 현장보다 10-30% 저렴해요' },
            { icon: '🌐', tip: '레스토랑 예약은 Google Maps에서도 가능해요' },
          ].map((item, idx) => (
            <View key={idx} style={styles.tipRow}>
              <Text style={styles.tipIcon}>{item.icon}</Text>
              <Text style={styles.tipText}>{item.tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  header: { padding: 20, paddingBottom: 12 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 13, color: '#8899aa', marginTop: 4 },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap', padding: 12, gap: 12,
    paddingHorizontal: 16,
  },
  categoryCard: {
    width: '46%', backgroundColor: '#1a1a2e', borderRadius: 14,
    padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#334',
  },
  categoryIcon: { fontSize: 32, marginBottom: 8 },
  categoryTitle: { fontSize: 14, fontWeight: '600', color: '#fff' },
  categoryDesc: { fontSize: 11, color: '#8899aa', marginTop: 2 },
  section: { paddingHorizontal: 16, marginTop: 8, marginBottom: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#fff', marginBottom: 12 },
  linkCard: {
    backgroundColor: '#1a1a2e', borderRadius: 12, padding: 14, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#334',
  },
  linkIcon: { fontSize: 24, marginRight: 12 },
  linkInfo: { flex: 1 },
  linkName: { fontSize: 15, fontWeight: '600', color: '#fff' },
  linkUrl: { fontSize: 11, color: '#8899aa', marginTop: 2 },
  linkArrow: { color: '#4fc3f7', fontSize: 18 },
  quickSearchBtn: {
    backgroundColor: '#16213e', borderRadius: 12, padding: 14, marginTop: 8,
    borderWidth: 1, borderColor: '#4fc3f7', alignItems: 'center',
  },
  quickSearchText: { color: '#4fc3f7', fontSize: 14, fontWeight: '600' },
  restaurantCard: {
    backgroundColor: '#1a1a2e', borderRadius: 12, padding: 14, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#334',
  },
  restaurantInfo: { flex: 1 },
  restaurantName: { fontSize: 15, fontWeight: '600', color: '#fff' },
  restaurantAddr: { fontSize: 12, color: '#8899aa', marginTop: 2 },
  restaurantMeta: { flexDirection: 'row', gap: 8, marginTop: 4 },
  restaurantRating: { fontSize: 12, color: '#ffb74d' },
  restaurantStatus: { fontSize: 12 },
  tipRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10, gap: 10 },
  tipIcon: { fontSize: 18 },
  tipText: { flex: 1, fontSize: 13, color: '#aaa', lineHeight: 20 },
});

export default BookingScreen;
