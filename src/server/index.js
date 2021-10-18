const express = require('express');
const cors = require('cors');
const FormData = require('form-data');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const api_key = process.env.API_KEY;
const app = express();
dotenv.config();
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use(express.static('dist'))

app.post('/userurl', async (req, res) => {
  const formdata = new FormData();
  const url = req.body.url;
  formdata.append("key", api_key);
  formdata.append("url", url);
  formdata.append("lang", "auto");

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  const data = await response.json();
  res.send(data)
})

// Setup Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});