import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  useWindowDimensions,
} from "react-native";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Get window dimensions for responsiveness
  const { width, height } = useWindowDimensions();

  // Evaluate the code
  const evaluateCode = () => {
    try {
      // Use eval to execute the code
      const result = eval(code);
      setOutput(`Output: ${result}`);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    Keyboard.dismiss(); // Hide keyboard after running code
  };

  // Clear the editor and output
  const clearEditor = () => {
    setCode("");
    setOutput("");
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      {/* Toolbar */}
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButton} onPress={evaluateCode}>
          <Text style={styles.toolbarButtonText}>Run</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton} onPress={clearEditor}>
          <Text style={styles.toolbarButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolbarButton} onPress={toggleTheme}>
          <Text style={styles.toolbarButtonText}>
            {isDarkTheme ? "Light Theme" : "Dark Theme"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Code Editor */}
      <TextInput
        value={code}
        onChangeText={(newCode) => setCode(newCode)}
        multiline={true}
        style={[
          styles.editor,
          isDarkTheme && styles.darkEditor,
          { height: height * 0.4 }, // Responsive height
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="off"
        spellCheck={false}
        placeholder="Write your code here..."
        placeholderTextColor={isDarkTheme ? "#666" : "#999"}
      />

      {/* Output */}
      <ScrollView
        style={[
          styles.codeOutput,
          isDarkTheme && styles.darkCodeOutput,
          { height: height * 0.3 }, // Responsive height
        ]}
      >
        <Text style={[styles.outputText, isDarkTheme && styles.darkOutputText]}>
          {output}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#1e1e1e",
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  toolbarButton: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  toolbarButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  editor: {
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    fontFamily: "monospace",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
  },
  darkEditor: {
    backgroundColor: "#2d2d2d",
    color: "#fff",
    borderColor: "#444",
  },
  codeOutput: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 16,
  },
  darkCodeOutput: {
    backgroundColor: "#2d2d2d",
    borderColor: "#444",
  },
  outputText: {
    fontSize: 14,
    color: "#333",
  },
  darkOutputText: {
    color: "#fff",
  },
});

export default CodeEditor;