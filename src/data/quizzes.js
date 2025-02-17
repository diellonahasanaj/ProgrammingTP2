
{

    id: 'js1',

    title; 'JavaScript Basics',

    questions; [

      {

        question: 'How do you declare a variable in JavaScript?',

        options: [

          'var x;',

          'variable x;',

          'v x;',

          'let x;'

        ],

        correctAnswers: [0, 3], // Both var and let are correct

        explanation: 'In JavaScript, you can declare variables using var, let, or const.'

      },

      // Add more questions

    ]

  }



export const javascriptQuizzes = [
  {
    id: 'js1',
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'How do you declare a variable in JavaScript?',
        options: ['var x;', 'variable x;', 'v x;', 'let x;'],
        correctAnswers: [0, 3], // Both var and let are correct
        explanation: 'In JavaScript, you can declare variables using var, let, or const.'
      },
      {
        question: 'What is the output of `console.log(typeof null)`?',
        options: ['"object"', '"null"', '"undefined"', '"boolean"'],
        correctAnswers: [0],
        explanation: 'In JavaScript, `typeof null` returns "object".'
      },
      {
        question: 'Which method adds an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswers: [0],
        explanation: 'The `push()` method adds an element to the end of an array.'
      }
    ]
  },
  {
    id: 'js2',
    title: 'JavaScript Functions',
    questions: [
      {
        question: 'How do you define a function in JavaScript?',
        options: ['function myFunc() {}', 'def myFunc() {}', 'func myFunc() {}', 'const myFunc = () => {}'],
        correctAnswers: [0, 3],
        explanation: 'Functions can be defined using the `function` keyword or as arrow functions.'
      },
      {
        question: 'What is a closure in JavaScript?',
        options: [
          'A function that returns another function',
          'A function that has access to its outer function’s scope',
          'A built-in JavaScript method',
          'A way to declare private variables'
        ],
        correctAnswers: [1],
        explanation: 'A closure is a function that has access to its outer function’s scope, even after the outer function has returned.'
      }
    ]
  }
];

export const pythonQuizzes = [
  {
    id: 'py1',
    title: 'Python Basics',
    questions: [
      {
        question: 'How do you print "Hello, World!" in Python?',
        options: ['print("Hello, World!")', 'console.log("Hello, World!")', 'echo "Hello, World!"', 'printf("Hello, World!")'],
        correctAnswers: [0],
        explanation: 'In Python, you use the `print()` function to output text.'
      },
      {
        question: 'Which of the following is a valid Python variable name?',
        options: ['my_var', '1var', 'var-name', 'var name'],
        correctAnswers: [0],
        explanation: 'Variable names in Python cannot start with a number or contain spaces or hyphens.'
      }
    ]
  }
];

