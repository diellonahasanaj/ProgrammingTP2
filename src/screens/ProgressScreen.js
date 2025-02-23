import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import AceEditor from "react-native-ace-editor";

export default function CodeEditorComponent() {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}

add(5, 10); // Example function call
`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = eval(code);
      setOutput(result.toString());
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code Editor</Text>
      <ScrollView style={styles.editorContainer}>
        <AceEditor
          style={styles.editor}
          mode="javascript"
          theme="github"
          value={code}
          onChange={setCode}
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </ScrollView>
      <Button title="Run Code" onPress={runCode} color="#007bff" />
      <View style={styles.outputContainer}>
        <Text style={styles.outputTitle}>Output</Text>
        <ScrollView style={styles.output}>
          <Text>{output}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  editorContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  editor: {
    flex: 1,
    height: 200,
  },
  outputContainer: {
    marginTop: 16,
  },
  outputTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  output: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
  },
});