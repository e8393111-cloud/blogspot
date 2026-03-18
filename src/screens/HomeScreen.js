import React, { useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, FlatList,
  SafeAreaView, StatusBar,
} from 'react-native';
import useTripStore from '../store/tripStore';
import { format, parseISO, differenceInDays } from 'date-fns';

const HomeScreen = ({ navigation }) => {
  const { trips, loadTrips, setCurrentTrip, deleteTrip } = useTripStore();

  useEffect(() => {
    loadTrips();
  }, []);

  const handleSelectTrip = (trip) => {
    setCurrentTrip(trip);
    navigation.navigate('TripTabs');
  };

  const renderTrip = ({ item }) => {
    const days = differenceInDays(parseISO(item.endDate), parseISO(item.startDate)) + 1;
    return (
      <TouchableOpacity style={styles.tripCard} onPress={() => handleSelectTrip(item)}>
        <View style={styles.tripEmoji}>
          <Text style={{ fontSize: 36 }}>✈️</Text>
        </View>
        <View style={styles.tripInfo}>
          <Text style={styles.tripTitle}>{item.destination || '목적지 없음'}</Text>
          <Text style={styles.tripDate}>
            {item.startDate ? format(parseISO(item.startDate), 'MM.dd') : '?'} ~{' '}
            {item.endDate ? format(parseISO(item.endDate), 'MM.dd') : '?'} ({days}일)
          </Text>
          <Text style={styles.tripPlaces}>{item.places?.length || 0}개 장소</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteTrip(item.id)}
        >
          <Text style={{ color: '#ff6b6b', fontSize: 18 }}>🗑️</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>내 여행</Text>
        <Text style={styles.headerSub}>소중한 여행을 계획해보세요</Text>
      </View>

      {trips.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🌍</Text>
          <Text style={styles.emptyText}>아직 여행 계획이 없어요</Text>
          <Text style={styles.emptySubText}>새 여행을 추가해보세요!</Text>
        </View>
      ) : (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={renderTrip}
          contentContainerStyle={styles.list}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('TripForm')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  header: { padding: 20, paddingTop: 10 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  headerSub: { fontSize: 14, color: '#8899aa', marginTop: 4 },
  list: { padding: 16 },
  tripCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#16213e',
  },
  tripEmoji: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tripInfo: { flex: 1 },
  tripTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  tripDate: { fontSize: 13, color: '#4fc3f7', marginTop: 2 },
  tripPlaces: { fontSize: 12, color: '#8899aa', marginTop: 2 },
  deleteBtn: { padding: 8 },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyEmoji: { fontSize: 72, marginBottom: 16 },
  emptyText: { fontSize: 18, color: '#fff', fontWeight: '600' },
  emptySubText: { fontSize: 14, color: '#8899aa', marginTop: 8 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4fc3f7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#4fc3f7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  fabText: { fontSize: 30, color: '#fff', lineHeight: 34 },
});

export default HomeScreen;
