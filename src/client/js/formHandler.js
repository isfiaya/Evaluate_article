// SELECTOR 
const btnSubmit = document.getElementById("btn-submit")
const loader = document.getElementById('loader')
let urlInput = document.getElementById('url')
// URL regex
const regexUrl = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

// HANDEL SUBMIT 
const handleSubmit = async (e) => {
  e.preventDefault()
  //CHECK THE USER INPUT 
  if (!regexUrl.test(urlInput.value)) {
    return alert('please entre URL!')
  }
  // CHANGE STYLE BTN SUBMIT AND ADD SPINNER
  btnSubmit.innerHTML = "pending..."
  btnSubmit.disabled = true
  loader.style.display = "block"
  // REQUEST AND UPDATE UI
  getData()
    .then(data => Client.updateUi(data))
    .then(() => {
      // RESET BTN SUMBIT AND HIDE SPINNER
      btnSubmit.innerHTML = "Submit"
      btnSubmit.disabled = false
      loader.style.display = "none"
    })
}
// REQUEST TO POST DATA TO THE SERVER
const getData = async () => {
  const response = await fetch('http://localhost:4000/userurl', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: urlInput.value
    })
  })
  const data = await response.json()
  urlInput.value = ''
  return data
}

export { handleSubmit }
