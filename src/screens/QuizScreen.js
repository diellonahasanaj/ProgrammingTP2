import { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuizScreen({ route, navigation }) {

  const { quiz } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index) => {

    if (!showResults) {

      const newSelected = [...selectedAnswers, index];

      setSelectedAnswers(newSelected);

      

      const isCorrect = quiz.questions[currentQuestion].correctAnswers.includes(index);

      if (isCorrect) setScore(score + 1);

      if (currentQuestion < quiz.questions.length - 1) {

        setCurrentQuestion(currentQuestion + 1);

      } else {

        setShowResults(true);

      }

    }

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>{quiz.title}</Text>

      

      {showResults ? (

        <View style={styles.results}>

          <Text style={styles.score}>Score: {score}/{quiz.questions.length}</Text>

          <TouchableOpacity 

            style={styles.button}

            onPress={() => navigation.goBack()}

          >

            <Text style={styles.buttonText}>Back to Tutorials</Text>

          </TouchableOpacity>

        </View>

      ) : (

        <View style={styles.questionContainer}>

          <Text style={styles.questionNumber}>

            Question {currentQuestion + 1}/{quiz.questions.length}

          </Text>

          <Text style={styles.questionText}>

            {quiz.questions[currentQuestion].question}

          </Text>

          

          {quiz.questions[currentQuestion].options.map((option, index) => (

            <TouchableOpacity

              key={index}

              style={styles.optionButton}

              onPress={() => handleAnswer(index)}

            >

              <Text style={styles.optionText}>{option}</Text>

            </TouchableOpacity>

          ))}

        </View>

      )}

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

    marginBottom: 20,

  },

  questionContainer: {

    flex: 1,

  },

  questionNumber: {

    fontSize: 16,

    color: '#666',

    marginBottom: 10,

  },

  questionText: {

    fontSize: 18,

    marginBottom: 20,

  },

  optionButton: {

    backgroundColor: '#f0f0f0',

    padding: 15,

    borderRadius: 8,

    marginBottom: 10,

  },

  optionText: {

    fontSize: 16,

  },

  results: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  score: {

    fontSize: 24,

    marginBottom: 20,

  },

  button: {

    backgroundColor: '#2196F3',

    padding: 15,

    borderRadius: 8,

  },

  buttonText: {

    color: 'white',

    fontSize: 16,

  },

});

import { useProgress } from '../components/ProgressContext';

// Inside component, add:

const { saveProgress } = useProgress();

// Update the handleAnswer function's else clause:

if (currentQuestion < quiz.questions.length - 1) {

  setCurrentQuestion(currentQuestion + 1);

} else {

  setShowResults(true);

  // Save progress

  saveProgress({

    ...progress,

    completedQuizzes: {

      ...progress.completedQuizzes,

      [quiz.id]: true

    },

    scores: {

      ...progress.scores,

      [quiz.id]: score

    }

  });

}

