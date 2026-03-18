import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView, Linking, Alert,
} from 'react-native';
import useTripStore from '../store/tripStore';

const PlaceDetailScreen = ({ route, navigation }) => {
  const { place } = route.params;
  const { currentTrip, addPlace, removePlace } = useTripStore();

  const isAdded = currentTrip?.places?.some(
    (p) => p.place_id === place.place_id || p.id === place.id
  );

  const handleTogglePlace = async () => {
    if (!currentTrip) return;
    if (isAdded) {
      const existing = currentTrip.places.find(
        (p) => p.place_id === place.place_id || p.id === place.id
      );
      if (existing) await removePlace(currentTrip.id, existing.id);
      Alert.alert('제거됨', `"${place.name}"이(가) 여행에서 제거되었습니다`);
    } else {
      await addPlace(currentTrip.id, place);
      Alert.alert('추가됨', `"${place.name}"이(가) 여행에 추가되었습니다 📍`);
    }
  };

  const handleOpenMaps = () => {
    if (place.geometry?.location) {
      const { lat, lng } = place.geometry.location;
      Linking.openURL(`https://maps.google.com/?q=${lat},${lng}`);
    }
  };

  const handleWebsite = () => {
    if (place.website) Linking.openURL(place.website);
  };

  const handleCall = () => {
    if (place.formatted_phone_number) {
      Linking.openURL(`tel:${place.formatted_phone_number}`);
    }
  };

  const InfoRow = ({ icon, label, value, onPress }) => (
    <TouchableOpacity style={styles.infoRow} onPress={onPress} disabled={!onPress}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <View style={styles.infoText}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={[styles.infoValue, onPress && styles.infoLink]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );

  const isOpen = place.opening_hours?.open_now;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{place.name}</Text>
          {place.rating && (
            <View style={styles.ratingRow}>
              <Text style={styles.ratingStars}>
                {'⭐'.repeat(Math.round(place.rating))}
              </Text>
              <Text style={styles.ratingText}>{place.rating}</Text>
              {place.user_ratings_total && (
                <Text style={styles.ratingCount}>({place.user_ratings_total}개 리뷰)</Text>
              )}
            </View>
          )}
          {place.opening_hours && (
            <View style={[styles.statusBadge, { backgroundColor: isOpen ? '#2e7d32' : '#c62828' }]}>
              <Text style={styles.statusText}>{isOpen ? '영업 중' : '영업 종료'}</Text>
            </View>
          )}
        </View>

        {/* Info section */}
        <View style={styles.infoSection}>
          {place.formatted_address && (
            <InfoRow icon="📍" label="주소" value={place.formatted_address} onPress={handleOpenMaps} />
          )}
          {place.formatted_phone_number && (
            <InfoRow icon="📞" label="전화" value={place.formatted_phone_number} onPress={handleCall} />
          )}
          {place.website && (
            <InfoRow icon="🌐" label="웹사이트" value={place.website} onPress={handleWebsite} />
          )}
          {place.price_level !== undefined && (
            <InfoRow
              icon="💰"
              label="가격대"
              value={['무료', '저렴', '보통', '비쌈', '매우 비쌈'][place.price_level] || '정보 없음'}
            />
          )}
        </View>

        {/* Opening hours */}
        {place.opening_hours?.weekday_text && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🕐 영업시간</Text>
            {place.opening_hours.weekday_text.map((text, idx) => (
              <Text key={idx} style={styles.hourText}>{text}</Text>
            ))}
          </View>
        )}

        {/* Types */}
        {place.types && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🏷️ 카테고리</Text>
            <View style={styles.tags}>
              {place.types.slice(0, 5).map((type) => (
                <View key={type} style={styles.tag}>
                  <Text style={styles.tagText}>{type.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Map preview button */}
        <TouchableOpacity style={styles.mapBtn} onPress={handleOpenMaps}>
          <Text style={styles.mapBtnText}>🗺️ 구글 지도에서 보기</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom action button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.actionBtn, isAdded && styles.actionBtnAdded]}
          onPress={handleTogglePlace}
        >
          <Text style={styles.actionBtnText}>
            {isAdded ? '✓ 여행에서 제거' : '+ 여행에 추가'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  header: { padding: 20, backgroundColor: '#1a1a2e', borderBottomWidth: 1, borderBottomColor: '#334' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  ratingStars: { fontSize: 14 },
  ratingText: { fontSize: 15, color: '#ffb74d', fontWeight: '600' },
  ratingCount: { fontSize: 12, color: '#8899aa' },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statusText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  infoSection: { backgroundColor: '#1a1a2e', margin: 16, borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: '#334' },
  infoRow: {
    flexDirection: 'row', alignItems: 'center', padding: 14,
    borderBottomWidth: 1, borderBottomColor: '#334',
  },
  infoIcon: { fontSize: 20, width: 32 },
  infoText: { flex: 1 },
  infoLabel: { fontSize: 12, color: '#8899aa' },
  infoValue: { fontSize: 14, color: '#fff', marginTop: 2 },
  infoLink: { color: '#4fc3f7' },
  section: { margin: 16, marginTop: 0 },
  sectionTitle: { fontSize: 15, fontWeight: '600', color: '#fff', marginBottom: 10 },
  hourText: { fontSize: 13, color: '#aaa', marginBottom: 4 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { backgroundColor: '#1a1a2e', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: '#334' },
  tagText: { fontSize: 11, color: '#8899aa' },
  mapBtn: {
    margin: 16, backgroundColor: '#16213e', borderRadius: 14, padding: 16,
    alignItems: 'center', borderWidth: 1, borderColor: '#4fc3f7',
  },
  mapBtnText: { color: '#4fc3f7', fontSize: 15, fontWeight: '600' },
  footer: { padding: 16, backgroundColor: '#0f0f1a', borderTopWidth: 1, borderTopColor: '#334' },
  actionBtn: { backgroundColor: '#4fc3f7', borderRadius: 16, padding: 16, alignItems: 'center' },
  actionBtnAdded: { backgroundColor: '#1a1a2e', borderWidth: 1, borderColor: '#ff6b6b' },
  actionBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default PlaceDetailScreen;
