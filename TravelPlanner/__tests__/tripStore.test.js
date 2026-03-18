// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
}));

const useTripStore = require('../src/store/tripStore').default;

// Reset store between tests
beforeEach(() => {
  useTripStore.setState({ trips: [], currentTrip: null });
});

describe('tripStore', () => {
  test('초기 상태 — trips 빈 배열, currentTrip null', () => {
    const { trips, currentTrip } = useTripStore.getState();
    expect(trips).toEqual([]);
    expect(currentTrip).toBeNull();
  });

  test('addTrip — 여행 추가 후 trips 배열에 포함', async () => {
    const { addTrip } = useTripStore.getState();
    const newTrip = await addTrip({
      destination: '도쿄',
      startDate: '2026-04-01',
      endDate: '2026-04-05',
    });
    const { trips } = useTripStore.getState();
    expect(trips).toHaveLength(1);
    expect(trips[0].destination).toBe('도쿄');
    expect(trips[0].id).toBeDefined();
    expect(trips[0].places).toEqual([]);
    expect(trips[0].itinerary).toEqual([]);
    expect(newTrip.id).toBe(trips[0].id);
  });

  test('addTrip — 여러 번 추가 시 각각 고유 id', async () => {
    const { addTrip } = useTripStore.getState();
    const t1 = await addTrip({ destination: '도쿄' });
    const t2 = await addTrip({ destination: '파리' });
    const t3 = await addTrip({ destination: '뉴욕' });
    expect(t1.id).not.toBe(t2.id);
    expect(t2.id).not.toBe(t3.id);
    expect(useTripStore.getState().trips).toHaveLength(3);
  });

  test('setCurrentTrip — currentTrip 설정', async () => {
    const { addTrip, setCurrentTrip } = useTripStore.getState();
    const trip = await addTrip({ destination: '도쿄' });
    setCurrentTrip(trip);
    expect(useTripStore.getState().currentTrip).toEqual(trip);
  });

  test('deleteTrip — 삭제 후 trips에서 제거', async () => {
    const { addTrip, deleteTrip } = useTripStore.getState();
    const t1 = await addTrip({ destination: '도쿄' });
    const t2 = await addTrip({ destination: '파리' });
    await deleteTrip(t1.id);
    const { trips } = useTripStore.getState();
    expect(trips).toHaveLength(1);
    expect(trips[0].destination).toBe('파리');
  });

  test('deleteTrip — currentTrip 삭제 시 currentTrip null로 초기화', async () => {
    const { addTrip, setCurrentTrip, deleteTrip } = useTripStore.getState();
    const trip = await addTrip({ destination: '도쿄' });
    setCurrentTrip(trip);
    await deleteTrip(trip.id);
    expect(useTripStore.getState().currentTrip).toBeNull();
  });

  test('updateTrip — 여행 정보 업데이트', async () => {
    const { addTrip, updateTrip } = useTripStore.getState();
    const trip = await addTrip({ destination: '도쿄' });
    await updateTrip(trip.id, { destination: '오사카' });
    const { trips } = useTripStore.getState();
    expect(trips[0].destination).toBe('오사카');
  });

  test('addPlace — 장소 추가 후 places 배열에 포함', async () => {
    const { addTrip, addPlace } = useTripStore.getState();
    const trip = await addTrip({ destination: '도쿄' });
    const place = { name: '도쿄 타워', place_id: 'abc123' };
    await addPlace(trip.id, place);
    const { trips } = useTripStore.getState();
    expect(trips[0].places).toHaveLength(1);
    expect(trips[0].places[0].name).toBe('도쿄 타워');
    expect(trips[0].places[0].id).toBeDefined();
  });

  test('removePlace — 장소 삭제 후 places에서 제거', async () => {
    const { addTrip, addPlace, removePlace } = useTripStore.getState();
    const trip = await addTrip({ destination: '도쿄' });
    await addPlace(trip.id, { name: '도쿄 타워' });
    await addPlace(trip.id, { name: '아사쿠사' });
    const placeId = useTripStore.getState().trips[0].places[0].id;
    await removePlace(trip.id, placeId);
    const { trips } = useTripStore.getState();
    expect(trips[0].places).toHaveLength(1);
    expect(trips[0].places[0].name).toBe('아사쿠사');
  });

  test('updateItinerary — 일정 업데이트', async () => {
    const { addTrip, updateItinerary } = useTripStore.getState();
    const trip = await addTrip({ destination: '도쿄' });
    const itinerary = [{ day: 1, date: '2026-04-01', schedule: [] }];
    await updateItinerary(trip.id, itinerary);
    expect(useTripStore.getState().trips[0].itinerary).toEqual(itinerary);
  });
});
