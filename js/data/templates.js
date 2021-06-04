
const templateQuestionnaire = ({
  content = '',
  currentPage = 0,
  totalPages = 0,
}) => {
  const onFirstPage = currentPage === 0
  const onLastPage = currentPage >= totalPages - 1

  return `
    ${content}

    <div class="questionnaire-page"></div>

    <div class="d-flex justify-content-between">
      <button 
        class="btn ${onFirstPage ? 'btn-outline-secondary' : 'btn-secondary'}"
        data-change-page
        data-direction="prev"
        ${onFirstPage ? 'disabled' : ''}
        ${onFirstPage ? 'aria-disabled="true"' : ''}
      >
        Previous Page
      </button>

      <button 
        class="btn ${onLastPage ? 'btn-success' : 'btn-primary'}"
        data-change-page
        data-direction="next"
      >
        ${onLastPage ? 'Finish!' : 'Next Page' }
      </button>
    </div>
  `
}

const templateQuestionPage = ({
  title = 'Questions',
  content = '',
} = {}) => `
<h2>${title}</h2>

<section class="questionnaire-page-questions">
  ${content}
</section>
`

const templateQuestionBlock = ({
  text = '',
  order = 0,
  total = 0,
  type = 'code',
}) => {
  const topButtonDisabled = order === 0 
  const bottomButtonDisabled = order >= total - 1

  let contentBlock

  if (type === 'code') {
    contentBlock = `<code>${text}</code>`
  }

  if (type === 'text') {
    contentBlock = `<div class="align-items-center">${text}</div>`
  }

  return `
    <h3 class="my-3">${order + 1}.</h3>

    <div class="input-group question-block">
      <div class="border d-flex flex-column justify-content-stretch">
        <button 
          class="btn btn-outline-secondary border-top-0 border-start-0 border-end-0 border-bottom rounded-none"
          data-question-sort
          data-direction="up"
          data-index="${order}"
          ${topButtonDisabled ? 'disabled' : ''}
          ${topButtonDisabled ? 'aria-disabled="true"' : ''}
        >
          <i class="bi bi-arrow-up"></i>
        </button>
    
        <button 
          class="btn btn-outline-secondary border-top-0 border-start-0 border-end-0 border-bottom-0 rounded-none"
          data-question-sort
          data-direction="down"
          data-index="${order}"
          ${bottomButtonDisabled ? 'disabled' : ''}
          ${bottomButtonDisabled ? 'aria-disabled="true"' : ''}
        >
          <i class="bi bi-arrow-down"></i>
        </button>
      </div>
      <div class="form-control">
        ${contentBlock}
      </div>
    </div>
  `
}

const templateLanguageCard = ({
  title = 'Programming Language',
  description = 'Description of the programming language',
} = {}) => `
<div class="col">
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p>${description}</p>
    </div>
  </div>
</div>
`.trim()

const templateLanguages = ({ 
  languages = [],
} = {}) => `
<div class="d-flex justify-content-end mb-3">
  <button 
    class="btn btn-warning"
    data-reset-questionnaire
  >
    Reset Questionnaire
  </button>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4">
  ${languages.map(templateLanguageCard).join('')}
</div>

<div class="d-flex justify-content-end mt-3">
  <button 
    class="btn btn-warning"
    data-reset-questionnaire
  >
    Reset Questionnaire
  </button>
</div>
`.trim()
