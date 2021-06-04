
const main = () => {
  const questionnaireResults = new QuestionnaireResultsManager({
    selectorContainer: '.questionnaire-results',
    template: templateLanguages,
    languages, // defined in js/data/languages.js
  })

  const questionnaire = new QuestionnaireManager({
    selectorContainer: '.questionnaire',
    template: templateQuestionnaire,
    callbackFinishedQuestionnaire: (pointsPerLanguage) => {
      questionnaireResults.determineOrderOfLanguages(pointsPerLanguage)
      questionnaireResults.render()
    },
  })

  questionnaire.addPage({
    title: 'What block of code looks nicest to you?',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionCodeBlock,
    questions: questionsPage1, // defined in js/data/questions_page_1.js
  })

  questionnaire.addPage({
    title: 'What block of code looks nicest to you? PART TWO',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionCodeBlock,
    questions: [
      {
        order: 0,
        text: '' +
          'let test = 50\n' +
          'console.log(test)', 
      },
      {
        order: 1,
        text: '' +
          'let test = 51231\n' +
          'console.log(test)', 
      },
      {
        order: 2,
        text: '' +
          'let test = 551231\n' +
          'console.log(test)', 
      }
    ]
  })

  questionnaire.showPage()
}

$(main) // modern replacement for $(document).ready(function () {})
