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
`

templateQuestionPage = ({
  title = 'Questions',
  content = '',
} = {}) => `
<h2>${title}</h2>

<section class="questionnaire-page-questions d-flex flex-column">
  ${content}
</section>
`

templateQuestionCodeBlock = ({
  text = '',
  order = 0,
  total = 0,
}) => {
  const topButtonDisabled = order === 0 
  const bottomButtonDisabled = order >= total - 1

  return `
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
      <code class="form-control">${text}</code>
    </div>
  `
}