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