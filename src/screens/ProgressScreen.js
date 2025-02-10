import { View, Text, StyleSheet, FlatList } from 'react-native';

import { useProgress } from '../components/ProgressContext';

export default function ProgressScreen() {

  const { progress } = useProgress();

  return (

    <View style={styles.container}>

      <Text style={styles.header}>Your Progress</Text>

      

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>Completed Tutorials</Text>

        <FlatList

          data={progress.completedTutorials}

          keyExtractor={(item) => item}

          renderItem={({ item }) => (

            <Text style={styles.item}>✔️ {item}</Text>

          )}

        />

      </View>

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>Quiz Scores</Text>

        <FlatList

          data={Object.entries(progress.scores)}

          keyExtractor={([quizId]) => quizId}

          renderItem={({ item: [quizId, score] }) => (

            <Text style={styles.item}>📝 {quizId}: {score} points</Text>

          )}

        />

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

  },

  header: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  section: {

    marginBottom: 25,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: '600',

    marginBottom: 10,

  },

  item: {

    fontSize: 16,

    marginBottom: 5,

    paddingLeft: 10,

  },

});
