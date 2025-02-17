import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; // Import Prism.js theme
import {Platform, Text, View} from 'react-native';

export default function CodeEditor() {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}

add(5, 10); // Example function call
`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Use eval to execute the code
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <View style={{ fontFamily: 'monospace', fontSize: '16px', padding: '16px' }}>
      <Text>Code Editor</Text>
      <View style={{ border: "1px solid #ccc", borderRadius: "4px" }}>
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => highlight(code, languages.js, "javascript")}
          padding={10}
          style={{
            backgroundColor: "#f5f5f5",
            minHeight: "200px",
            overflow: "auto",
          }}
        />
      </View>
      <View style={{ marginTop: "16px" }}>
        <button
          onClick={runCode}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run Code
        </button>
      </View>
      <View style={{ marginTop: "16px" }}>
        <h2>Output</h2>
        <pre style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "4px" }}>
          <code>{output}</code>
        </pre>
      </View>
    </View>
  );
}