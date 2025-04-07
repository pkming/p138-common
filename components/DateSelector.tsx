import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

const DateSelector = ({
  range,
  setRange,
}: {
  range: { startDate: Date; endDate: Date };
  setRange: React.Dispatch<
    React.SetStateAction<{ startDate: Date; endDate: Date }>
  >;
}) => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onStartDateChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setRange((prev) => ({ ...prev, startDate: selectedDate }));
    }
  };

  const onEndDateChange = (event: any, selectedDate?: Date) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setRange((prev) => ({ ...prev, endDate: selectedDate }));
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  if (Platform.OS === "web") {
    return (
      <View style={styles.dateSelector}>
        <input
          type="date"
          value={range.startDate.toISOString().split("T")[0]}
          onChange={(e) => {
            const date = new Date(e.target.value);
            setRange((prev) => ({ ...prev, startDate: date }));
          }}
          max={range.endDate.toISOString().split("T")[0]}
          style={styles.webDateInput as any}
        />
        <Text style={styles.separator}>—</Text>
        <input
          type="date"
          value={range.endDate.toISOString().split("T")[0]}
          onChange={(e) => {
            const date = new Date(e.target.value);
            setRange((prev) => ({ ...prev, endDate: date }));
          }}
          min={range.startDate.toISOString().split("T")[0]}
          max={new Date().toISOString().split("T")[0]}
          style={styles.webDateInput as any}
        />
      </View>
    );
  }

  return (
    <>
      <View style={styles.dateSelector}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowStartPicker(true)}
        >
          <Text style={styles.dateText}>{formatDate(range.startDate)}</Text>
        </TouchableOpacity>

        <Text style={styles.separator}>—</Text>

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowEndPicker(true)}
        >
          <Text style={styles.dateText}>{formatDate(range.endDate)}</Text>
        </TouchableOpacity>
      </View>

      {showStartPicker && (
        <DateTimePicker
          value={range.startDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onStartDateChange}
          maximumDate={range.endDate}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={range.endDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onEndDateChange}
          minimumDate={range.startDate}
          maximumDate={new Date()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f9fc" },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#3366FF",
  },
  navText: { color: "white" },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dateButton: {
    backgroundColor: "#3B82F6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  dateText: {
    color: "white",
    fontSize: 14,
  },
  separator: {
    color: "#9E9E9E",
    fontSize: 16,
  },
  scrollView: { padding: 16 },
  card: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  gradient: {
    padding: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    // height: '100%',
    justifyContent: "space-between",
  },
  cardText: {
    color: "white",
    fontSize: 14,
    marginBottom: 8,
  },
  cardValue: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  orange: { backgroundColor: "#FF7043" },
  blue: { backgroundColor: "#42A5F5" },
  red: { backgroundColor: "#EF5350" },
  purple: { backgroundColor: "#AB47BC" },
  green: { backgroundColor: "#4CAF50" },
  indigo: { backgroundColor: "#3F51B5" },
  pink: { backgroundColor: "#E91E63" },
  orange400: { backgroundColor: "#FF7043" },
  orange600: { backgroundColor: "#FF7043" },
  yellow: { backgroundColor: "#FFEB3B" },
  cyan: { backgroundColor: "#00BCD4" },
  blue400: { backgroundColor: "#42A5F5" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
    marginHorizontal: -8,
  },
  webDateInput: Platform.select({
    web: {
      backgroundColor: "#3B82F6",
      color: "white",
      padding: 8,
      borderRadius: 8,
      border: "none",
      fontSize: 14,
      minWidth: 120,
      textAlign: "center",
    },
    default: {},
  }),
});

export default DateSelector;
