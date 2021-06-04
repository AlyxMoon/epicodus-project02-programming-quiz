class QuestionnaireManager {
  constructor ({
    callbackFinishedQuestionnaire = () => {},
    selectorContainer = '',
    template = () => '',
  } = {}) {
    this.callbackFinishedQuestionnaire = callbackFinishedQuestionnaire
    this.selectorContainer = selectorContainer
    this.template = template
    
    this.pages = []
    this.activePage = null
  }

  addPage (pageOptions = {}) {
    this.pages.push(new QuestionnairePageManager(pageOptions))
  }

  showPage (page = 0) {
    this.activePage = page

    if (this.activePage >= this.pages.length) {
      this.callbackFinishedQuestionnaire(this.calculateResults())
      this.activePage = null
    }

    this.render()
  }

  calculateResults () {
    const results = {
      csharp: 0,
      java: 0,
      javascript: 0,
      php: 0,
      python: 0,
      swift: 0,
    }


    return results
  }

  addEventListeners () {
    $(
      'button[data-change-page]', 
      this.selectorContainer
    ).on('click', (event) => {
      const direction = $(event.currentTarget).data('direction')

      if (direction === 'prev') this.showPage(this.activePage - 1)
      if (direction === 'next') this.showPage(this.activePage + 1)
    })
  }

  render () {
    if (this.activePage === null) {
      $(this.selectorContainer).html('')
      return
    }
    
    $(this.selectorContainer).html(this.template({
      currentPage: this.activePage,
      totalPages: this.pages.length,
    }))

    this.pages[this.activePage].render()

    this.addEventListeners()
  }
}
