import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, FlatList,
  TouchableOpacity, SafeAreaView, ActivityIndicator, Alert,
} from 'react-native';
import useTripStore from '../store/tripStore';
import { searchPlaces } from '../services/googleMaps';

const PlaceSearchScreen = ({ navigation }) => {
  const { currentTrip, addPlace } = useTripStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addedIds, setAddedIds] = useState(new Set());

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const places = await searchPlaces(query, null);
      setResults(places);
    } catch (e) {
      Alert.alert('오류', '검색 중 문제가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (place) => {
    if (!currentTrip) return;
    await addPlace(currentTrip.id, place);
    setAddedIds((prev) => new Set([...prev, place.place_id]));
    Alert.alert('추가됨', `"${place.name}"이(가) 여행에 추가되었습니다 📍`);
  };

  const getPriceLevel = (level) => {
    if (!level) return '';
    return '₩'.repeat(level);
  };

  const renderItem = ({ item }) => {
    const isAdded = addedIds.has(item.place_id);
    return (
      <TouchableOpacity
        style={styles.resultCard}
        onPress={() => navigation.navigate('PlaceDetail', { place: item })}
      >
        <View style={styles.placeIcon}>
          <Text style={{ fontSize: 28 }}>{getTypeEmoji(item.types)}</Text>
        </View>
        <View style={styles.placeInfo}>
          <Text style={styles.placeName} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.placeAddress} numberOfLines={1}>
            {item.formatted_address || item.vicinity || ''}
          </Text>
          <View style={styles.placeMeta}>
            {item.rating && (
              <Text style={styles.rating}>⭐ {item.rating}</Text>
            )}
            {item.price_level !== undefined && (
              <Text style={styles.price}>{getPriceLevel(item.price_level)}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={[styles.addBtn, isAdded && styles.addedBtn]}
          onPress={() => !isAdded && handleAdd(item)}
        >
          <Text style={[styles.addBtnText, isAdded && styles.addedBtnText]}>
            {isAdded ? '✓' : '+'}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="장소, 관광지, 음식점 검색..."
          placeholderTextColor="#556"
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoFocus
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Text style={styles.searchBtnText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Quick category buttons */}
      <View style={styles.categories}>
        {[
          { label: '🗼 관광지', query: `${currentTrip?.destination || ''} tourist attractions` },
          { label: '🍜 음식점', query: `${currentTrip?.destination || ''} restaurants` },
          { label: '🛍️ 쇼핑', query: `${currentTrip?.destination || ''} shopping` },
          { label: '☕ 카페', query: `${currentTrip?.destination || ''} cafe` },
        ].map((cat) => (
          <TouchableOpacity
            key={cat.label}
            style={styles.catBtn}
            onPress={() => {
              setQuery(cat.query);
              searchPlaces(cat.query).then(setResults);
            }}
          >
            <Text style={styles.catBtnText}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#4fc3f7" />
          <Text style={styles.loadingText}>검색 중...</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.place_id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <View style={styles.center}>
              <Text style={styles.emptyEmoji}>🔍</Text>
              <Text style={styles.emptyText}>검색어를 입력하세요</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

const getTypeEmoji = (types = []) => {
  if (types.includes('museum')) return '🏛️';
  if (types.includes('restaurant') || types.includes('food')) return '🍽️';
  if (types.includes('cafe')) return '☕';
  if (types.includes('park')) return '🌳';
  if (types.includes('shopping_mall') || types.includes('store')) return '🛍️';
  if (types.includes('amusement_park')) return '🎡';
  if (types.includes('beach')) return '🏖️';
  if (types.includes('tourist_attraction')) return '🗼';
  if (types.includes('bar') || types.includes('night_club')) return '🍻';
  return '📍';
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  searchBar: {
    flexDirection: 'row', padding: 16, gap: 10,
  },
  input: {
    flex: 1, backgroundColor: '#1a1a2e', borderRadius: 12,
    padding: 14, color: '#fff', fontSize: 15,
    borderWidth: 1, borderColor: '#334',
  },
  searchBtn: {
    backgroundColor: '#4fc3f7', borderRadius: 12, width: 50,
    justifyContent: 'center', alignItems: 'center',
  },
  searchBtnText: { fontSize: 20 },
  categories: {
    flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 12,
  },
  catBtn: {
    backgroundColor: '#1a1a2e', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8,
    borderWidth: 1, borderColor: '#334',
  },
  catBtnText: { color: '#aaa', fontSize: 12 },
  list: { padding: 16, paddingTop: 0 },
  resultCard: {
    backgroundColor: '#1a1a2e', borderRadius: 14, padding: 14,
    marginBottom: 10, flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: '#334',
  },
  placeIcon: {
    width: 52, height: 52, borderRadius: 10, backgroundColor: '#0f0f1a',
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  placeInfo: { flex: 1 },
  placeName: { fontSize: 15, fontWeight: '600', color: '#fff' },
  placeAddress: { fontSize: 12, color: '#8899aa', marginTop: 2 },
  placeMeta: { flexDirection: 'row', gap: 8, marginTop: 4 },
  rating: { fontSize: 12, color: '#ffb74d' },
  price: { fontSize: 12, color: '#81c784' },
  addBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#4fc3f7', justifyContent: 'center', alignItems: 'center',
  },
  addedBtn: { backgroundColor: '#81c784' },
  addBtnText: { color: '#fff', fontSize: 20, fontWeight: 'bold', lineHeight: 24 },
  addedBtnText: { fontSize: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 80 },
  loadingText: { color: '#8899aa', marginTop: 12 },
  emptyEmoji: { fontSize: 48 },
  emptyText: { color: '#8899aa', marginTop: 12, fontSize: 15 },
});

export default PlaceSearchScreen;
