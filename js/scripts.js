
const main = () => {
  const questionnaireResults = new QuestionnaireResultsManager({
    selectorContainer: '.questionnaire-results',
    template: templateLanguages,
    languages, // defined in js/data/languages.js
  })

  const questionnaire = new QuestionnaireManager({
    selectorContainer: '.questionnaire',
    template: templateQuestionnaire,
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

  questionnaire.addPage({
    title: 'What are your thoughts on semicolons (;)?',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionBlock,
    questions: questionsPage3, // defined in js/data/questions_page_3.js
    questionType: 'text',
  })

  questionnaire.addPage({
    title: 'Do you have any interest in making games?',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionBlock,
    questions: questionsPage4, // defined in js/data/questions_page_4.js
    questionType: 'text',
  })

  questionnaire.addPage({
    title: 'Do you have any interest in working with data?',
    selectorContainer: '.questionnaire-page',
    templateForPage: templateQuestionPage,
    templateForQuestion: templateQuestionBlock,
    questions: questionsPage5, // defined in js/data/questions_page_5.js
    questionType: 'text',
  })

  questionnaire.showPage(0)

  questionnaire.callbackFinishedQuestionnaire = (pointsPerLanguage) => {
    questionnaireResults.determineOrderOfLanguages(pointsPerLanguage)
    questionnaireResults.render()
  },

  questionnaireResults.callbackResetQuestionnaire = () => {
    questionnaireResults.clear()
    questionnaire.showPage(0)
  }
}

$(main) // modern replacement for $(document).ready(function () {})
