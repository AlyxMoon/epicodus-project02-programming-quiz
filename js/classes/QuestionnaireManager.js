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
    return {
      csharp: 10,
      java: 5,
      javascript: 23,
      php: 1,
      python: 0,
      swift: 0,
    }
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
