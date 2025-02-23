import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Animated, ImageBackground } from "react-native";

export default function HomeScreen() {
  const fadeAnim = new Animated.Value(0); // Initialize fadeAnim

  useEffect(() => {
    // Fade in the title and subtitle when the component is mounted
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={{ uri: "https://mrwallpaper.com/images/hd/programming-a-laptop-wuze1bxup48cr0bs.jpg" }} // Replace with a real background image URL
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Animated Title */}
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
          Welcome to Programming Tutorial Platform!
        </Animated.Text>

        {/* Animated Subtitle */}
        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
          Your one-stop platform to learn programming and improve your coding skills.
        </Animated.Text>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Start Learning"
            onPress={() => alert("Let's start coding! Go to Tutorials!")} // Simulating navigation
            color="#3498db"
          />
        </View>

        {/* Extra Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>What's inside?</Text>
          <Text style={styles.infoText}>
            Tutorials, quizzes, coding challenges, and much more to enhance your coding abilities.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a dark overlay to the background image
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
    opacity: 0.8,
  },
  buttonContainer: {
    marginBottom: 20,
    width: "60%",
  },
  infoCard: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "white",
    lineHeight: 20,
  },
}); 