class QuestionnaireManager {
  constructor ({
    selectorContainer = '',
    template = () => '',
  } = {}) {
    this.selectorContainer = selectorContainer
    this.template = template
    
    this.pages = []
    this.activePage = null
  }

  addPage (pageOptions = {}) {
    this.pages.push(new QuestionPageManager(pageOptions))
  }

  showPage (page = 0) {
    this.activePage = page
    this.render()
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
    $(this.selectorContainer).html(this.template({
      currentPage: this.activePage,
      totalPages: this.pages.length,
    }))

    if (this.activePage !== null) {
      this.pages[this.activePage].render()
    }

    this.addEventListeners()
  }
}
