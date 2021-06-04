class QuestionnaireResultsManager {
  constructor ({
    selectorContainer = '',
    template = () => '',
    languages = [],

    callbackResetQuestionnaire = () => {},
  } = {}) {
    this.selectorContainer = selectorContainer
    this.template = template

    this.languages = deepCopy(languages)

    this.callbackResetQuestionnaire = callbackResetQuestionnaire
  }

  determineOrderOfLanguages (pointsPerLanguage = {}) {
    this.languages.sort(({ name: nameA }, { name: nameB }) => {
      return pointsPerLanguage[nameB] - pointsPerLanguage[nameA]
    })
  }

  addEventListeners () {
    $('button[data-reset-questionnaire]', this.selectorContainer)
      .on('click', () => {
        this.callbackResetQuestionnaire()
      })
  }

  render () {      
    $(this.selectorContainer).html(this.template({
      languages: this.languages,
    }))

    this.addEventListeners()
  }

  clear () {
    $(this.selectorContainer).html('')
  }
}
