import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProgressBarProps {
  progress: number; // Progress as a percentage (0 to 100)
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
      <Text style={styles.text}>{progress}% Complete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: "#3498db",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
    color: "#2c3e50",
  },
});