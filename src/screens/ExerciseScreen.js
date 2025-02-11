import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExerciseScreen({ route }) {

  const { exercise } = route.params;

  const [code, setCode] = useState('');

  const [result, setResult] = useState('');

  const checkSolution = () => {

    // Basic validation - in real app use proper code evaluation

    const cleanCode = code.replace(/\s/g, '');

    const cleanSolution = exercise.solution.replace(/\s/g, '');

    setResult(cleanCode === cleanSolution ? 'Correct! 🎉' : 'Try again! 💪');

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>{exercise.title}</Text>

      <Text style={styles.description}>{exercise.description}</Text>

      

      <TextInput

        style={styles.codeInput}

        multiline

        placeholder="Write your code here..."

        value={code}

        onChangeText={setCode}

        autoCapitalize="none"

        autoCorrect={false}

        fontFamily="monospace"

      />

      

      <TouchableOpacity style={styles.button} onPress={checkSolution}>

        <Text style={styles.buttonText}>Check Solution</Text>

      </TouchableOpacity>

      

      {result ? <Text style={styles.result}>{result}</Text> : null}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  description: {

    fontSize: 16,

    marginBottom: 20,

  },

  codeInput: {

    flex: 1,

    borderColor: '#ccc',

    borderWidth: 1,

    borderRadius: 8,

    padding: 10,

    marginBottom: 20,

    fontFamily: 'monospace',

  },

  button: {

    backgroundColor: '#4CAF50',

    padding: 15,

    borderRadius: 8,

    alignItems: 'center',

  },

  buttonText: {

    color: 'white',

    fontSize: 16,

  },

  result: {

    marginTop: 20,

    fontSize: 18,

    textAlign: 'center',

  },

});

