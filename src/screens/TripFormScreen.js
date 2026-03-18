import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView, Alert,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import useTripStore from '../store/tripStore';
import { format } from 'date-fns';

const TripFormScreen = ({ navigation }) => {
  const { addTrip, setCurrentTrip } = useTripStore();

  const [step, setStep] = useState(1); // 1: 기본정보, 2: 항공, 3: 호텔, 4: 날짜선택
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [markedDates, setMarkedDates] = useState({});
  const [flight, setFlight] = useState({
    airline: '', flightNumber: '', arrivalAirport: '', arrivalTime: '',
    departureAirport: '', departureTime: '',
  });
  const [hotel, setHotel] = useState({ name: '', address: '', checkIn: '', checkOut: '' });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (day) => {
    const selected = day.dateString;
    if (!dateRange.start || (dateRange.start && dateRange.end)) {
      setDateRange({ start: selected, end: null });
      setMarkedDates({
        [selected]: { startingDay: true, color: '#4fc3f7', textColor: '#fff' },
      });
    } else {
      const start = dateRange.start;
      const end = selected >= start ? selected : start;
      const startFinal = selected >= start ? start : selected;

      const marked = {};
      let current = new Date(startFinal);
      const endDate = new Date(end);
      while (current <= endDate) {
        const dateStr = format(current, 'yyyy-MM-dd');
        if (dateStr === startFinal) {
          marked[dateStr] = { startingDay: true, color: '#4fc3f7', textColor: '#fff' };
        } else if (dateStr === end) {
          marked[dateStr] = { endingDay: true, color: '#4fc3f7', textColor: '#fff' };
        } else {
          marked[dateStr] = { color: '#4fc3f7aa', textColor: '#fff' };
        }
        current.setDate(current.getDate() + 1);
      }
      setMarkedDates(marked);
      setDateRange({ start: startFinal, end });
    }
  };

  const handleCreate = async () => {
    if (!destination.trim()) {
      Alert.alert('오류', '목적지를 입력해주세요');
      return;
    }
    if (!dateRange.start || !dateRange.end) {
      Alert.alert('오류', '여행 날짜를 선택해주세요');
      return;
    }

    const trip = await addTrip({
      destination,
      startDate: dateRange.start,
      endDate: dateRange.end,
      flight,
      hotel,
    });
    setCurrentTrip(trip);
    navigation.replace('TripTabs');
  };

  const InputField = ({ label, value, onChangeText, placeholder, keyboardType }) => (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#556"
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Step indicator */}
      <View style={styles.steps}>
        {[1, 2, 3].map((s) => (
          <TouchableOpacity key={s} onPress={() => setStep(s)} style={styles.stepWrap}>
            <View style={[styles.stepDot, step === s && styles.stepDotActive]}>
              <Text style={[styles.stepNum, step === s && styles.stepNumActive]}>{s}</Text>
            </View>
            <Text style={[styles.stepLabel, step === s && styles.stepLabelActive]}>
              {s === 1 ? '기본정보' : s === 2 ? '항공권' : '호텔'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
        {step === 1 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🌏 여행 기본 정보</Text>
            <InputField
              label="목적지"
              value={destination}
              onChangeText={setDestination}
              placeholder="예: 도쿄, 파리, 뉴욕"
            />
            <TouchableOpacity style={styles.calendarBtn} onPress={() => setShowCalendar(!showCalendar)}>
              <Text style={styles.calendarBtnText}>
                📅{' '}
                {dateRange.start && dateRange.end
                  ? `${dateRange.start} ~ ${dateRange.end}`
                  : '여행 날짜 선택'}
              </Text>
            </TouchableOpacity>
            {showCalendar && (
              <Calendar
                onDayPress={handleDateSelect}
                markingType="period"
                markedDates={markedDates}
                theme={{
                  backgroundColor: '#1a1a2e',
                  calendarBackground: '#1a1a2e',
                  textSectionTitleColor: '#4fc3f7',
                  selectedDayBackgroundColor: '#4fc3f7',
                  selectedDayTextColor: '#fff',
                  todayTextColor: '#4fc3f7',
                  dayTextColor: '#fff',
                  textDisabledColor: '#556',
                  arrowColor: '#4fc3f7',
                  monthTextColor: '#fff',
                }}
                style={styles.calendar}
              />
            )}
          </View>
        )}

        {step === 2 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✈️ 항공권 정보</Text>
            <InputField label="항공사" value={flight.airline} onChangeText={(v) => setFlight({ ...flight, airline: v })} placeholder="예: 대한항공, 아시아나" />
            <InputField label="편명" value={flight.flightNumber} onChangeText={(v) => setFlight({ ...flight, flightNumber: v })} placeholder="예: KE123" />
            <InputField label="도착 공항" value={flight.arrivalAirport} onChangeText={(v) => setFlight({ ...flight, arrivalAirport: v })} placeholder="예: NRT (나리타)" />
            <InputField label="도착 시간" value={flight.arrivalTime} onChangeText={(v) => setFlight({ ...flight, arrivalTime: v })} placeholder="예: 14:30" />
            <InputField label="출발 공항 (귀국)" value={flight.departureAirport} onChangeText={(v) => setFlight({ ...flight, departureAirport: v })} placeholder="예: NRT (나리타)" />
            <InputField label="출발 시간 (귀국)" value={flight.departureTime} onChangeText={(v) => setFlight({ ...flight, departureTime: v })} placeholder="예: 18:00" />
          </View>
        )}

        {step === 3 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🏨 호텔 정보</Text>
            <InputField label="호텔명" value={hotel.name} onChangeText={(v) => setHotel({ ...hotel, name: v })} placeholder="예: 신주쿠 그랜드 호텔" />
            <InputField label="주소" value={hotel.address} onChangeText={(v) => setHotel({ ...hotel, address: v })} placeholder="호텔 주소" />
            <InputField label="체크인 시간" value={hotel.checkIn} onChangeText={(v) => setHotel({ ...hotel, checkIn: v })} placeholder="예: 15:00" />
            <InputField label="체크아웃 시간" value={hotel.checkOut} onChangeText={(v) => setHotel({ ...hotel, checkOut: v })} placeholder="예: 11:00" />
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {step < 3 ? (
          <TouchableOpacity style={styles.nextBtn} onPress={() => setStep(step + 1)}>
            <Text style={styles.nextBtnText}>다음 →</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.createBtn} onPress={handleCreate}>
            <Text style={styles.createBtnText}>여행 만들기 🚀</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1a' },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 32,
  },
  stepWrap: { alignItems: 'center', gap: 4 },
  stepDot: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: '#1a1a2e', borderWidth: 2, borderColor: '#334',
    justifyContent: 'center', alignItems: 'center',
  },
  stepDotActive: { backgroundColor: '#4fc3f7', borderColor: '#4fc3f7' },
  stepNum: { color: '#778', fontSize: 14, fontWeight: 'bold' },
  stepNumActive: { color: '#fff' },
  stepLabel: { fontSize: 11, color: '#778' },
  stepLabelActive: { color: '#4fc3f7' },
  scroll: { flex: 1, padding: 20 },
  section: { paddingBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  field: { marginBottom: 16 },
  label: { fontSize: 13, color: '#8899aa', marginBottom: 6 },
  input: {
    backgroundColor: '#1a1a2e', borderRadius: 12, padding: 14,
    color: '#fff', fontSize: 15, borderWidth: 1, borderColor: '#334',
  },
  calendarBtn: {
    backgroundColor: '#1a1a2e', borderRadius: 12, padding: 14,
    borderWidth: 1, borderColor: '#334', marginBottom: 12,
  },
  calendarBtnText: { color: '#4fc3f7', fontSize: 15 },
  calendar: { borderRadius: 12, overflow: 'hidden', marginBottom: 12 },
  footer: { padding: 20 },
  nextBtn: {
    backgroundColor: '#16213e', borderRadius: 16, padding: 16,
    alignItems: 'center', borderWidth: 1, borderColor: '#4fc3f7',
  },
  nextBtnText: { color: '#4fc3f7', fontSize: 16, fontWeight: 'bold' },
  createBtn: {
    backgroundColor: '#4fc3f7', borderRadius: 16, padding: 16, alignItems: 'center',
  },
  createBtnText: { color: '#0f0f1a', fontSize: 16, fontWeight: 'bold' },
});

export default TripFormScreen;
