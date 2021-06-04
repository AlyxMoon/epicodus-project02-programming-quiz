class QuestionnaireResultsManager {
  constructor ({
    selectorContainer = '',
    template = () => '',
    languages = [],
  } = {}) {
    this.selectorContainer = selectorContainer
    this.template = template

    this.languages = deepCopy(languages)
  }

  determineOrderOfLanguages (pointsPerLanguage = {}) {
    this.languages.sort(({ name: nameA }, { name: nameB }) => {
      return pointsPerLanguage[nameB] - pointsPerLanguage[nameA]
    })
  }

  addEventListeners () {

  }

  render () {      
    $(this.selectorContainer).html(this.template({
      languages: this.languages,
    }))

    this.addEventListeners
  }
}
