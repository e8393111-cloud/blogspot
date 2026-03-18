// Use actual date-fns locale
jest.mock('date-fns/locale', () => jest.requireActual('date-fns/locale'));

const { generateItinerary } = require('../src/utils/itineraryGenerator');

const makePlace = (name, lat, lng, types = ['tourist_attraction']) => ({
  id: name,
  name,
  types,
  geometry: { location: { lat, lng } },
  formatted_address: `${name} 주소`,
  rating: 4.5,
});

const baseTrip = {
  startDate: '2026-04-01',
  endDate: '2026-04-03', // 3박 4일
  places: [
    makePlace('도쿄 타워', 35.6586, 139.7454),
    makePlace('아사쿠사', 35.7148, 139.7967),
    makePlace('시부야', 35.6580, 139.7016),
    makePlace('신주쿠', 35.6938, 139.7034),
    makePlace('우에노', 35.7141, 139.7774),
    makePlace('롯폰기', 35.6641, 139.7322),
  ],
  hotel: { name: '도쿄 그랜드 호텔', address: '도쿄 신주쿠', checkIn: '15:00', checkOut: '11:00' },
  flight: { arrivalTime: '13:00', departureTime: '19:00' },
};

describe('generateItinerary', () => {
  test('날짜가 없으면 빈 배열 반환', () => {
    expect(generateItinerary({ places: baseTrip.places })).toEqual([]);
  });

  test('장소가 없으면 빈 배열 반환', () => {
    expect(generateItinerary({ startDate: '2026-04-01', endDate: '2026-04-03', places: [] })).toEqual([]);
  });

  test('여행 일수만큼 day 배열 생성', () => {
    const result = generateItinerary(baseTrip);
    expect(result).toHaveLength(3); // 4/1 ~ 4/3 = 3일
  });

  test('각 day에 schedule 배열이 존재함', () => {
    const result = generateItinerary(baseTrip);
    result.forEach((day) => {
      expect(day).toHaveProperty('schedule');
      expect(Array.isArray(day.schedule)).toBe(true);
      expect(day.schedule.length).toBeGreaterThan(0);
    });
  });

  test('각 day의 날짜 순서가 올바름', () => {
    const result = generateItinerary(baseTrip);
    expect(result[0].date).toBe('2026-04-01');
    expect(result[1].date).toBe('2026-04-02');
    expect(result[2].date).toBe('2026-04-03');
  });

  test('day 번호가 1부터 순서대로', () => {
    const result = generateItinerary(baseTrip);
    result.forEach((day, idx) => {
      expect(day.day).toBe(idx + 1);
    });
  });

  test('첫째 날에 호텔 체크인 이벤트 포함', () => {
    const result = generateItinerary(baseTrip);
    const firstDaySchedule = result[0].schedule;
    const hasCheckIn = firstDaySchedule.some(
      (item) => item.type === 'hotel' && item.title.includes('체크인')
    );
    expect(hasCheckIn).toBe(true);
  });

  test('마지막 날에 호텔 체크아웃 이벤트 포함', () => {
    const result = generateItinerary(baseTrip);
    const lastDaySchedule = result[result.length - 1].schedule;
    const hasCheckOut = lastDaySchedule.some(
      (item) => item.type === 'hotel' && item.title.includes('체크아웃')
    );
    expect(hasCheckOut).toBe(true);
  });

  test('모든 schedule 이벤트에 time, title, type, duration 필드 존재', () => {
    const result = generateItinerary(baseTrip);
    result.forEach((day) => {
      day.schedule.forEach((item) => {
        expect(item).toHaveProperty('time');
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('type');
        expect(item).toHaveProperty('duration');
        expect(typeof item.duration).toBe('number');
        expect(item.duration).toBeGreaterThan(0);
      });
    });
  });

  test('time 형식이 HH:MM', () => {
    const result = generateItinerary(baseTrip);
    const timeRegex = /^\d{2}:\d{2}$/;
    result.forEach((day) => {
      day.schedule.forEach((item) => {
        expect(item.time).toMatch(timeRegex);
      });
    });
  });

  test('1일 여행도 정상 동작', () => {
    const oneDay = { ...baseTrip, endDate: '2026-04-01' };
    const result = generateItinerary(oneDay);
    expect(result).toHaveLength(1);
    expect(result[0].schedule.length).toBeGreaterThan(0);
  });

  test('장소가 1개뿐이어도 정상 동작', () => {
    const singlePlace = { ...baseTrip, places: [makePlace('도쿄 타워', 35.6586, 139.7454)] };
    const result = generateItinerary(singlePlace);
    expect(result).toHaveLength(3);
  });

  test('장소 타입별 방문 시간 — 박물관은 120분', () => {
    const tripWithMuseum = {
      startDate: '2026-04-01',
      endDate: '2026-04-01',
      places: [makePlace('국립박물관', 35.7, 139.7, ['museum'])],
    };
    const result = generateItinerary(tripWithMuseum);
    const museumEvent = result[0].schedule.find((s) => s.type === 'place');
    expect(museumEvent.duration).toBe(120);
  });

  test('장소 타입별 방문 시간 — 놀이공원은 240분', () => {
    const tripWithPark = {
      startDate: '2026-04-01',
      endDate: '2026-04-01',
      places: [makePlace('디즈니랜드', 35.6, 139.8, ['amusement_park'])],
    };
    const result = generateItinerary(tripWithPark);
    const parkEvent = result[0].schedule.find((s) => s.type === 'place');
    expect(parkEvent.duration).toBe(240);
  });
});
