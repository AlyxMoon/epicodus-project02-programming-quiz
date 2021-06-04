
class QuestionnairePageManager {
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
    $(
      'button[data-question-sort]', 
      this.selectorContainer
    ).on('click', (event) => {
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
