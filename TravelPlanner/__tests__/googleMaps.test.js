const { optimizeRoute, haversineDistance } = require('../src/services/googleMaps');

// Helper to build a mock place
const makePlace = (name, lat, lng, types = []) => ({
  id: name,
  name,
  types,
  geometry: { location: { lat, lng } },
});

describe('optimizeRoute', () => {
  test('빈 배열은 빈 배열 반환', () => {
    expect(optimizeRoute([])).toEqual([]);
  });

  test('장소 1개는 그대로 반환', () => {
    const places = [makePlace('A', 35.0, 139.0)];
    expect(optimizeRoute(places)).toEqual(places);
  });

  test('2개 장소 — 순서 유지 또는 최적화', () => {
    const a = makePlace('A', 35.0, 139.0);
    const b = makePlace('B', 35.1, 139.1);
    const result = optimizeRoute([a, b]);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(a); // 시작은 항상 첫 번째
    expect(result[1]).toEqual(b);
  });

  test('3개 장소 — 가장 가까운 순서로 정렬', () => {
    // A(도쿄 중심) → C(가까운 곳) → B(먼 곳) 순서가 최적
    const a = makePlace('A', 35.6762, 139.6503); // 도쿄
    const b = makePlace('B', 35.0116, 135.7681); // 교토 (멀다)
    const c = makePlace('C', 35.6586, 139.7454); // 도쿄 근처

    const result = optimizeRoute([a, b, c]);
    expect(result).toHaveLength(3);
    expect(result[0].name).toBe('A'); // 시작은 항상 A
    // C가 B보다 A에 가까우므로 두 번째가 C여야 함
    expect(result[1].name).toBe('C');
    expect(result[2].name).toBe('B');
  });

  test('모든 장소가 동일 위치일 때 — 순서 유지', () => {
    const places = [
      makePlace('A', 35.0, 139.0),
      makePlace('B', 35.0, 139.0),
      makePlace('C', 35.0, 139.0),
    ];
    const result = optimizeRoute(places);
    expect(result).toHaveLength(3);
    expect(result[0].name).toBe('A');
  });

  test('결과에 모든 장소가 포함되어야 함 (중복/누락 없음)', () => {
    const places = [
      makePlace('Seoul', 37.5665, 126.9780),
      makePlace('Busan', 35.1796, 129.0756),
      makePlace('Jeju', 33.4890, 126.4983),
      makePlace('Incheon', 37.4563, 126.7052),
    ];
    const result = optimizeRoute(places);
    expect(result).toHaveLength(4);
    const names = result.map((p) => p.name).sort();
    expect(names).toEqual(['Busan', 'Incheon', 'Jeju', 'Seoul']);
  });
});
