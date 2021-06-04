
class QuestionnairePageManager {
  constructor ({
    selectorContainer = '.questionnaire-page',
    title = 'Page',
    templateForPage = () => '',
    templateForQuestion = () => '',
    questions = [],
    questionType,
  } = {}) {
    this.selectorContainer = selectorContainer
    this.title = title
    this.templateForPage = templateForPage
    this.templateForQuestion = templateForQuestion

    this.questions = deepCopy(questions)
    this.questionType = questionType
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

      if (direction === 'up') {
        const prevBlock = $(`.question-block[data-index=${clickedIndex - 1}]`)
        const currentBlock = $(`.question-block[data-index=${clickedIndex}]`)

        const prevBlockOffset = prevBlock.position().top
        const currentBlockOffset = currentBlock.position().top

        const currentBlockOffsetNew = currentBlockOffset - prevBlockOffset - 10
        const prevBlockOffsetNew = currentBlockOffsetNew - currentBlock.height() + 30

        currentBlock.css('top', `-${currentBlockOffsetNew}px`)

        prevBlock.css('top', `${prevBlockOffsetNew}px`)
        $(`.questionnaire-page-questions h3[data-index=${clickedIndex}]`)
          .css('top', `-${currentBlockOffsetNew - currentBlock.height()}px`)
      }

      window.setTimeout(() => {
        if (direction === 'up') this.moveQuestionUp(clickedIndex)
        if (direction === 'down') this.moveQuestionDown(clickedIndex)
      }, 1000)
    })
  }

  render () {
    const questionContent = this.questions.map(question => {
      return this.templateForQuestion({ 
        ...question, 
        type: this.questionType,
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
