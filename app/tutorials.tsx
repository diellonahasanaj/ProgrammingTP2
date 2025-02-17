import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function TutorialsScreen() {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [progress, setProgress] = useState({});
  const [quizResults, setQuizResults] = useState({ correct: 0, total: 0 });

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const topics = [
    {
      id: "1",
      title: "Introduction to JavaScript",
      content: `
        JavaScript is a programming language used for web development. It allows you to add interactivity to websites, manipulate the DOM, and communicate with servers.

**Key Concepts:**
- Variables (let, const, var)
- Functions (declaration, expressions, arrow functions)
- Objects and Arrays (methods, destructuring)
- Event Handling (click, hover, form submission)
- Asynchronous Programming (Promises, async/await)

**Example:**
javascript
const greet = (name) => {
  return Hello, {name}!;
};
console.log(greet("Alice")); // Output: Hello, Alice!
      `,
    },
    {
      id: "2",
      title: "React Basics",
      content: `
        React is a JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM for efficient updates.

**Key Concepts:**
- Components (Functional and Class)
- Props and State (passing data, managing state)
- JSX Syntax (embedding expressions, conditional rendering)
- Hooks (useState, useEffect, useContext)
- React Router (navigation, dynamic routes)

**Example:**
javascript
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
      `,
    },
    {
      id: "3",
      title: "Node.js Fundamentals",
      content: `
        Node.js is a runtime environment that allows you to run JavaScript on the server. It is built on Chrome's V8 engine and is commonly used for building APIs and backend services.

**Key Concepts:**
- Event Loop (non-blocking I/O)
- Modules (CommonJS and ES Modules)
- NPM (Node Package Manager)
- Express.js Framework (routing, middleware)
- File System (fs module)

**Example:**
javascript
const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
      `,
    },
    {
      id: "4",
      title: "HTML Basics",
      content: `
        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and content of a webpage.

**Key Concepts:**
- Tags (<div>, <p>, <h1>)
- Attributes (class, id, src)
- Semantic HTML (<header>, <footer>, <article>)
- Forms and Input Elements (<input>, <textarea>, <button>)

**Example:**
html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>
      `,
    },
    {
      id: "5",
      title: "CSS Styling",
      content: `
        CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to control the appearance of HTML elements.

**Key Concepts:**
- Selectors (class, id, element)
- Box Model (margin, padding, border)
- Flexbox and Grid Layout
- Responsive Design (Media Queries)
- Animations and Transitions

**Example:**
css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}
      `,
    },
    {
      id: "6",
      title: "Python Basics",
      content: `
        Python is a high-level programming language known for its simplicity and readability. It is widely used for web development, data analysis, and automation.

**Key Concepts:**
- Variables and Data Types (strings, integers, lists)
- Control Flow (if, for, while)
- Functions and Modules
- File Handling (reading/writing files)
- Error Handling (try/except)

**Example:**
python
def greet(name):
    return f"Hello, {name}!"
print(greet("Alice"))  # Output: Hello, Alice!
      `,
    },
    {
      id: "7",
      title: "Git and Version Control",
      content: `
        Git is a distributed version control system used to track changes in source code during software development.

**Key Concepts:**
- Repositories (Local and Remote)
- Commits and Branches
- Merging and Rebasing
- Pull Requests
- Git Workflow (feature branches, hotfixes)

**Example:**
bash
git add .
git commit -m "Add new feature"
git push origin main
      `,
    },
    {
      id: "8",
      title: "SQL for Beginners",
      content: `
        SQL (Structured Query Language) is used to communicate with and manipulate databases.

**Key Concepts:**
- Database Tables and Relationships
- Basic Queries (SELECT, INSERT, UPDATE, DELETE)
- Joins (INNER, LEFT, RIGHT)
- Aggregations (GROUP BY, HAVING)
- Indexes and Optimization

**Example:**
sql
SELECT name, age FROM users WHERE age > 18;
      `,
    },
  ];

  const quizzes = [
    {
      topicId: "1",
      question: "What is JavaScript primarily used for?",
      options: ["Styling websites", "Adding interactivity to websites", "Database management"],
      answer: "Adding interactivity to websites",
    },
    {
      topicId: "1",
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above",
    },
    {
      topicId: "1",
      question: "What is the output of console.log(typeof []);?",
      options: ["array", "object", "undefined", "null"],
      answer: "object",
    },
    {
      topicId: "1",
      question: "What does the Array.prototype.filter() method do?",
      options: ["Modifies the original array", "Returns a new array with elements that pass a test", "Sorts the array in ascending order", "Reverses the array"],
      answer: "Returns a new array with elements that pass a test",
    },
    {
      topicId: "2",
      question: "What is JSX in React?",
      options: ["A JavaScript library", "A syntax extension for JavaScript", "A CSS framework"],
      answer: "A syntax extension for JavaScript",
    },
    {
      topicId: "2",
      question: "Which hook is used to manage state in functional components?",
      options: ["useEffect", "useState", "useContext"],
      answer: "useState",
    },
    {
      topicId: "3",
      question: "What is Node.js?",
      options: ["A frontend framework", "A runtime environment for JavaScript", "A database"],
      answer: "A runtime environment for JavaScript",
    },
    {
      topicId: "3",
      question: "Which module is used to create a web server in Node.js?",
      options: ["http", "fs", "path"],
      answer: "http",
    },
    {
      topicId: "4",
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "High-Level Text Language",
        "Home Tool Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      topicId: "4",
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>"],
      answer: "<a>",
    },
    {
      topicId: "5",
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      topicId: "5",
      question: "Which CSS property is used to change the text color?",
      options: ["color", "background-color", "font-color"],
      answer: "color",
    },
    {
      topicId: "6",
      question: "What is Python primarily used for?",
      options: ["Web development", "Data analysis", "Both"],
      answer: "Both",
    },
    {
      topicId: "6",
      question: "Which keyword is used to define a function in Python?",
      options: ["def", "function", "func"],
      answer: "def",
    },
    {
      topicId: "7",
      question: "What is Git?",
      options: [
        "A programming language",
        "A version control system",
        "A database management system",
      ],
      answer: "A version control system",
    },
    {
      topicId: "7",
      question: "Which command is used to commit changes in Git?",
      options: ["git commit", "git push", "git add"],
      answer: "git commit",
    },
    {
      topicId: "8",
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Query Language",
      ],
      answer: "Structured Query Language",
    },
    {
      topicId: "8",
      question: "Which SQL statement is used to retrieve data from a database?",
      options: ["SELECT", "INSERT", "UPDATE"],
      answer: "SELECT",
    },
      {
        topicId: "2",
        question: "What is the purpose of useEffect in React?",
        options: [
          "To manage state",
          "To perform side effects (e.g., fetching data)",
          "To create reusable components",
          "To handle events",
        ],
        answer: "To perform side effects (e.g., fetching data)",
      },
      {
        topicId: "2",
        question: "What is the default port for a React development server?",
        options: ["3000", "8080", "5000", "8000"],
        answer: "3000",
      },
      {
        topicId: "3",
        question: "What is the purpose of the require function in Node.js?",
        options: [
          "To import modules",
          "To export modules",
          "To create a server",
          "To read files",
        ],
        answer: "To import modules",
      },
      {
        topicId: "3",
        question: "Which command is used to initialize a new Node.js project?",
        options: ["npm start", "npm init", "npm install", "npm run"],
        answer: "npm init",
      },
      {
        topicId: "4",
        question: "Which tag is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        topicId: "4",
        question: "What is the purpose of the <meta> tag?",
        options: [
          "To define a paragraph",
          "To provide metadata about the document",
          "To create a hyperlink",
          "To embed an image",
        ],
        answer: "To provide metadata about the document",
      },
      {
        topicId: "5",
        question: "Which property is used to change the font size?",
        options: ["font-weight", "font-size", "text-size", "font-family"],
        answer: "font-size",
      },
      {
        topicId: "5",
        question: "What does display: flex; do?",
        options: [
          "Creates a grid layout",
          "Enables flexible box layout",
          "Hides the element",
          "Floats the element",
        ],
        answer: "Enables flexible box layout",
      },
      {
        topicId: "6",
        question: "What is the output of print(2 ** 3);?",
        options: ["6", "8", "9", "16"],
        answer: "8",
      },
      {
        topicId: "6",
        question: "Which method is used to remove an item from a list?",
        options: ["remove()", "delete()", "pop()", "clear()"],
        answer: "remove()",
      },
      {
        topicId: "7",
        question: "What does git clone do?",
        options: [
          "Creates a new branch",
          "Downloads a repository",
          "Commits changes",
          "Merges branches",
        ],
        answer: "Downloads a repository",
      },
      {
        topicId: "7",
        question: "Which command is used to switch branches?",
        options: ["git branch", "git checkout", "git switch", "git merge"],
        answer: "git checkout",
      },
      {
        topicId: "8",
        question: "What is the purpose of the WHERE clause?",
        options: [
          "To filter rows",
          "To sort rows",
          "To group rows",
          "To join tables",
        ],
        answer: "To filter rows",
      },
      {
        topicId: "8",
        question: "Which SQL keyword is used to sort results?",
        options: ["ORDER BY", "GROUP BY", "SORT BY", "FILTER BY"],
        answer: "ORDER BY",
      },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId); // Toggle selected topic
    setQuizAnswer(null); // Reset quiz answer when a new topic is selected
  };

  const handleQuizSubmit = (answer, correctAnswer, totalQuestions) => {
    setQuizAnswer(answer);
    setQuizResults((prev) => {
      const correct = answer === correctAnswer ? prev.correct + 1 : prev.correct;
      return { correct, total: totalQuestions };
    });
  };

  const handleMarkAsComplete = (topicId) => {
    setProgress((prev) => ({ ...prev, [topicId]: true }));
  };

  // Filtered topics based on search query
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation for fade-in effect
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search tutorials..."
          value={searchQuery}
          onChangeText={handleSearch}
        />

        {/* Tutorial Topics List */}
        <Text style={styles.sectionTitle}>Tutorial Topics</Text>
        {filteredTopics.map((topic) => (
          <View key={topic.id}>
            {/* Topic Title */}
            <TouchableOpacity
              style={[
                styles.topicItem,
                selectedTopic === topic.id && styles.selectedTopicItem,
              ]}
              onPress={() => handleTopicSelect(topic.id)}
            >
              <Text style={styles.topicTitle}>{topic.title}</Text>
              {progress[topic.id] && (
                <Text style={styles.completedText}>✔ Completed</Text>
              )}
            </TouchableOpacity>

            {/* Topic Content (rendered inline if selected) */}
            {selectedTopic === topic.id && (
              <Animated.View style={[styles.topicContent, { opacity: fadeAnim }]}>
                <Text style={styles.topicText}>{topic.content}</Text>
                <Button
                  title="Mark as Complete"
                  onPress={() => handleMarkAsComplete(topic.id)}
                />

                {/* Quiz Section */}
                <View style={styles.quizContainer}>
                  <Text style={styles.sectionTitle}>Quiz</Text>
                  {quizzes
                    .filter((quiz) => quiz.topicId === topic.id)
                    .map((quiz, index) => (
                      <View key={index} style={styles.quizItem}>
                        <Text style={styles.quizQuestion}>{quiz.question}</Text>
                        {quiz.options.map((option, i) => (
                          <TouchableOpacity
                            key={i}
                            style={[
                              styles.quizOption,
                              quizAnswer === option && styles.selectedQuizOption,
                            ]}
                            onPress={() =>
                              handleQuizSubmit(option, quiz.answer, quizzes.length)
                            }
                          >
                            <Text>{option}</Text>
                            {quizAnswer === option && (
                              <Text style={styles.quizFeedback}>
                                {option === quiz.answer ? "✅ Correct!" : "❌ Incorrect"}
                              </Text>
                            )}
                          </TouchableOpacity>
                        ))}
                      </View>
                    ))}
                </View>
              </Animated.View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    width: "100%",
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  topicItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    marginVertical: 5,
  },
  selectedTopicItem: {
    backgroundColor: "#3498db",
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  completedText: {
    color: "green",
    marginTop: 5,
    fontStyle: "italic",
  },
  topicContent: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  topicText: {
    fontSize: 16,
    marginVertical: 10,
    color: "#34495e",
  },
  quizContainer: {
    marginTop: 20,
  },
  quizItem: {
    marginBottom: 20,
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#34495e",
  },
  quizOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "#ecf0f1",
  },
  selectedQuizOption: {
    backgroundColor: "#3498db",
  },
  quizFeedback: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#27ae60", // Green for correct, red for incorrect
  },
});