import { View, Text, StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';

export default function TutorialDetailScreen({ route }) {

  const { tutorial } = route.params;

  const htmlContent = `

    <html>

      <head>

        <style>

          body { font-family: sans-serif; padding: 20px; }

          h1 { color: #2c3e50; }

          pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }

        </style>

      </head>

      <body>

        <h1>${tutorial.title}</h1>

        <p>Here's a simple example:</p>

        <pre>

function greet() {

  console.log("Hello, World!");

}

        </pre>

      </body>

    </html>

  `;

  return (

    <View style={(StyleSheet.create({
      container: {
        flex: 1,
      },

      webview: {
        flex: 1,
      },
    })).container}>

      <WebView

        originWhitelist={['*']}

        source={{ html: htmlContent }}

        style={(StyleSheet.create({
          container: {
            flex: 1,
          },

          webview: {
            flex: 1,
          },
        })).webview}

      />

    </View>

  );

}



import { Button } from 'react-native';

// Add this inside the return statement, before the WebView

<Button

  title="Start Quiz"

  onPress={() => navigation.navigate('Quiz', { 

    quiz: javascriptQuizzes[0] // Update this later with proper data

  })}

/>

// Add this import at the top

import { javascriptQuizzes } from '../data/quizzes';


<View style={(StyleSheet.create({
  container: {
    flex: 1,
  },

  webview: {
    flex: 1,
  },
})).buttonContainer}>

<Button

  title="Start Quiz"

  color="#2196F3"

  onPress={() => navigation.navigate('Quiz', { 

    quiz: javascriptQuizzes[0]

  })}

/>

<Button

  title="Practice Exercise"

  color="#4CAF50"

  onPress={() => navigation.navigate('Exercise', {

    exercise: javascriptExercises[0]

  })}

/>

</View>

// Add to styles

buttonContainer: {

gap: 10,

marginVertical; 15,

paddingHorizontal; 20,

};

import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { javascriptQuizzes, pythonQuizzes } from '../data/quizzes';
import { javascriptExercises, pythonExercises } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { tutorial } = route.params;

  // Get quizzes and exercises based on the tutorial category
  const quizzes = tutorial.category === 'JavaScript' ? javascriptQuizzes : pythonQuizzes;
  const exercises = tutorial.category === 'JavaScript' ? javascriptExercises : pythonExercises;

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          h1 { color: #2c3e50; }
          pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <h1>${tutorial.title}</h1>
        <p>Welcome to the ${tutorial.category} tutorial!</p>
      </body>
    </html>
  `;

  return (
    <View style={(StyleSheet.create({
      container: {
        flex: 1,
      },

      webview: {
        flex: 1,
      },
    })).container}>
      <View style={(StyleSheet.create({
        container: {
          flex: 1,
        },

        webview: {
          flex: 1,
        },
      })).buttonContainer}>
        <Button
          title="Start Quiz"
          color="#2196F3"
          onPress={() => navigation.navigate('Quiz', { quiz: quizzes[0] })}
        />
        <Button
          title="Practice Exercise"
          color="#4CAF50"
          onPress={() => navigation.navigate('Exercise', { exercise: exercises[0] })}
        />
      </View>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={(StyleSheet.create({
          container: {
            flex: 1,
          },

          webview: {
            flex: 1,
          },
        })).webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    gap: 10,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  webview: {
    flex: 1,
  },
});