
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
    templateForQuestion: templateQuestionBlock,
    questions: questionsPage1, // defined in js/data/questions_page_1.js
    questionType: 'code',
  })

  questionnaire.addPage({
    title: 'What kind of environments/platforms do you want to work with?',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionBlock,
    questions: questionsPage2, // defined in js/data/questions_page_2.js
    questionType: 'text',
  })

  questionnaire.showPage(0)

  questionnaireResults.callbackResetQuestionnaire = () => {
    questionnaireResults.clear()
    questionnaire.showPage(0)
  }
}

$(main) // modern replacement for $(document).ready(function () {})
