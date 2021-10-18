// SELECTOR 
const model = document.getElementById('model')
const agreement = document.getElementById('agreement')
const confidence = document.getElementById('confidence')
const irony = document.getElementById('irony')
const subjectivity = document.getElementById('subjectivity')
const score_tag = document.getElementById('score_tag')
const results = document.getElementById('results')
// UPDATE UI
const updateUi = async (data) => {
  model.innerHTML = data.model;
  confidence.innerHTML = data.confidence;
  agreement.innerHTML = data.agreement;
  irony.innerHTML = data.irony;
  subjectivity.innerHTML = data.subjectivity;
  score_tag.innerHTML = data.score_tag;
  results.style.display = 'block'
}

export { updateUi }