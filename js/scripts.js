const languages = [
  {
    name: 'js',
    title: 'JavaScript',
    description: 'JavaScript is mainly used for web-based applications and web browsers. But JavaScript is also used beyond the web in software, servers and embedded hardware controls. It is used for situations such as: adding interactive behavior to web pages, creating web/mobile apps, and building/development web server application.',
    traits: ['browser', 'server', 'beginner-friendly', 'multi-platform'],
  },
  {
    name: 'python',
    title: 'Python',
    description: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python\'s simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.',
    traits: ['math', 'whitespace', 'beginner-friendly', 'multi-platform'],
  },
  {
    name: 'csharp',
    title: 'C#',
    description: 'C# programming language is a modern programming language. It derives its characteristics from its predecessors like C and C++. It can perform a wide range of tasks and processes across different niches. While it is exceptionally versatile, there are three fields where it is commonly applied: web application development, windows applications, and games',
    traits: ['microsoft', 'server', 'games'],
  },
  {
    name: 'java',
    title: 'Java',
    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.',
    traits: ['android', 'server', 'minecraft', 'multi-platform'],
  },
  {
    name: 'swift',
    title: 'Swift',
    description: 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Swift combines the performance and efficiency of compiled languages with the simplicity and interactivity of popular scripting languages',
    traits: ['apple'],
  },
  {
    name: 'php',
    title: 'PHP',
    description: 'PHP is EVERYWHERE. There are a lot of reasons to know and love PHP, probably the most potent and valid of which is this: it’s used and runs EVERYWHERE the web does. Your cheap little $3 per month hosting account may let you run a web application in Python or Ruby if you shop carefully. But it’ll definitely run PHP. This means that you can count on it wherever you are.',
    traits: ['server', 'wordpress', 'multi-platform'],
  },
]

const deepCopy = (value) => {
  if (Array.isArray(value)) {
    return value.map(val => deepCopy(val))
  }

  if (typeof value === 'object') {
    let newVal = {}

    for (const [key, val] of Object.entries(value)) {
      newVal[key] = deepCopy(val)
    }

    return newVal
  }

  return value
}

class QuestionPageManager {
  constructor ({
    selectorContainer = '.questionnaire-page',
    title = 'Page',
    templateForPage = () => '',
    templateForQuestion = () => '',
    questions = [],
  } = {}) {
    this.selectorContainer = selectorContainer
    this.title = title
    this.templateForPage = templateForPage
    this.templateForQuestion = templateForQuestion

    this.questions = deepCopy(questions)
  }

  moveQuestionUp (index) {
    this.questions[index].order--
    this.questions[index - 1].order++

    this.sortQuestions()
    this.render()
  }

  moveQuestionDown (index) {
    this.questions[index].order++
    this.questions[index + 1].order--

    this.sortQuestions()
    this.render()
  }

  sortQuestions () {
    this.questions.sort(({ order: orderA }, { order: orderB }) => {
      return orderA - orderB
    })
  }

  addEventListeners () {
    $('button',  this.selectorContainer).on('click', (event) => {
      const clickedIndex = parseInt($(event.currentTarget).data('index'))
      const direction = $(event.currentTarget).data('direction')

      if (direction === 'up') this.moveQuestionUp(clickedIndex)
      if (direction === 'down') this.moveQuestionDown(clickedIndex)
    })
  }

  render () {
    const questionContent = this.questions.map(question => {
      return this.templateForQuestion({ 
        ...question, 
        total: this.questions.length
      })
    }).join('')

    const pageContent = this.templateForPage({
      title: this.title,
      content: questionContent,
    })

    $(this.selectorContainer).html(pageContent)
    this.addEventListeners()
  }
}

const buildLanguageCards = (selectorContainer = '.languages-container') => {
  $(selectorContainer).html(languages.map(templateLanguageCard).join(''))
}

const buildQuestionnairePage = (selectorContainer = '.questionnaire-page-questions') => {
  $(selectorContainer).html([1,2,3].map(templateQuestionCodeBlock).join(''))
}

const main = () => {
  buildLanguageCards()
  
  const questionManagerPage1 = new QuestionPageManager({
    title: 'What block of code looks nicest to you?',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionCodeBlock,
    questions: [
      {
        order: 0,
        text: '' +
          'let test = 4\n' +
          'console.log(test)', 
      },
      {
        order: 1,
        text: '' +
          'let test = 42\n' +
          'console.log(test)', 
      },
      {
        order: 2,
        text: '' +
          'let test = 422\n' +
          'console.log(test)', 
      }
    ]
  })

  questionManagerPage1.render()
}

$(main) // modern replacement for $(document).ready(function () {})
