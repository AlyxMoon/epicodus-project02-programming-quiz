
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

    <div class="button-grid">
      <button 
        class="btn btn-outline-secondary"
        data-change-page
        data-direction="prev"
        ${onFirstPage ? 'disabled' : ''}
        ${onFirstPage ? 'aria-disabled="true"' : ''}
      >
        Previous Page
      </button>

      <button 
        class="btn btn-outline-secondary"
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

const templateQuestionCodeBlock = ({
  text = '',
  order = 0,
  total = 0,
}) => {
  const topButtonDisabled = order === 0 
  const bottomButtonDisabled = order >= total - 1

  return `
    <h3 class="my-3">${order + 1}.</h3>

    <div class="input-group question-codeblock">
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
        <code>${text}</code>
      </div>
    </div>
  `
}

const templateLanguageCard = ({
  title = 'Programming Language',
  description = 'Description of the programming language',
} = {}) => `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p>${description}</p>
  </div>
</div>
`.trim()

const templateLanguages = ({ 
  languages = [],
} = {}) => `
<div class="card-group">
  ${languages.map(templateLanguageCard).join('')}
</div>
`.trim()
